<template>
  <div class="about">
    <div class="text-right">
      <button type="button" class="btn btn-primary" @click.prevent="openModal('new')">建立新產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th width="120">產品名稱</th>
          <th width="80">縮圖</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="thumbnail"><img :src="item.imageUrl" alt="產品縮圖"></td>
          <td>{{ item.origin_price | thousands }}</td>
          <td>{{ item.price | thousands }}</td>
          <td>
            <span v-if="item.enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click.prevent="openModal('edit',item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="openModal('delete',item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>
    <!-- 產品Modal -->
    <div id="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input id="imageUrl" v-model="tempProduct.imageUrl[0]" type="text" class="form-control"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                  </label>
                  <input id="customFile" type="file" class="form-control" @change="uploadFile">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl[0]"  alt="上傳的圖片">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題">
                </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input id="category" v-model="tempProduct.category" type="text" class="form-control"
                    placeholder="請輸入分類" >
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input id="unit" v-model="tempProduct.unit" type="unit" class="form-control"
                    placeholder="請輸入單位">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input id="origin_price" v-model="tempProduct.origin_price" type="number" class="form-control"
                    placeholder="請輸入原價">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                    placeholder="請輸入售價">
                </div>
              </div>
              <hr>
                <div class="form-group">
                  <label for="description">產品說明</label>
                  <textarea id="description" v-model="tempProduct.description" type="text" class="form-control"
                    placeholder="請輸入產品說明" >
                  </textarea>
                </div>
                <div class="form-group">
                  <label for="content">產品內容</label>
                  <textarea id="content" v-model="tempProduct.content" type="text" class="form-control"
                    placeholder="請輸入產品描述" >
                  </textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="is_enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateProduct()">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除Modal -->
    <div id="delProductModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Products',
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: []
      },
      isNew: false
    }
  },
  props: ['token'],
  created () {
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products`
    this.$http.get(url)
      .then((res) => {
        this.products = res.data.data
        this.getProducts()
      })
  },
  methods: {
    // 取得產品資料
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },
    // 取的單一產品資料
    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http.get(api).then((res) => {
        $('#productModal').modal('show')
        this.tempProduct = res.data.data
      }).catch(() => {
        this.$bus.$emit('message:push', '發生錯誤', 'danger')
      })
    },
    updateProduct () {
      // 新增商品
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`
      let httpMethod = 'post'
      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
        httpMethod = 'patch'
      }
      this.$http[httpMethod](api, this.tempProduct).then(() => {
        $('#productModal').modal('hide')
        this.getProducts()
      }).catch(() => {
        this.$bus.$emit('message:push', '新增商品失敗', 'danger')
      })
    },
    openModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.isNew = true
          $('#productModal').modal('show')
          break
        case 'edit':
          this.tempProduct = { ...item }
          this.getProduct(this.tempProduct.id)
          $('#productModal').modal('show')
          this.isNew = false
          break
        case 'delete':
          this.tempProduct = { ...item }
          $('#delProductModal').modal('show')
          break
        default:
          break
      }
    },
    delProduct () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
      this.$http.delete(url, this.tempProduct)
        .then(res => {
          this.getProducts()
          $('#delProductModal').modal('hide')
        })
    },
    uploadFile () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`
      // 選取 DOM 中的檔案資訊
      const uploadedfile = document.querySelector('#customFile').files[0]
      console.dir(uploadedfile)
      // 轉成 Form Data
      const formData = new FormData()
      formData.append('file', uploadedfile)

      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          const imgPath = res.data.data.path
          if (this.tempProduct.id) {
            this.tempProduct.imageUrl[0] = imgPath
          } else if (!this.tempProduct.id) {
            this.tempProduct.imageUrl.push(imgPath)
          }
        })
    }
  }
}
</script>

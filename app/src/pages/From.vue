template>
  <div>
    <div class="xx">
    <mt-field placeholder="姓名" v-model="username"></mt-field>
    <mt-field placeholder="手机" type="tel" v-model="phone"></mt-field>
    <mt-field placeholder="QQ" type="tel" v-model="number"></mt-field>
  </div>
    <mt-radio
      title="课程选择"
      v-model="course"
      :options="['Oracle Java+云计算', 'UI视觉设计师', 'WEB/H5前段开发工程师']">
    </mt-radio>
    <div class="btnn">
        <mt-button @click="sub" type="danger">申 请 试 听</mt-button>
    </div>
  </div>
</template>
<script>

  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return{
        username:'',
        phone:'',
        number:'',
        course:'',
        arry:[]
      }

    },
    methods:{
      sub(){
        if(this.username && this.phone && this.course){
          this.arry.unshift({username:this.username,phone:this.phone,number:this.number,course:this.course})
          MessageBox({
            title: '',
            message: '<div style="font-size:33px;color: #000;height: 129px;line-height: 129px">课程选择成功</div>',
          }).then(action =>{
            this.$router.push('/home')
          })
        }else{
          MessageBox({
            title: '',
            message: '<div style="font-size:33px;color: #000;height: 129px;line-height: 129px">请正确填写</div>',
          })
        }

      }
    }
  }
</script>

<style>
.xx .mint-cell-wrapper{
  border:1px solid #8c8c8c;
  width: 320px;
  height:45px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.xx {
    margin-top: 28px;
  }
  .btnn{
    text-align: center;
  }
.mint-button--normal{
  width: 320px;
  height:45px;
  display: inline-block;
  margin-top: 20px;
  background: #c01920;
}
</style>

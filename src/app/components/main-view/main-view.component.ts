import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { RealRevenueService } from './../../services/real-revenue.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private _realRevenue: RealRevenueService) { }


  ngOnInit(): void {
    this.logInfo();
    this.ClickMe();
    this._realRevenue.GetAllNhomSP((status, data) => {
      console.log('call api');
      if (status) {
        this.nhomSP = data;
      }
      else {
        console.log('Error to get NhomSP');
      }
    })
    for (let i = 0; i < 12; i++) {
      this.lstActiveMonths.push(false);
      this.lstActiveChiNhanh.push(false);
      this.lstActiveHeThong.push(false);
      this.lstActiveCuaHang.push(false);
      this.lstActiveKenh.push(false);
      this.lstActiveNhomSP.push(false);
      this.lstActiveNhanVien.push(false);
    }

    //dougnut chart 2;
    let ctx_2 = document.getElementById('dougnutchart_2');
    this.dougnutChart2 = new Chart(ctx_2, {
      type: 'doughnut',
      data: {
        labels: ['Doanh thu bán hàng theo kế hoạch', 'Doanh thu bán hàng năm nay'],
        datasets: [{
          label: '# of Votes',
          data: [50, 50],
          backgroundColor: [
            'rgb(255,205,86, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderColor: [
            'rgb(255,205,86, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    //dougnut chart 1;
    let ctx = document.getElementById('myChart');
    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Doanh thu bán hàng năm trước', 'Doanh thu bán hàng năm nay'],
        datasets: [{
          label: '# of Votes',
          data: [50, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    //polarArea chart 1;
    let polarArea = document.getElementById('polarAreachart');
    this.polarAreaChart = new Chart(polarArea, {
      type: 'polarArea',
      data: {
        labels: ['ELLENTRANG', 'DOMINO', "BENTONI"],
        datasets: [{
          label: '# of Votes',
          data: [20, 35, 50],
          backgroundColor: [
            'rgba(63, 81, 181,0.8)',
            'rgba(244, 67, 54,0.8)',
            'rgba(0, 188, 212,0.8)'
          ],
          borderColor: [
            'rgba(63, 81, 181,1.0)',
            'rgba(244, 67, 54,1.0)',
            'rgba(0, 188, 212,1.0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    //polarArea chart 2;
    let polarArea_2 = document.getElementById('polarAreachart_2');
    this.polarAreaChart_2 = new Chart(polarArea_2, {
      type: 'polarArea',
      data: {
        labels: ['ELLENTRANG', "DOMINO", 'BENTONI'],
        datasets: [{
          label: '# of Votes',
          data: [50, 20, 35],
          backgroundColor: [
            'rgba(63, 81, 181,0.8)',
            'rgba(244, 67, 54,0.8)',
            'rgba(0, 188, 212,0.8)'
          ],
          borderColor: [
            'rgba(63, 81, 181,1.0)',
            'rgba(244, 67, 54,1.0)',
            'rgba(0, 188, 212,1.0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Horizone Chart 1
    let horizontalBar = document.getElementById('horizontalBarChart')
    this.horizontalBarChart = new Chart(horizontalBar, {
      type: 'horizontalBar',
      data: {
        labels: ['SP1', 'SP2', "SP3", "SP4", "SP5", "SP6", "SP7", "SP8", "SP9", "SP10"],
        datasets: [{
          label: 'Top 10 sản phẩm',
          data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          backgroundColor: [
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)'
          ],
          borderColor: [
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)'
          ],
          borderWidth: 1
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    });
    // Mixed Chart
    let mixed = document.getElementById('mixedChart')
    this.mixedChart = new Chart(mixed, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Khách hàng',
          data: [100, 200, 300, 400, 200, 300, 400, 200, 300, 400, 200, 300],
          // this dataset is drawn below
          order: 1,
          backgroundColor: [
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)'
          ],
          borderColor: [
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)'
          ],
          borderWidth: 1
        }, {
          label: 'Số đơn hàng',
          type: "line",
          borderColor: "#F44336",
          data: [133, 221, 783, 2478, 133, 221, 783, 2478, 133, 221, 783, 2478],
          fill: false,
          // this dataset is drawn on top
          borderWidth: 2
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // Horizone Chart 2
    let horizontalBar_2 = document.getElementById('horizontalBarChart_2')
    this.horizontalBarChart_2 = new Chart(horizontalBar_2, {
      type: 'horizontalBar',
      data: {
        labels: ['Online', 'Bán lẻ', "Bán buôn"],
        datasets: [{
          label: 'Năm trước',
          data: [0, 0, 0],
          backgroundColor: [
            'rgba(255, 152, 0, 0.9)',
            'rgba(255, 152, 0,0.9)',
            'rgba(255, 152, 0,0.9)'
          ],
          borderColor: [
            'rgba(255, 152, 0,1.0)',
            'rgba(255, 152, 0,1.0)',
            'rgba(255, 152, 0,1.0)'
          ],
          borderWidth: 1
        },
        {
          label: 'Năm nay',
          data: [50, 50, 50],
          backgroundColor: [
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)'
          ],
          borderColor: [
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)'
          ],
          borderWidth: 1
        }
        ],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    });

    // Horizone Chart 3
    let horizontalBar_3 = document.getElementById('horizontalBarChart_3')
    this.horizontalBarChart_3 = new Chart(horizontalBar_3, {
      type: 'horizontalBar',
      data: {
        labels: ['SP1', 'SP2'],
        datasets: [{
          label: 'Doanh thu bán hàng',
          data: [50, 50, 50],
          backgroundColor: [
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)',
            'rgba(33, 150, 243, 0.9)'
          ],
          borderColor: [
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(33, 150, 243, 1)'
          ],
          borderWidth: 1
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    });
  }

  public testAsync() {
    // let tmp : any;
    // const test = this._realRevenue.GetAllNhomSP((state, response) => {
    //   if(state){
    //     tmp = response;
    //     console.log("Data in running : " + tmp);
    //   }
    //   else{
    //     console.log("ERR");
    //   }
    // })
    // console.log("Data after running : " + tmp);
    // setTimeout(() => {
    //   console.log("Data after 0ms : " + tmp);
    // }, 0);
    // setTimeout(() => {
    //   console.log("Data after 5000ms : " + tmp);
    // }, 5000);
    return "Hi i'm Nam";
  }
  public aboutAge() {
    const response = this.testAsync();
    console.log(response);
    return response + ". I'm 21 years old";
  }

  public aboutGender() {
    const response = this.aboutAge();
    let tmp2: any;
    const tmp = this._realRevenue.GetAllNhomSP((state, response) => {
      if (state) {
        console.log(response);
        tmp2 = response;
      }
      else {
        console.log("ERR_2");
      }
    })
    console.log(response);
    console.log(tmp2);
    return response + ". Men";
  }

  public async loop10000Times() {
    for (let i = 0; i < 2000; i++) {
      console.log("NamDD");
    }
    console.log("Hehe");
    // console.log("Before call api");
    // const tmp = this._realRevenue.GetAllNhomSP((state, response) => {
    //   if(state){
    //     console.log(response);
    //     //tmp2 = response;
    //     return response
    //   }
    //   else{
    //     console.log("ERR_2");
    //   }
    // })
    // console.log("After call api");
  }

  public GetAll(callback, tmp) {
    callback();
    tmp();
  }



  public async logInfo() {
    // console.log("NamDD");
    // const tmp = this.GetAll(this.loop10000Times, () => {
    //   console.log("That Ok");
    // });
    // console.log(tmp);
    // // for(let i = 0 ; i < 2000; i++){
    // //   console.log("NamDD_2");
    // // }
    // for(let i = 0 ; i < 1500; i++){
    //   console.log("NamDD_3");
    // }
    // console.log(this.aboutGender())
    // setTimeout(() => {console.log("setTimeOut after loop")}, 0);

    console.log('Before Promise');
    let t = new Promise((resolve, err) => {
      resolve('Hello');
    })
    t.then((data) => {
      return data + " NamDD.";
    })
      .then((data) => {
        return data + " how are you?";
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })

    console.log('After Promise');
    // this.loop10000Times();

    //Callback

  }

  public async ClickMe() {
    // this._realRevenue.GetAnimalGif('dog', (status, response) => {
    //   if(status){
    //     document.getElementById('dog').setAttribute('src', response.data.image_url);
    //     this._realRevenue.GetAnimalGif('cat', (status, responseFromCallBack) => {
    //       if(status){
    //         document.getElementById('cat').setAttribute('src', responseFromCallBack.data.image_url);
    //       }
    //       this._realRevenue.GetAnimalGif('pig', (status, responseFromCallBack) => {
    //         if(status){
    //           document.getElementById('pig').setAttribute('src', responseFromCallBack.data.image_url);
    //         }
    //       })
    //     })
    //   }
    // })

    // this._realRevenue.GetAnimalGif('dog' ,(state, callback) => {
    //   if(state){
    //     //console.log(callback);
    //     document.getElementById('dog').setAttribute('src', callback.data.image_url);
    //   }
    // });
    // this._realRevenue.GetAnimalGif('cat' ,(state, callback) => {
    //   if(state){
    //     //console.log(callback);
    //     document.getElementById('cat').setAttribute('src', callback.data.image_url);
    //   }
    // });
    // this._realRevenue.GetAnimalGif('pig' ,(state, callback) => {
    //   if(state){
    //     //console.log(callback);
    //     document.getElementById('pig').setAttribute('src', callback.data.image_url);
    //   }
    // });

    // Promise Chaining
    // this._realRevenue.GetAnimalGif_2('dog')
    // .then(
    //   (data) => {
    //     //console.log(data.data.image_url);
    //     document.getElementById('dog').setAttribute('src', data.data.image_url);
    //     return this._realRevenue.GetAnimalGif_2('cat');
    //   }
    // )
    // .then(
    //   (data) => {
    //     document.getElementById('cat').setAttribute('src', data.data.image_url);
    //     return this._realRevenue.GetAnimalGif_2('pig');
    //   }
    // )
    // .then(
    //   (data) => {
    //     document.getElementById('pig').setAttribute('src', data.data.image_url);
    //     //return this._realRevenue.GetAnimalGif_2('pig');
    //   }
    // )

    //PromiseAll
    // const tmp = Promise.all([
    //   this._realRevenue.GetAnimalGif_2('dog').then(
    //     (data) => {
    //       //console.log(data.data.image_url);
    //       document.getElementById('dog').setAttribute('src', data.data.image_url);
    //     }
    //   ),
    //   this._realRevenue.GetAnimalGif_2('cat').then(
    //     (data) => {
    //       //console.log(data.data.image_url);
    //       document.getElementById('cat').setAttribute('src', data.data.image_url);
    //     }
    //   ),
    //   this._realRevenue.GetAnimalGif_2('pig').then(
    //     (data) => {
    //       //console.log(data.data.image_url);
    //       document.getElementById('pig').setAttribute('src', data.data.image_url);
    //     }
    //   )
    // ]);
    // this._realRevenue.GetAnimalGif_2('dog').then(
    //   (data) => {
    //     //console.log(data.data.image_url);
    //     document.getElementById('dog').setAttribute('src', data.data.image_url);
    //   }
    // );
    // this._realRevenue.GetAnimalGif_2('cat').then(
    //   (data) => {
    //     //console.log(data.data.image_url);
    //     document.getElementById('cat').setAttribute('src', data.data.image_url);
    //   }
    // );
    // this._realRevenue.GetAnimalGif_2('pig').then(
    //   (data) => {
    //     //console.log(data.data.image_url);
    //     document.getElementById('pig').setAttribute('src', data.data.image_url);
    //   }
    // )

    // Async / Await
    // console.log("Url before");
    // const url = await this._realRevenue.GetAnimalGif_3('dog');
    // console.log("Url after" + url.data.image_url);
    // console.log("Url after");
    // document.getElementById('dog').setAttribute('src', url.data.image_url);
    // console.log("Url end" + url.data.image_url);
    // const url_2 = await this._realRevenue.GetAnimalGif_3('cat');
    // console.log("url_2 after" + url_2.data.image_url);
    // console.log("url_2 after");
    // document.getElementById('cat').setAttribute('src', url_2.data.image_url);
    // console.log("url_2 end" + url_2.data.image_url);
    // const url_3 = await this._realRevenue.GetAnimalGif_3('pig');
    // console.log("url_3 after" + url_3.data.image_url);
    // console.log("url_3 after");
    // document.getElementById('pig').setAttribute('src', url_3.data.image_url);
    // console.log("url_3 end" + url_3.data.image_url);
    // this.logInfo();

    // Async/Await Promise.All()
      // this._realRevenue.GetAnimalGif_3('dog').then((url) => {
      //   document.getElementById('dog').setAttribute('src', url.data.image_url);
      //   console.log("inline1");
      // })
      // this.AsyncFunc();
      // this._realRevenue.GetAnimalGif_3('cat').then((url) => {
      //   document.getElementById('cat').setAttribute('src', url.data.image_url);
      //   console.log("inline2");
      // })
      // this._realRevenue.GetAnimalGif_3('pig').then((url) => {
      //   document.getElementById('pig').setAttribute('src', url.data.image_url);
      //   console.log("inline3");
      // })
      console.log("NamDDD_5")
      let tmp1 = this.randomImg('dog');
      console.log('dog running');
      let tmp2 = this.randomImg('cat');
      console.log(tmp1);
      console.log(tmp2);
      console.log('cat running');
      await Promise.all([
        tmp1, tmp2
      ]);
      console.log(tmp1);
      console.log(tmp2);
      alert("Complete!");
      //this.execute();
  }

  public async setTimeOut(time){
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    })
  }
  async execute() {
    //let t = await this.findResult().then((data) => {console.log(data)});
    console.log(await this.findResult());
    console.log("NamDD is the best!");
  }
  
  async findResult() {
    for(var i = 0; i < 100000; i++) {
      var j = 100
    }
  
    console.log('before findResult')
    var tmp;
    //await db.collection('hospitals').findOne({name: '医療法人神甲会隈病院'})
    var result = await this._realRevenue.GetAnimalGif_3('dog').then((url) => {
        document.getElementById('dog').setAttribute('src', url.data.image_url);
        console.log("inline1");
        tmp = url.data.image_url;
      })
    console.log('after findResult')
    return 10;
  }

  public async randomImg(tag){
    for(let i = 0; i < 3;i++){
      await this._realRevenue.GetAnimalGif_3(tag).then((url) => {
        document.getElementById(tag).setAttribute('src', url.data.image_url);
        console.log("In randomImg " + i);
      })
      setTimeout(() => {console.log("STT : " + i)}, (i+1)*2000);
    }
  }

  public async AsyncFunc(){
    await this._realRevenue.GetAnimalGif_3('pig').then((url) => {
      document.getElementById('pig').setAttribute('src', url.data.image_url);
      console.log("inline asyncFunc");
    }); 
  }

  public years: string[] = ["2018", "2019", "2020"];
  public months: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  public chiNhanh: string[] = ["Hà Nội"];
  public heThong: string[] = ["DOMINO", "BENTONI", "ELLENTRANG"];
  public cuaHang: string[] = ["CÁT LINH", "HÀNG BÔNG", "KIM MÃ", "CẦU GIẤY", "ELLENTRANG"];
  public kenh: string[] = ["Bán buôn", "Bán lẻ", "Online"];
  public nhomSP: any[] = [];
  public nhanVien: string[] = [];
  public tieuDe: any[] = [
    { maTieuDe: "Chietkhau", tenTieuDe: "Chiết khấu" },
    { maTieuDe: "Doanhthubanhang", tenTieuDe: "Doanh thu bán hàng" },
    { maTieuDe: "Doanhthuthuan", tenTieuDe: "Doanh thu thuần" },
    { maTieuDe: "Tralai", tenTieuDe: "Trả lại" }];
  public toggle = true;
  public active: any = 0;
  public lstActiveMonths: boolean[] = new Array;
  public lstActiveChiNhanh: boolean[] = new Array;
  public lstActiveHeThong: boolean[] = new Array;
  public lstActiveCuaHang: boolean[] = new Array;
  public lstActiveKenh: boolean[] = new Array;
  public lstActiveNhomSP: boolean[] = new Array;
  public lstActiveNhanVien: boolean[] = new Array;
  public activeTieuDe: any = 0;

  // Chart's Detail
  public recentYearData: any = 50;
  public lastYearData: any = 50;
  public sumInPlanRevenue: any = 50;
  public recentYearDataInPolar: any[] =
    [
      {
        hethong: "ELLENTRANG",
        tong: 50
      },
      {
        hethong: "DOMINO",
        tong: 50
      },
      {
        hethong: "BENTOLI",
        tong: 50
      }
    ]
  public lastYearDataInPolar: any[] = [
    {
      hethong: "ELLENTRANG",
      tong: 50
    },
    {
      hethong: "DOMINO",
      tong: 50
    },
    {
      hethong: "BENTOLI",
      tong: 50
    }
  ];

  // Dataset in Chart
  public myChart: any;
  public dougnutChart2: any;
  public polarAreaChart: any;
  public polarAreaChart_2: any;
  public mixedChart: any;
  public horizontalBarChart: any;
  public horizontalBarChart_2: any;
  public horizontalBarChart_3: any;

  //Middleware
  public formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });


  //FUNC
  public toggleBoolean(item, i) {
    if (item === 'nam') {
      this.active = i;
    }
    if (item === 'tieude') {
      this.activeTieuDe = i;
    }
  }
  public chooseProp(value, i) {
    if (value === 'months') {
      this.lstActiveMonths[i] = !this.lstActiveMonths[i];
    }
    if (value === 'chinhanh') {
      this.lstActiveChiNhanh[i] = !this.lstActiveChiNhanh[i];
    }
    if (value === 'hethong') {
      this.lstActiveHeThong[i] = !this.lstActiveHeThong[i];
    }
    if (value === 'kenh') {
      this.lstActiveKenh[i] = !this.lstActiveKenh[i];
    }
    if (value === 'nhomsp') {
      this.lstActiveNhomSP[i] = !this.lstActiveNhomSP[i];
    }
    if (value === 'nhanvien') {
      this.lstActiveNhanVien[i] = !this.lstActiveNhanVien[i];
    }
    if (value === 'cuahang') {
      this.lstActiveCuaHang[i] = !this.lstActiveCuaHang[i];
    }
  }

  public async ShowData() {
    let allActive = document.getElementsByTagName('ul');
    let inputFilter = {};
    for (let i = 0; i < allActive.length; i++) {
      //console.log(allActive[i].innerHTML);
      let activeProp = allActive[i].getElementsByClassName('active');
      let arrayFilter = [];
      if (i === 0) {
        inputFilter['nam'] = parseInt(activeProp[0].innerHTML);
      }
      else if (i === 1) {
        let thangActive = [];
        for (let j = 0; j < activeProp.length; j++) {
          thangActive.push(parseInt(activeProp[j].innerHTML));
        }
        inputFilter['thang'] = thangActive;
      }
      else if (i === 2) {
        let chiNhanhActive = [];
        for (let j = 0; j < activeProp.length; j++) {
          chiNhanhActive.push(parseInt(activeProp[j].innerHTML));
        }
        inputFilter['machinhanh'] = ["HN"];
      }
      else if (i === 3) {
        let heThongActive = [];
        for (let j = 0; j < activeProp.length; j++) {
          heThongActive.push(activeProp[j].innerHTML.trim());
        }
        inputFilter['hethong'] = heThongActive;
      }
      else if (i === 4) {
        let cuaHangActive = [];
        for (let j = 0; j < activeProp.length; j++) {
          cuaHangActive.push(activeProp[j].innerHTML.trim());
        }
        inputFilter['macuahang'] = cuaHangActive;
      }
      else if (i === 5) {
        let kenhBanHangActive = [];
        for (let j = 0; j < activeProp.length; j++) {
          console.log(activeProp[j].innerHTML);
          if (activeProp[j].innerHTML.trim() === "Bán buôn") {
            kenhBanHangActive.push('ban buon');
          }
          else if (activeProp[j].innerHTML.trim() === "Bán lẻ") {
            kenhBanHangActive.push('ban le');
          }
          else {
            kenhBanHangActive.push('online');
          }
        }
        inputFilter['kenhbanhang'] = kenhBanHangActive;
      }
      else if (i === 6) {
        let maNhomActive = [];
        for (let j = 0; j < activeProp.length; j++) {
          for (let k = 0; k < this.nhomSP.length; k++) {
            if (activeProp[j].innerHTML.trim() === this.nhomSP[k].tensanpham.trim()) {
              maNhomActive.push(this.nhomSP[k].manhomsp);
            }
          }
        }
        inputFilter['manhom'] = maNhomActive;
      }
      else if (i === 7) {
        // Nhan vien
      }
      else {
        let tmp = activeProp[0].innerHTML.trim();
        console.log(tmp);
        //console.log(activeProp[0].innerHTML.trim());
        let pre: string;
        for (let k = 0; k < this.tieuDe.length; k++) {
          //if()
          if (this.tieuDe[k].tenTieuDe === tmp) {
            inputFilter['tieude'] = this.tieuDe[k].maTieuDe;
            console.log(this.tieuDe[k].maTieuDe);
            break;
          }
        }
      }
    }
    // Recent year data
    // polar chart

    await this.getSumRecentYear(inputFilter);
    console.log('Hi 1');
    await this.getSumInPlanRevenue(inputFilter);
    console.log('Hi 2');
    await this.getSumLastYear(inputFilter);
    console.log('Hi 3');
    await this.GetTopTenProductsWithTitle(inputFilter);
    console.log('Hi 4');
    await this.GetTopTenStoresWithTitle(inputFilter);
    console.log('Hi 5');
    await this.GetCountedOrders(inputFilter);
    console.log('Hi 6');
    await this.GetCountedCustomers(inputFilter);
    console.log('Hi 7');
    await this.GetSumGroupByChannel(inputFilter, 1);
    console.log('Hi 8');
    await this.getSpecificStoresWithTitle(inputFilter, this.polarAreaChart, 1);
    console.log('Hi 9');

    let inputFilter_2 = {};

    inputFilter_2['nam'] = inputFilter['nam'] - 1;
    inputFilter_2['thang'] = inputFilter['thang'];
    inputFilter_2['machinhanh'] = inputFilter['machinhanh'];
    inputFilter_2['tieude'] = inputFilter['tieude'];
    inputFilter_2['hethong'] = inputFilter['hethong'];
    inputFilter_2['macuahang'] = inputFilter['macuahang'];
    inputFilter_2['kenhbanhang'] = inputFilter['kenhbanhang'];
    inputFilter_2['manhom'] = inputFilter['manhom'];

    // Last year data
    await this.getSpecificStoresWithTitle(inputFilter_2, this.polarAreaChart_2, 2);
    await this.GetSumGroupByChannel(inputFilter_2, 0);
    console.log("InputFilter data");
    console.log(inputFilter);
    console.log(inputFilter_2);

  }

  public async getSumRecentYear(inputFilter) {
    await this._realRevenue.GetRealRevenue(inputFilter, (status, data) => {
      if (status) {
        console.log(data);
        this.recentYearData = data;
        this.myChart.data.datasets[0].data[1] = data;
        this.dougnutChart2.data.datasets[0].data[1] = data;
        this.myChart.update();
        this.dougnutChart2.update();
      }
      else {
        console.log('Error to set recentYearData = data');
      }
    })
    console.log('NamDDD');
  }

  public async getSumLastYear(inputFilter) {
    let except = {};
    except['nam'] = inputFilter['nam'] - 1;
    except['thang'] = inputFilter['thang'];
    except['machinhanh'] = inputFilter['machinhanh'];
    except['tieude'] = inputFilter['tieude'];
    except['hethong'] = inputFilter['hethong'];
    except['macuahang'] = inputFilter['macuahang'];
    except['kenhbanhang'] = inputFilter['kenhbanhang'];
    except['manhom'] = inputFilter['manhom'];
    //console.log(input);
    //console.log(inputFilter);
    await this._realRevenue.GetRealRevenue(except, (status, data) => {
      if (status) {
        console.log(data);
        this.lastYearData = data;
        this.myChart.data.datasets[0].data[0] = data;
        this.myChart.update();
      }
      else {
        console.log('Error to set lastYearData = data');
      }
    })
    console.log('NamDDD');
  }

  public async getSumInPlanRevenue(inputFilter) {

    await this._realRevenue.GetSumInPlanRevenue(inputFilter, (status, data) => {
      if (status) {
        console.log(data);
        this.sumInPlanRevenue = data;
        this.dougnutChart2.data.datasets[0].data[0] = data;
        this.dougnutChart2.update();
      }
      else {
        console.log('Error to set lastYearData = data');
      }
    })
    console.log('NamDDD');
  }


  public async getSpecificStoresWithTitle(inputFilter, chart, index) {
    let except = {};
    except['nam'] = inputFilter['nam'];
    except['thang'] = inputFilter['thang'];
    except['machinhanh'] = inputFilter['machinhanh'];
    except['tieude'] = inputFilter['tieude'];
    await this._realRevenue.GetSpecificStoresWithTitle(except, (status, data) => {
      if (status) {
        if (index === 1) {
          this.recentYearDataInPolar = data;
        }
        else {
          this.lastYearDataInPolar = data;
        }
        for (let j = 0; j < data.length; j++) {
          //console.log("Oki");
          chart.data.labels[j] = data[j]?.hethong;
          chart.data.datasets[0].data[j] = data[j]?.tong;
        }
        console.log("Compare VVVVVV____2");
        console.log(this.recentYearDataInPolar);
        console.log(this.lastYearDataInPolar);
        //console.log(this.recentYearDataInPolar);
        console.log("/////2/////");
        //this.lastYearData = data;
        chart.update();
      }
      else {
        console.log('Error to getSpecificStoresWithTitle ');
      }
    })
    console.log('NamDDD');
  }

  // Orders and Customers
  public async GetCountedOrders(inputFilter) {
    let except = {};
    except['nam'] = inputFilter['nam'];
    except['machinhanh'] = inputFilter['machinhanh'];
    except['hethong'] = inputFilter['hethong'];
    except['macuahang'] = inputFilter['macuahang'];
    except['kenhbanhang'] = inputFilter['kenhbanhang'];
    except['manhom'] = inputFilter['manhom'];
    await this._realRevenue.GetCountedOrders(except, (status, data) => {
      if (status) {
        console.log(data);
        for (let j = 0; j < data.length; j++) {
          this.mixedChart.data.datasets[1].data[j] = data[j]?.counted;
        }
        this.mixedChart.update();
      }
      else {
        console.log("Error to set data to mixedChart");
      }
    })
    console.log('NamDDD');
  }

  public async GetCountedCustomers(inputFilter) {
    let except = {};
    except['nam'] = inputFilter['nam'];
    except['machinhanh'] = inputFilter['machinhanh'];
    except['hethong'] = inputFilter['hethong'];
    except['macuahang'] = inputFilter['macuahang'];
    except['kenhbanhang'] = inputFilter['kenhbanhang'];
    except['manhom'] = inputFilter['manhom'];
    await this._realRevenue.GetCountedCustomers(except, (status, data) => {
      if (status) {
        console.log(data);
        for (let j = 0; j < data.length; j++) {
          this.mixedChart.data.datasets[0].data[j] = data[j]?.counted;
        }
        this.mixedChart.update();
      }
      else {
        console.log("Error to set data to mixedChart");
      }
    })
    console.log('NamDDD');
  }

  public async GetTopTenProductsWithTitle(inputFilter) {
    let except = {};
    except['nam'] = inputFilter['nam'];
    except['machinhanh'] = inputFilter['machinhanh'];
    except['hethong'] = inputFilter['hethong'];
    except['macuahang'] = inputFilter['macuahang'];
    except['kenhbanhang'] = inputFilter['kenhbanhang'];
    except['manhom'] = inputFilter['manhom'];
    except['tieude'] = inputFilter['tieude'];

    await this._realRevenue.GetTopTenProductsWithTitle(except, (status, data) => {
      if (status) {
        console.log(data);
        this.horizontalBarChart.data.datasets[0].label = "Top 10 sản phẩm theo " + except['tieude'];
        for (let j = 0; j < data.length; j++) {
          this.horizontalBarChart.data.labels[j] = data[j]?.tensanpham;
          this.horizontalBarChart.data.datasets[0].data[j] = data[j]?.tong;
        }
        this.horizontalBarChart.update();
      }
      else {
        console.log("Error to set data to horizontalBarChart");
      }
    })
    console.log('NamDDD');
  }

  public async GetSumGroupByChannel(inputFilter, index) {
    // let except = {};
    // except['nam'] = inputFilter['nam'];
    // except['machinhanh'] = inputFilter['machinhanh'];
    // except['thang'] = inputFilter['thang'];
    // except['hethong'] = inputFilter['hethong'];
    // except['macuahang'] = inputFilter['macuahang'];
    // except['manhom'] = inputFilter['manhom'];
    // except['tieude'] = inputFilter['tieude'];
    // except['kenhbanhang'] = inputFilter['kenhbanhang'];
    //console.log(except);
    console.log(inputFilter);
    await this._realRevenue.GetSumGroupByChannel(inputFilter, (status, data) => {
      if (status) {
        console.log(data);
        for (let j = 0; j < data.length; j++) {
          this.horizontalBarChart_2.data.labels[j] = data[j]?.kenhbanhang;
          this.horizontalBarChart_2.data.datasets[index].data[j] = data[j]?.tong;
        }
        this.horizontalBarChart_2.update();
      }
      else {
        console.log("Error to set data to horizontalBarChart_2");
      }
    })
    console.log('NamDDD');
  }

  public async GetTopTenStoresWithTitle(inputFilter) {
    let except = {};
    except['nam'] = inputFilter['nam'];
    except['machinhanh'] = inputFilter['machinhanh'];
    except['hethong'] = inputFilter['hethong'];
    except['macuahang'] = inputFilter['macuahang'];
    except['kenhbanhang'] = inputFilter['kenhbanhang'];
    except['manhom'] = inputFilter['manhom'];
    except['tieude'] = inputFilter['tieude'];

    await this._realRevenue.GetTopTenStoresWithTitle(except, (status, data) => {
      if (status) {
        console.log(data);
        this.horizontalBarChart_3.reset();
        this.horizontalBarChart_3.data.datasets[0].label = except['tieude'];
        for (let j = 0; j < data.length; j++) {
          // lstMacuahang.push(data[j].macuahang);
          // lstTong.push(data[j].tong);
          this.horizontalBarChart_3.data.labels[j] = data[j]?.macuahang;
          this.horizontalBarChart_3.data.datasets[0].data[j] = data[j]?.tong;
        }
        this.horizontalBarChart_3.update();
      }
      else {
        console.log("Error to set data to horizontalBarChart_3");
      }
    })
    console.log('NamDDD');
  }
}

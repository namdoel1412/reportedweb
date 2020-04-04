import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ROOT : string = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/";

@Injectable({
  providedIn: 'root'
})
export class RealRevenueService {

  constructor(private _http : HttpClient) { }

  public GetRealRevenue(body, onFinish){
    //console.log(body);
    this._http.post(ROOT + 'RealRevenue/GetSumWithTitle', body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetSumInPlanRevenue(body, onFinish){
    this._http.post(ROOT + "PlanRevenue/GetSumWithTitle", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetAllNhomSP(onFinish){
    this._http.get(ROOT + "DoanhThuThucTe/GetAllNhomSp").subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetSpecificStoresWithTitle(body, onFinish){
    this._http.post(ROOT + "RealRevenue/GetSpecificStoresWithTitle", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetCountedOrders(body, onFinish){
    this._http.post(ROOT + "RealRevenue/GetCountedOrders", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetCountedCustomers(body, onFinish){
    this._http.post(ROOT + "RealRevenue/GetCountedCustomers", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetTopTenStoresWithTitle(body, onFinish){
    this._http.post(ROOT + "RealRevenue/GetTopTenStoresWithTitle", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetTopTenProductsWithTitle(body, onFinish){
    this._http.post(ROOT + "RealRevenue/GetTopTenProductsWithTitle", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }

  public GetSumGroupByChannel(body, onFinish){
    this._http.post(ROOT + "RealRevenue/GetSumGroupByChannel", body).subscribe(
      (data) => {
        onFinish(true, data);
      },
      (err) => {
        onFinish(false, err);
      }
    )
  }
}

import '../admin/css/Body.css';
import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts'
const Body = () => {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  
  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'line'
      }, // type of the chart
      title: {
        text: 'Bookings'
      }, // title of the chart
      yAxis: {
        title: {
          text: 'Customers'
        }, // the title of the Y Axis
      },
      xAxis: {
        min: 0.4,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'Year'
        } // the title of the X Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });
 
    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
  }, [dataSource]);
  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Raj',
        data: [10, 14, 18, 61, 65, 72, 74, 79, 87, 89, 92, 93]
      }, {
        name: 'Rahul',
        data: [3, 9, 13, 20, 25, 38, 40, 53, 55, 69, 70, 78]
      }, {
        name: 'Sanik',
        data: [9, 15, 31, 50, 56, 60, 64, 67, 79, 82, 95, 97]
      }, {
        name: 'Chandan',
        data: [4, 12, 22, 36, 42, 46, 58, 63, 71, 82, 84, 86]
      }]);
    }, 2000);
  }, []);
  return <>
  <div>
    <div className='container-fluid whole'>
      <div className='row'>
        <div className='col-12'>
          <div className='body-title'>
            <h1>Welcome to our Tours and Travel, kolkata</h1>
            <hr></hr>

          </div>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Customers
              </div>
              <div className='num'>
                2500
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Subcribers
              </div>
              <div className='num'>
                200
              </div>
            </div>
          </div>
        </div>
      
        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Bookings
              </div>
              <div className='num'>
                200
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Reviews
              </div>
              <div className='num'>
                5000
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Customers
              </div>
              <div className='num'>
                2500
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Subcribers
              </div>
              <div className='num'>
                200
              </div>
            </div>
          </div>
        </div>
      
        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Bookings
              </div>
              <div className='num'>
                200
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3'>
          <div className='card1'>
            <div className='card1-left'>
              <i className='fas fa-users'></i>
            </div>
            <div className='card1-right'>
              <div className='num-title'>
                Total Reviews
              </div>
              <div className='num'>
                5000
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-4'>
      <div className='col-12'>
      <div ref={refContainer} />
      </div>
      </div>
     
      
   

    </div>
  </div>

  </>
}

export default Body
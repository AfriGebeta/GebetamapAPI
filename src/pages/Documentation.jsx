import React, { useEffect, useState } from "react";

import RequestSample from "../Components/RequestSample";
import ResponseSample from "../Components/ResponseSample";
import { direction, responseSampleForDirection200, responseSampleForDirection400, responseSampleForDirection500 } from "../data/responsecode";
import Direction from "../Components/Direction";

const openstreetmap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const Documentation = () => {
  return (
    <>
      <div class="flex w-full">
       

        <main className="ml-[5%] mt-[3%]">
          <p className="text-5xl font-black mb-[5%]">Gebeta Routing API</p>

          <p>
           With the GebetaMaps Directions API you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations, and other tools in your application.
          </p>

          <p>
            The GebetaMaps Directions API consists of the following RESTful web services:
          </p>
          <ul className=" mb-[5%] ml-[1%]">
            <li>Routing API</li>
            <li>Route Optimization API</li>
            <li>Geocoding API</li>
            <li>Isodistance API</li>
            <li>Matrix API</li>
          </ul>
          <p className="font-bold text-3xl mb-[5%]">Explore our APIs</p>
          <p className="text-xl">Get Started</p>
          <p className="ml-[2%]">1. Sign up for GebetaMaps </p>
          <p className="ml-[2%]">2. Create an API key </p>
          <p>
            Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.
            In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.
            .{" "}
          </p>
         
          <p className="mt-[5%] text-2xl font-black">Postman</p>
          <p className="mt-[5%]">
            To explore our APIs with Postman, follow these steps:{" "}
          </p>
          <div className="ml-[2%]">
            <ol>
              <li>
                Import our request collections as well as our environment file.
              </li>
              <li>
                Specify your API key in your environment: "api_key": your API key
              </li>
              <li>Start exploring</li>
            </ol>
          </div>
          <p className="mt-[5%] font-bold text-3xl mb-[5%]">Contact Us</p>
          <p>
            If you have problems or questions, please read the following
            information:
          </p>
          <ol className="ml-[5%]">
            <li>Follow us on Twitter</li>
            <li>Contact us</li>
          </ol>

          
          
         
          <p className="mt-[5%] font-bold text-3xl mb-[1%]">
            GET Route Endpoint
          </p>
          <p className="mt-[1%]   mb-[5%]">Use this url on your map provider and start routing {openstreetmap}</p>
          <p>
            The GET request is the most simple one: just specify the parameter
            in the URL and you are done. Can be tried directly in every browser.
          </p>
          {/* code component */}
          <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
            <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
              <p className="mx-[2%] space-x-2 ">
                <span className="bg-green-200 px-2 py-1">GET</span>
                <span className="mx-[2%]">
                  http://mapapi.gebeta.app/api/v1/route/driving/route
                  
                </span>
              </p>
            </div>
            {/* request sample here */}
            <RequestSample
              curl='curl "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + l1 + "&lo1=" + lo1 + "&la2=" + la2 + "&lo2=" + lo2'
              js={direction}
            />
            <ResponseSample responseCodes200={ responseSampleForDirection200} responseCodes400={responseSampleForDirection400 } responseCodes500={responseSampleForDirection500 }      />
          </div>
          <div className=' w-[100%] h-[60%]' >
             <Direction/>
        </div>
          {/*Route Optimization problem*/}
          <p className="mt-[5%] font-bold text-3xl mb-[5%]">
            Route Optimization API
          </p>
          <p>
            The GET request is the most simple one: just specify the parameter
            in the URL and you are done. Can be tried directly in every browser.
          </p>
          {/* code component */}
          <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
            <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
              <p className="mx-[2%] space-x-2 ">
                <span className="bg-green-200 px-2 py-1">GET</span>
                <span className="mx-[2%]">
                  http://mapapi.gebeta.app/api/v1/route/driving/route
                </span>
              </p>
            </div>
            {/* request sample here */}
            <RequestSample
                curl='curl "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + l1 + "&lo1=" + lo1 + "&la2=" + la2 + "&lo2=" + lo2'
           
              js={direction}
            />
            <ResponseSample responseCodes200={ responseSampleForDirection200} responseCodes400={responseSampleForDirection400 } responseCodes500={responseSampleForDirection500 }      />
          </div>
          {/*  */}

          <p className="mt-[5%] font-bold text-3xl mb-[5%]">
            GET Route Endpoint
          </p>
          <p>
            The Matrix API is part of the GebetaMaps Directions API and with it, you can calculate many-to-many distances and times a lot more efficient than calling the Routing API multiple times.

          </p>
          <p>
            In the Routing API, we support multiple points, so called 'via points', which results in one route being calculated. The Matrix API results in NxM routes, or more precise NxM distances or times being calculated but is a lot faster compared to NxM single requests.
The most simple example is a people trying to decide which bus restoursant is close to her/her instead of using beeline distance she/he can calculate a 1x4 matrix. Or a delivery service often in the need of big NxN matrices to solve vehicle routing problems. For example, the GebetaMaps Route Optimization API uses the Matrix API under the hood to achieve this.

 
          </p>
         
          <p>Some other use cases for the Matrix API:</p>
          <ol className="ml-[5%]">
            <li>
              Logistic problems often pick up many items from and deliver them to many locations.
            </li>
            <li>
              Calculating detours with many possible points in-between and selecting the best e.g. interesting for ridesharing or taxi applications. For this 1-to-many requests are necessary.
            </li>
            <li>
             Finding the best tour for a tourist in the need to visit as many points of interests as possible.
            </li>
          </ol>
          <h3>Description</h3>
          <p>
            The Matrix API calculates the well known distance-matrix for a set of points, i.e. it calculates all the distances between every point combination. 


          </p>
          <p>
            A simple illustration for a 3x3 matrix with identical from and to
            points:
          </p>
          <table class="table-fixed border border-black">
            <thead className="border border-black">
              <tr className="border border-black">
                <th className="border border-black">-</th>
                <th className="mx-[4%] border border-black">to_point1</th>
                <th className="mx-[4%] border border-black">to_point2</th>
                <th className="mx-[4%] border border-black">to_point3</th>
              </tr>
            </thead>
            <tbody className="border border-black">
              <tr className="border border-black">
                <td className="border border-black">from_point1</td>
                <td className="border border-black">0</td>
                <td className="border border-black">1-{">"}2</td>
                 <td className="border border-black">1-{">"}3</td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black">from_point2</td>
                <td className="border border-black">2{"->"}1</td>
                <td className="border border-black">0</td>
                 <td className="border border-black">2{"->"}3</td>
              </tr>
              <tr className="border border-black">
                <td className="border border-black">from_point3</td>
                <td className="border border-black">3{"->"}1</td>
                <td className="border border-black">3{"->"}2</td>
                 <td className="border border-black">0</td>
              </tr>
            </tbody>
          </table>
          <h3>GET Matrix Endpoint</h3>
          <p>With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient as it works out-of-the-box in the browser.</p>
          {/* code component */}
          <div className="w-full bg-[#263238] text-white mb-[5%] flex flex-col">
            <div className="bg-[#11171a] mx-[5%] mt-[2%] py-[1%]">
              <p className="mx-[2%] space-x-2 ">
                <span className="bg-green-200 px-2 py-1">GET</span>
                <span className="mx-[2%]">
                  http://mapapi.gebeta.app/api/v1/route/driving/matrix
                </span>
              </p>
            </div>
            {/* request sample here */}
            <RequestSample
             curl='curl "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + l1 + "&lo1=" + lo1 + "&la2=" + la2 + "&lo2=" + lo2'
              js={direction}
            />
            <ResponseSample responseCodes200={ responseSampleForDirection200} responseCodes400={responseSampleForDirection400 } responseCodes500={responseSampleForDirection500 }      />
          </div>
        </main>
      </div>
    </>
  );
};


export default Documentation;

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

function page() {
  return (
    <Card className="w-[474px] mx-auto my-auto h-[42rem] ">
      <CardHeader>
        <CardTitle>Shipping Details</CardTitle>
        <CardDescription>You can see your shipping details here.</CardDescription>
        <div className="relative ml-6">
          <ul className="list-none space-y-6"> {/* Added space-y-6 for vertical gap */}
            <li className="flex items-start space-x-2"> {/* Changed items-center to items-start */}
              <svg className="h-10 w-10 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
              <div className="flex-grow">
                <span>Requested to add</span>
                {/* Additional content */}
                <h1>Hello</h1>
              </div>
            </li>
            <li className="flex items-start space-x-2"> {/* Changed items-center to items-start */}
              <svg className="h-10 w-10 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
              <div className="flex-grow">
                <span>Confirmed Requested</span>
                {/* Additional content */}
                <p>Lorem .</p>
                <h1>Hello</h1>
              </div>
            </li>
            <li className="flex items-start space-x-2"> {/* Changed items-center to items-start */}
              <svg className="h-10 w-10 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
              <div className="flex-grow">
                <span>Picked Up</span>
                {/* Additional content */}
                <h1>Hello</h1>
              </div>
            </li>
            <li className="flex items-start space-x-2"> {/* Changed items-center to items-start */}
              <svg className="h-10 w-10 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
              <div className="flex-grow">
                <span>Shipping</span>
                {/* Additional content */}
                <h1>Hello</h1>
              </div>
            </li>
            <li className="flex items-start space-x-2"> {/* Changed items-center to items-start */}
              <svg className="h-10 w-10 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
              <div className="flex-grow">
                <span>Delivered </span>
                {/* Additional content */}
                <p>This is a para</p>
                <h1>Hello</h1>
              </div>
            </li>
          </ul>
          <div className="absolute left-[18px] top-2 bottom-[66px] w-1 bg-purple-500"></div> {/* Vertical line */}
        </div>
      </CardHeader>
    </Card>
  )
}

export default page

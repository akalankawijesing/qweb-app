import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";


function MainSearch() {
  return (
    <>
    

     <div className="flex flex-wrap items-center bg-white rounded-xl shadow-lg p-2 md:p-4 gap-2 md:gap-3">
            
            <div className="relative flex items-center bg-gray-100 rounded-xl px-3 h-12 w-full md:w-64">
              <span className="text-sm font-semibold text-gray-600 mr-2">
                What
              </span>
              <Input
                type="text"
                placeholder="Ex: food, service, barber, hotel"
                className="border-none bg-transparent p-0 h-full flex-1 text-sm text-gray-600 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
            </div>

            <div className="relative flex items-center bg-gray-100 rounded-xl px-3 h-12 w-full md:w-64">
              <span className="text-sm font-semibold text-gray-600 mr-2">
                Where
              </span>
              <Input
                type="text"
                placeholder="Your City..."
                className="border-none bg-transparent p-0 h-full flex-1 text-sm text-gray-600 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-5 rounded-xl">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
    
    
    </>
  )
}

export default MainSearch
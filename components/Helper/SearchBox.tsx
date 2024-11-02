import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@radix-ui/react-dialog';
import { SearchIcon } from 'lucide-react';

const SearchBox = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <SearchIcon size={26} cursor={"pointer"} />
        </DialogTrigger>
        <DialogContent className="flex items-center justify-center h-screen">
          <div className="text-center">
            <DialogTitle>Search</DialogTitle>
            <form>
              <input
                type="text"
                placeholder='Search Product'
                className='block w-full max-w-xs bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none'
              />
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchBox;

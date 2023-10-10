import { FC } from "react";

interface ItemMenuProps {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}
const itemMenu: FC<ItemMenuProps> = ({
  imageUrl,
  name,
  price,
  description,
}) => {
  return (
    <div className="bg-red-950 bg-opacity-50">
      <div className="mx-auto py-3 sm:px-6 lg:max-w-7xl w-50 max-w-80">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 xl:gap-x-8 overflow-hidden min-w-90 max-w-80">
          
            <div className="group relative">
              <div className="bg-cover bg-center min-w-36 h-60 lg:w-80 lg:h-80 overflow-hidden rounded-md bg-gray-200"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}>
              </div>
              <div className="mt-4 flex justify-between px-3"
              style={{
                minWidth: '300px',
                maxWidth: '300px'
              }}>
                <div>
                  <h3 className="text-lg font-medium text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {name}
                  </h3>
                  <p className="mt-1 text-xm text-gray-400">
                    {description}</p>
                </div>
                <p className="text-lg font-medium text-white">{price}Bs</p>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
export default itemMenu;

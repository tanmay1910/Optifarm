import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../App";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Crop />
        <span className="ml-3 text-xl">OptiFarm</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link
          to={routes.about}
          className={classNames("mr-5 hover:text-gray-900 hover:cursor-pointer select-none", pathname === routes.about && '!text-green-500')}
        >
          About
        </Link>
        <Link
          to={routes.getRecommendations}
          className={classNames("mr-5 hover:text-gray-900 hover:cursor-pointer select-none", pathname === routes.getRecommendations && '!text-green-500')}
        >
          Get recommendations
        </Link>
        <Link
          to={routes.cropProtectionStrategy}
          className={classNames("mr-5 hover:text-gray-900 hover:cursor-pointer select-none", pathname === routes.cropProtectionStrategy && '!text-green-500')}
        >
          Crop protection strategy
        </Link>
      </nav>
    </div>
  </header>
}

const Crop: React.FC = () =>
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-9 h-9" version="1.1" id="Layer_1" viewBox="0 0 512.32 512.32" xmlSpace="preserve">
    <g transform="translate(1 1)">
      <g>
        <path style={{ fill: "#00DA6C" }} d="M371.888,154.627c0.853,7.68-11.947,88.747-108.373,109.227    C260.102,164.013,359.088,155.48,371.888,154.627" />
        <path style={{ fill: "#00DA6C" }} d="M237.915,187.907C117.595,144.387,141.488,19.8,152.582,7.853    C161.968,10.413,260.102,64.173,237.915,187.907L237.915,187.907z" />
      </g>
      <path style={{ fill: "#FFE100" }} d="M246.448,502.787c0-80.213,44.373-230.4,112.64-230.4   C406.022,409.773,338.608,502.787,246.448,502.787" />
      <path style={{ fill: "#FFA800" }} d="M359.088,272.387c-8.533,0-16.213,2.56-23.893,5.973c39.253,121.173-11.947,206.507-88.747,221.867   c0,0.853,0,1.707,0,2.56C338.608,502.787,406.022,409.773,359.088,272.387" />
      <g>
        <path style={{ fill: "#FFE100" }} d="M384.688,272.387c-8.533,0-16.213,2.56-23.893,5.973c39.253,121.173-11.947,206.507-88.747,221.867    c0,0.853,0,1.707,0,2.56C364.208,502.787,431.622,409.773,384.688,272.387" />
        <path style={{ fill: "#FFE100" }} d="M246.448,502.787c0-80.213-44.373-230.4-112.64-230.4    C86.875,409.773,154.288,502.787,246.448,502.787" />
      </g>
      <path style={{ fill: "#FFFFFF" }} d="M133.808,272.387c8.533,0,16.213,2.56,23.893,5.973c-39.253,121.173,11.093,206.507,88.747,221.867   c0,0.853,0,1.707,0,2.56C154.288,502.787,86.875,409.773,133.808,272.387" />
      <path d="M246.448,511.32c-43.52,0-82.773-19.627-107.52-54.613c-33.28-46.933-37.547-115.2-12.8-186.88   c0.853-3.413,4.267-5.973,7.68-5.973c75.093,0,121.173,154.453,121.173,238.933C254.982,507.907,251.568,511.32,246.448,511.32z    M139.782,281.773c-20.48,64-16.213,124.587,12.8,164.693c20.48,28.16,50.347,45.227,85.333,46.933   C234.502,419.16,194.395,290.307,139.782,281.773z" />
      <path d="M246.448,511.32c-5.12,0-8.533-3.413-8.533-8.533c0-84.48,46.08-238.933,121.173-238.933c3.413,0,6.827,2.56,7.68,5.973   c24.747,72.533,20.48,140.8-12.8,186.88C329.222,491.693,289.968,511.32,246.448,511.32z M353.115,281.773   c-54.613,8.533-94.72,137.387-98.133,212.48c34.987-2.56,64.853-18.773,85.333-46.933   C369.328,406.36,373.595,345.773,353.115,281.773z" />
      <path d="M263.515,272.387c-1.707,0-3.413-0.853-5.12-1.707c-1.707-1.707-3.413-4.267-3.413-6.827   c-2.56-80.213,58.027-113.493,116.053-117.76c2.56,0,4.267,0.853,5.973,1.707c1.707,1.707,2.56,3.413,2.56,5.973   c0.853,11.947-16.213,97.28-115.2,117.76C264.368,272.387,264.368,272.387,263.515,272.387z M361.648,164.867   c-29.867,4.267-86.187,21.333-89.6,87.893C337.755,234.84,356.528,185.347,361.648,164.867z" />
      <path d="M237.915,196.44c-0.853,0-1.707,0-2.56-0.853c-64-23.04-87.893-68.267-96.427-101.547   c-11.093-42.667-0.853-83.627,6.827-92.16c2.56-2.56,5.973-3.413,9.387-2.56c18.773,5.973,113.493,66.56,91.307,190.293   c0,0.853,0,0.853,0,1.707C244.742,193.88,241.328,196.44,237.915,196.44z M155.995,19.8c-4.267,12.8-8.533,43.52,0.853,75.947   c11.093,36.693,35.84,64,74.24,80.213C243.888,78.68,177.328,31.747,155.995,19.8z" />
      <path d="M246.448,511.32c-4.267,0-8.533-3.413-8.533-7.68c-7.68-101.547,3.413-157.013,11.093-197.12   c8.533-46.08,12.8-66.56-17.92-113.493c-2.56-4.267-1.707-9.387,2.56-11.947s9.387-1.707,11.947,2.56   c34.133,52.907,29.013,80.213,20.48,126.293c-7.68,39.253-17.92,93.013-10.24,192.853   C254.982,507.053,251.568,511.32,246.448,511.32L246.448,511.32z" />
      <path d="M263.515,272.387c-2.56,0-4.267-0.853-5.973-2.56c-3.413-3.413-3.413-8.533,0-11.947l52.907-53.76   c3.413-3.413,8.533-3.413,11.947,0s3.413,8.533,0,11.947l-52.907,53.76C267.782,271.533,266.075,272.387,263.515,272.387z" />
      <path d="M237.915,196.44c-3.413,0-5.973-1.707-7.68-4.267l-38.4-75.093c-2.56-4.267-0.853-9.387,3.413-11.093   c4.267-2.56,9.387-0.853,11.093,3.413l38.4,75.093c2.56,4.267,0.853,9.387-3.413,11.093   C240.475,195.587,239.622,196.44,237.915,196.44z" />
    </g>
  </svg>
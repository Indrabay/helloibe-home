import { Icon } from "@chakra-ui/react";
import { IoMdBarcode } from "react-icons/io";
import { MdHome, MdOutlineShoppingCart, MdPerson, MdLock, MdBarChart, MdScanner, MdAdfScanner, MdBarcodeReader } from "react-icons/md";

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/test-view',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Produk',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/test-upload',
  },
  {
    name: 'Scanner',
    layout: '/admin',
    path: '/scan',
    icon: <Icon as={IoMdBarcode} width="20px" height="20px" color="inherit"/>,
  },
];

export default routes;
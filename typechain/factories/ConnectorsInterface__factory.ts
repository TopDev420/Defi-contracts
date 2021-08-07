/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ConnectorsInterface,
  ConnectorsInterfaceInterface,
} from "../ConnectorsInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "connectorNames",
        type: "string[]",
      },
    ],
    name: "isConnectors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ConnectorsInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ConnectorsInterfaceInterface {
    return new utils.Interface(_abi) as ConnectorsInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectorsInterface {
    return new Contract(address, _abi, signerOrProvider) as ConnectorsInterface;
  }
}

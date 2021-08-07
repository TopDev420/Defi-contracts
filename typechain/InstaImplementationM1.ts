/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface InstaImplementationM1Interface extends utils.Interface {
  functions: {
    "cast(string[],bytes[],address)": FunctionFragment;
    "connectorsM1()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cast",
    values: [string[], BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "connectorsM1",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "cast", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "connectorsM1",
    data: BytesLike
  ): Result;

  events: {
    "LogCast(address,address,uint256,string[],address[],string[],bytes[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogCast"): EventFragment;
}

export type LogCastEvent = TypedEvent<
  [string, string, BigNumber, string[], string[], string[], string[]],
  {
    origin: string;
    sender: string;
    value: BigNumber;
    targetsNames: string[];
    targets: string[];
    eventNames: string[];
    eventParams: string[];
  }
>;

export type LogCastEventFilter = TypedEventFilter<LogCastEvent>;

export interface InstaImplementationM1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InstaImplementationM1Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cast(
      _targetNames: string[],
      _datas: BytesLike[],
      _origin: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    connectorsM1(overrides?: CallOverrides): Promise<[string]>;
  };

  cast(
    _targetNames: string[],
    _datas: BytesLike[],
    _origin: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  connectorsM1(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cast(
      _targetNames: string[],
      _datas: BytesLike[],
      _origin: string,
      overrides?: CallOverrides
    ): Promise<string>;

    connectorsM1(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LogCast(address,address,uint256,string[],address[],string[],bytes[])"(
      origin?: string | null,
      sender?: string | null,
      value?: null,
      targetsNames?: null,
      targets?: null,
      eventNames?: null,
      eventParams?: null
    ): LogCastEventFilter;
    LogCast(
      origin?: string | null,
      sender?: string | null,
      value?: null,
      targetsNames?: null,
      targets?: null,
      eventNames?: null,
      eventParams?: null
    ): LogCastEventFilter;
  };

  estimateGas: {
    cast(
      _targetNames: string[],
      _datas: BytesLike[],
      _origin: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    connectorsM1(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cast(
      _targetNames: string[],
      _datas: BytesLike[],
      _origin: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    connectorsM1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

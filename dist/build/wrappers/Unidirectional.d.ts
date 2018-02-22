import * as BigNumber from 'bignumber.js';
import * as Web3 from 'web3';
import * as truffle from 'truffle-contract';
export declare namespace Unidirectional {
    const ARTIFACT: any;
    interface Contract {
        address: string;
        isPresent: {
            (channelId: string): Promise<boolean>;
            call(channelId: string): Promise<boolean>;
        };
        canDeposit: {
            (channelId: string, origin: string): Promise<boolean>;
            call(channelId: string, origin: string): Promise<boolean>;
        };
        paymentDigest: {
            (channelId: string, payment: BigNumber.BigNumber): Promise<string>;
            call(channelId: string, payment: BigNumber.BigNumber): Promise<string>;
        };
        canStartSettling: {
            (channelId: string, origin: string): Promise<boolean>;
            call(channelId: string, origin: string): Promise<boolean>;
        };
        isAbsent: {
            (channelId: string): Promise<boolean>;
            call(channelId: string): Promise<boolean>;
        };
        isSettling: {
            (channelId: string): Promise<boolean>;
            call(channelId: string): Promise<boolean>;
        };
        channels: {
            (index: string): Promise<[string, string, BigNumber.BigNumber, BigNumber.BigNumber, BigNumber.BigNumber]>;
            call(index: string): Promise<[string, string, BigNumber.BigNumber, BigNumber.BigNumber, BigNumber.BigNumber]>;
        };
        isOpen: {
            (channelId: string): Promise<boolean>;
            call(channelId: string): Promise<boolean>;
        };
        canSettle: {
            (channelId: string): Promise<boolean>;
            call(channelId: string): Promise<boolean>;
        };
        canClaim: {
            (channelId: string, payment: BigNumber.BigNumber, origin: string, signature: string): Promise<boolean>;
            call(channelId: string, payment: BigNumber.BigNumber, origin: string, signature: string): Promise<boolean>;
        };
        claim: {
            (channelId: string, payment: BigNumber.BigNumber, signature: string, options?: Web3.CallData): Promise<truffle.TransactionResult>;
            call(channelId: string, payment: BigNumber.BigNumber, signature: string, options?: Web3.CallData): Promise<void>;
            estimateGas(channelId: string, payment: BigNumber.BigNumber, signature: string): Promise<number>;
        };
        settle: {
            (channelId: string, options?: Web3.CallData): Promise<truffle.TransactionResult>;
            call(channelId: string, options?: Web3.CallData): Promise<void>;
            estimateGas(channelId: string): Promise<number>;
        };
        deposit: {
            (channelId: string, options?: Web3.CallData): Promise<truffle.TransactionResult>;
            call(channelId: string, options?: Web3.CallData): Promise<void>;
            estimateGas(channelId: string): Promise<number>;
        };
        open: {
            (channelId: string, receiver: string, settlingPeriod: number | BigNumber.BigNumber, options?: Web3.CallData): Promise<truffle.TransactionResult>;
            call(channelId: string, receiver: string, settlingPeriod: number | BigNumber.BigNumber, options?: Web3.CallData): Promise<void>;
            estimateGas(channelId: string, receiver: string, settlingPeriod: number | BigNumber.BigNumber): Promise<number>;
        };
        startSettling: {
            (channelId: string, options?: Web3.CallData): Promise<truffle.TransactionResult>;
            call(channelId: string, options?: Web3.CallData): Promise<void>;
            estimateGas(channelId: string): Promise<number>;
        };
        send: (value: BigNumber.BigNumber | number) => Promise<truffle.TransactionResult>;
        sendTransaction: (opts: Web3.CallData) => Promise<truffle.TransactionResult>;
    }
    interface DidOpen {
        channelId: string;
        sender: string;
        receiver: string;
        value: BigNumber.BigNumber;
    }
    function isDidOpenEvent(something: truffle.AnyTransactionEvent): something is truffle.TransactionEvent<DidOpen>;
    interface DidDeposit {
        channelId: string;
        deposit: BigNumber.BigNumber;
    }
    function isDidDepositEvent(something: truffle.AnyTransactionEvent): something is truffle.TransactionEvent<DidDeposit>;
    interface DidClaim {
        channelId: string;
    }
    function isDidClaimEvent(something: truffle.AnyTransactionEvent): something is truffle.TransactionEvent<DidClaim>;
    interface DidStartSettling {
        channelId: string;
    }
    function isDidStartSettlingEvent(something: truffle.AnyTransactionEvent): something is truffle.TransactionEvent<DidStartSettling>;
    interface DidSettle {
        channelId: string;
    }
    function isDidSettleEvent(something: truffle.AnyTransactionEvent): something is truffle.TransactionEvent<DidSettle>;
    function contract(provider?: Web3.Provider, defaults?: Web3.CallData): truffle.TruffleContract<Contract>;
}
export default Unidirectional;

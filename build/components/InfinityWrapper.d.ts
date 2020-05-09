/// <reference types="lodash" />
import React from 'react';
export interface InfinityWrapperProps<T> {
    dataSource: T[];
    loadMore?: () => void;
    hasNextPage?: boolean;
    rowPerPage?: number;
    isTable?: boolean;
}
export interface InfinityWrapperProvider {
    scrollable: boolean;
}
declare const InfinityWrapper: <P extends Object, T extends Object>(WrapperComponent: React.ComponentType<P & InfinityWrapperProvider>) => {
    new (props: Readonly<P & InfinityWrapperProps<T>>): {
        scroll: any;
        lastScrollTop: number;
        handleScroll: ((event: any) => void) & import("lodash").Cancelable;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & InfinityWrapperProps<T>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & InfinityWrapperProps<T>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & InfinityWrapperProps<T>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & InfinityWrapperProps<T>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: P & InfinityWrapperProps<T>, context?: any): {
        scroll: any;
        lastScrollTop: number;
        handleScroll: ((event: any) => void) & import("lodash").Cancelable;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & InfinityWrapperProps<T>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & InfinityWrapperProps<T>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & InfinityWrapperProps<T>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & InfinityWrapperProps<T>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & InfinityWrapperProps<T>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    defaultProps: {
        isTable: boolean;
        rowPerPage: number;
    };
    contextType?: React.Context<any> | undefined;
};
export default InfinityWrapper;

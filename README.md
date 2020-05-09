# React InfinityWrapper HOC
Infinity scroll on ant table or root node

## Use this Component
`yarn add infinitywrapper` to install the latest version

### InfinityTable used with ant table
```javascript
const TableWrapper = ({ bordered, dataSource, scrollable }) => {

  const columns = {
    // columns
  }

  return (
    <Table
      bordered={bordered}
      columns={columns}
      dataSource={dataSource}
      scroll={scrollable ? { y: ROWS_ON_PER_PAGE * ROW_HEIGHT } : {}}
    />
  )
}
export default InfinityWrapper(TableWrapper)
```
```javascript
    <InfinityTable
      dataSource={dataSource}
      hasNextPage={hasNextPage}
      rowPerPage={rowPerPage}
      bordered={bordered}
      loadMore={loadMore}
    />
```

### InfinityTable used with whatever
```javascript
const Wrapper = ({ dataSource }) => {
  return (
    <div>
      {dataSource.map((data) => {
        return <div>{data}</div>
      })}
    </div>
  )
}
export default InfinityWrapper(Wrapper)
```
```javascript
    <InfinityTable
      dataSource={dataSource}
      hasNextPage={hasNextPage}
      rowPerPage={rowPerPage}
      loadMore={loadMore}
      isTable={false}
    />
```

## Props
|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|dataSource|`number`|`required`|Interval delay in second|
|hasNextPage|`boolean`|`required`|If there is next page|
|rowPerPage|`number`|`undefined`|row lines displayed per page (only for table)|
|loadMore|`()=>void`|`required`|When scroll down will invoke loadMore function|
|isTable|`boolean`|`true`|A flag detect whether is used for ant table |

## Contribute to this repo

To install dependencies

```
$ yarn
```

To build

```
$ yarn build
```

To run tests

```
$ yarn test
```

To run Storybook

```
$ yarn start
```

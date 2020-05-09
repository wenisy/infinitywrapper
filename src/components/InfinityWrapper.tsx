import throttle from 'lodash-es/throttle'
import React from 'react'

const ROWS_ON_PER_PAGE = 15

export interface InfinityWrapperProps<T> {
  dataSource: T[]
  loadMore?: () => void
  hasNextPage?: boolean
  rowPerPage?: number
  isTable?: boolean
}

export interface InfinityWrapperProvider {
  scrollable: boolean
}

const InfinityWrapper = <P extends Object, T extends Object>(
  WrapperComponent: React.ComponentType<P & InfinityWrapperProvider>
) => {
  return class extends React.Component<P & InfinityWrapperProps<T>> {
    static defaultProps = {
      isTable: true,
      rowPerPage: ROWS_ON_PER_PAGE,
    }
    scroll: any = 0
    lastScrollTop = 0

    handleScroll = throttle((event: any) => {
      const threshold = 50
      const { loadMore, isTable } = this.props
      if (isTable) {
        const maxScroll = event.target.scrollHeight - event.target.offsetHeight
        const currentScroll = event.target.scrollTop
        if (currentScroll > maxScroll - threshold) {
          loadMore && loadMore()
        }
        return
      }
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentPosition + window.innerHeight > document.documentElement.scrollHeight - threshold) {
        loadMore && loadMore()
      }
      this.lastScrollTop = currentPosition
    }, 200)

    componentDidMount(): void {
      const { loadMore, isTable } = this.props
      const tableContent = isTable ? document.querySelector('.ant-table-body') : window
      if (!tableContent) {
        return
      }
      this.scroll = tableContent.addEventListener('scroll', this.handleScroll)
      loadMore && loadMore()
    }

    componentWillUnmount(): void {
      const { isTable } = this.props
      const tableContent = isTable ? document.querySelector('.ant-table-body') : window
      if (!tableContent) {
        return
      }
      tableContent.removeEventListener('scroll', this.handleScroll)
    }

    render() {
      const { hasNextPage, dataSource, rowPerPage = ROWS_ON_PER_PAGE, loadMore } = this.props
      return (
        <WrapperComponent
          {...this.props}
          scrollable={!!loadMore && !!(hasNextPage || dataSource.length > rowPerPage)}
        />
      )
    }
  }
}

export default InfinityWrapper

import throttle from 'lodash-es/throttle';
import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ROWS_ON_PER_PAGE = 15;
var InfinityWrapper = function (WrapperComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.scroll = 0;
                _this.lastScrollTop = 0;
                _this.handleScroll = throttle(function (event) {
                    var threshold = 50;
                    var _a = _this.props, loadMore = _a.loadMore, isTable = _a.isTable;
                    if (isTable) {
                        var maxScroll = event.target.scrollHeight - event.target.offsetHeight;
                        var currentScroll = event.target.scrollTop;
                        if (currentScroll > maxScroll - threshold) {
                            loadMore && loadMore();
                        }
                        return;
                    }
                    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
                    if (currentPosition + window.innerHeight > document.documentElement.scrollHeight - threshold) {
                        loadMore && loadMore();
                    }
                    _this.lastScrollTop = currentPosition;
                }, 200);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                var _a = this.props, loadMore = _a.loadMore, isTable = _a.isTable;
                var tableContent = isTable ? document.querySelector('.ant-table-body') : window;
                if (!tableContent) {
                    return;
                }
                this.scroll = tableContent.addEventListener('scroll', this.handleScroll);
                loadMore && loadMore();
            };
            class_1.prototype.componentWillUnmount = function () {
                var isTable = this.props.isTable;
                var tableContent = isTable ? document.querySelector('.ant-table-body') : window;
                if (!tableContent) {
                    return;
                }
                tableContent.removeEventListener('scroll', this.handleScroll);
            };
            class_1.prototype.render = function () {
                var _a = this.props, hasNextPage = _a.hasNextPage, dataSource = _a.dataSource, _b = _a.rowPerPage, rowPerPage = _b === void 0 ? ROWS_ON_PER_PAGE : _b, loadMore = _a.loadMore;
                return (React.createElement(WrapperComponent, __assign({}, this.props, { scrollable: !!loadMore && !!(hasNextPage || dataSource.length > rowPerPage) })));
            };
            return class_1;
        }(React.Component)),
        _a.defaultProps = {
            isTable: true,
            rowPerPage: ROWS_ON_PER_PAGE,
        },
        _a;
};

export { InfinityWrapper };
//# sourceMappingURL=index.es.js.map

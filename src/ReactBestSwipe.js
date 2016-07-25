/**
 * Created by jiaaobo on 16/6/9.
 */

import ReactSwipe from 'react-swipe';


export  default class ReactBestSwipe extends React.Component {

    constructor(props) {
        super(props);


        let paginations = [];

        //渲染dot
        for (var i = 0; i < this.props.count; i++) {
            let o = {index: i}
            if (i == 0) o.active = true;
            paginations.push(o);
        }

        this.state = {
            paginations : paginations
        }
    }




    _selectIndex(index, elem) {

        if (this.props.showPagination) {

            let p = this.state.paginations;
            p.map((o, i)=> {
                if (o.index == index) {
                    o.active = true;
                }
                else {
                    o.active = false;
                }
                return o;
            });
            this.setState({
                paginations: p
            })
        }

        if (this.props.swipeOptions.callback)
            this.props.swipeOptions.callback(index, elem);
    }

    _transitionEnd(index, elem){

        if (this.props.swipeOptions.transitionEnd)
            this.props.swipeOptions.transitionEnd(index, elem);
    }

    _renderPagination() {

        if (this.props.showPagination) {

            if (!this.props.count || this.props.count < 1) {
                throw  new Error("count length > 0");
            }

            let pList = this.state.paginations.map((p)=> {
                return (<span key={p.index}
                              className={"swiper-pagination-bullet "+(p.active  ? "swiper-pagination-bullet-active" : "")}></span>);
            });

            return (
                <div className="swiper-pagination swiper-container-horizontal">
                    {pList}
                </div>
            );
        }
    }

    render() {
        console.log("render best swiper..");
        return (
            <div className="pos-rel">
                <ReactSwipe
                    key={this.props.count}
                    ref={this.props.refName}
                    className="carousel"
                    swipeOptions={this.props.swipeOptions}>
                    {this.props.children}
                </ReactSwipe>
                {this._renderPagination()}
            </div>
        )
    }
}


ReactBestSwipe.defaultProps = {
    refName: "reactSwipe",
    showPagination: false,
    swipeOptions: {
        speed: 500,
        auto: 3000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: this._selectIndex.bind(this),
        transitionEnd: this._transitionEnd.bind(this)
    }
};

ReactBestSwipe.propTypes = {
    //轮播配置
    swipeOptions: React.PropTypes.object,
    //默认子项目的长度
    count: React.PropTypes.number,
    //swipe的引用
    refName: React.PropTypes.string,
    //显示dot
    showPagination: React.PropTypes.bool

};
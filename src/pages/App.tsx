import * as React from 'react';
import Toggle from '../components/Toggle';
import Switch from '../components/Switch';

// App 组件 state 数据格式定义
interface AppState {
    timesClicked: number;
    on: boolean;
}

export default class App extends React.Component<{}, AppState> {
    // 初始state
    private initialState: AppState = {
        timesClicked: 0,
        on: false
    };
    // 构造函数
    constructor(props: {}) {
        super(props);
        this.state = this.initialState;
        this._handleToggle = this._handleToggle.bind(this);
        this._handleReset = this._handleReset.bind(this);
    }
    // render 钩子
    public render(): JSX.Element {
        const {timesClicked, on} = this.state;

        return (
            <div>
                {/* <img src={favicon} alt=""/> */}
                <span>scan this example: </span>
                <Toggle
                    on={on}
                    onToggle={this._handleToggle}
                    onReset={this._handleReset}
                    render={toggle => (
                        <div>
                            <Switch {...toggle.getTogglerProps({on: toggle.on})} />
                            {timesClicked > 4 ? (
                                <div data-test="click-warning">
                                    You've clicked too much!
                                    <br/>
                                    <button onClick={toggle.reset}>reset</button>
                                </div>
                            ) : timesClicked > 0 ? (
                                <div>Click count: {timesClicked}</div>
                            ) : null}
                        </div>
                    )} />
            </div>
        );
    }
    // toggle点击事件处理
    private _handleToggle(): void {
        this.setState(({timesClicked, on}) => ({
            timesClicked: timesClicked + 1,
            on: timesClicked >= 4 ? false : !on
        }));
    }
    // 重置按钮点击事件处理
    private _handleReset(): void {
        this.setState(this.initialState);
    }
}

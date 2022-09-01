// 运行时配置
import { history } from '@umijs/max';
import qs from 'qs';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

const appendQueryStrToPath = (pathname: string, params: object) => {
  return `${pathname}?${qs.stringify(params)}`;
};

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    actionsRender: (props) => {
      if (props.isMobile) return [];
      return [
        <div
          key="0"
          onClick={() => {
            history.push(
              appendQueryStrToPath('/table', {
                // 从什么页面退出
                // 注意 window.location.pathname 是当前页面路径
                // @TODO: history.location.pathname 拿到的并不是
                keyFromWindow: window.location.pathname,
                keyFromHistory: history.location.pathname,
              }),
            );
          }}
        >
          退出
        </div>,
      ];
    },
  };
};

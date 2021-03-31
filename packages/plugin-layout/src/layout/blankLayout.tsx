export default ({ children }: { children: any }) => {
  console.error(
    '@umijs/plugin-layout 需要安装 @choerodon-ui/pro-layout 才可运行',
  );
  console.error('https://prolayout.ant.design/');
  return children;
};

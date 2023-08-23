import {
  InfoCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { useState } from 'react';
import layoutProps from './layout.props';
import freshVegetableJpg from '@/assets/fresh_vegetables.jpg';
import einsteinProfileJpg from '@/assets/einstein_profile.jpg';

export default () => {
  const [layoutSettings, setLayoutSettings] = useState<Partial<ProSettings> | undefined>({
    layout: 'top',
  });

  const [pathname, setPathname] = useState('/');

  return (
    <div
      id="back-layout"
      style={{
        height: '100vh'
      }}
    >
      <ProLayout
        {...layoutProps}
        title={"后台管理"}
        logo={<img src={freshVegetableJpg} />}
        siderWidth={218}
        location={{
          pathname,
        }}
        avatarProps={{
          src: einsteinProfileJpg,
          title: 'Einstein',
          size: 'default',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />
          ];
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        menuFooterRender={(props) => {
          if (props?.collapsed) return null;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
                color: '#00e600',
                fontWeight: '600'
              }}
            >
              <div>© 2023 Keep Fresh 蔬必鲜</div>
            </div>
          );
        }}
        {...layoutSettings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('back-layout')}
        settings={layoutSettings}
        onSettingChange={(changeSetting) => {
          setLayoutSettings(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div >
  );
};
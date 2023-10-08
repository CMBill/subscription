import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
    {
      key: 2,
      name: '游戏浏览界面-推荐广告',
      desc: '自动点击【对此内容不感兴趣】',
      rules: [
        {
          key: 0,
          activityIds: 'com.android.launcher3.Launcher',
          matches: '[id="com.taptap.app.game:id/app_menu"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12840903',
        },
        {
          key: 1,
          activityIds:
            'com.taptap.game.discovery.impl.findgame.allgame.dialog.FindGameMenuDialog',
          matches: '@LinearLayout > [text="对此内容不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12840904',
        },
      ],
    },
  ],
});
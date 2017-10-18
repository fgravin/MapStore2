/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  plugins: {
    MousePositionPlugin: require('../plugins/MousePosition'),
    PrintPlugin: require('../plugins/Print'),
    IdentifyPlugin: require('../plugins/Identify'),
    TOCPlugin: require('../plugins/TOC'),
    BackgroundSwitcherPlugin: require('../plugins/BackgroundSwitcher'),
    MeasurePlugin: require('../plugins/Measure'),
    MapPlugin: require('../plugins/Map'),
    ToolbarPlugin: require('../plugins/Toolbar'),
    DrawerMenuPlugin: require('../plugins/DrawerMenu'),
    ShapeFilePlugin: require('../plugins/ShapeFile'),
    SnapshotPlugin: require('../plugins/Snapshot'),
    SettingsPlugin: require('../plugins/Settings'),
    ExpanderPlugin: require('../plugins/Expander'),
    SearchPlugin: require('../plugins/Search'),
    ScaleBoxPlugin: require('../plugins/ScaleBox'),
    LocatePlugin: require('../plugins/Locate'),
    ZoomInPlugin: require('../plugins/ZoomIn'),
    ZoomOutPlugin: require('../plugins/ZoomOut'),
    ZoomAllPlugin: require('../plugins/ZoomAll'),
    FullScreenPlugin: require('../plugins/FullScreen'),
    MapLoadingPlugin: require('../plugins/MapLoading'),
    HelpPlugin: require('../plugins/Help'),
    HelpLinkPlugin: require('../plugins/HelpLink'),
    HomePlugin: require('../plugins/Home'),
    MetadataExplorerPlugin: require('../plugins/MetadataExplorer'),
    LoginPlugin: require('../plugins/Login'),
    OmniBarPlugin: require('../plugins/OmniBar'),
    GridContainerPlugin: require('../plugins/GridContainer'),
    BurgerMenuPlugin: require('../plugins/BurgerMenu'),
    UndoPlugin: require('../plugins/History'),
    RedoPlugin: require('../plugins/History'),
    MapsPlugin: require('../plugins/Maps'),
    MapSearchPlugin: require('../plugins/MapSearch'),
    LanguagePlugin: require('../plugins/Language'),
    ManagerPlugin: require('../plugins/manager/Manager'),
    UserManagerPlugin: require('../plugins/manager/UserManager'),
    GroupManagerPlugin: require('../plugins/manager/GroupManager'),
    RulesManagerPlugin: require('../plugins/manager/RulesManager'),
    ManagerMenuPlugin: require('../plugins/manager/ManagerMenu'),
    RedirectPlugin: require('../plugins/Redirect'),
    SharePlugin: require('../plugins/Share'),
    SavePlugin: require('../plugins/Save'),
    SaveAsPlugin: require('../plugins/SaveAs'),
    CreateNewMapPlugin: require('../plugins/CreateNewMap'),
    QueryPanelPlugin: require('../plugins/QueryPanel'),
    WFSDownloadPlugin: require('../plugins/WFSDownload'),
    TutorialPlugin: require('../plugins/Tutorial'),
    ThemeSwitcherPlugin: require('../plugins/ThemeSwitcher'),
    ScrollTopPlugin: require('../plugins/ScrollTop'),
    GoFull: require('../plugins/GoFull'),
    GlobeViewSwitcherPlugin: require('../plugins/GlobeViewSwitcher'),
    BackgroundSelectorPlugin: require('../plugins/BackgroundSelector'),
    SearchServicesConfigPlugin: require('../plugins/SearchServicesConfig'),
    VersionPlugin: require('../plugins/Version'),
    CookiePlugin: require('../plugins/Cookie'),
    NotificationsPlugin: require('../plugins/Notifications'),
    FeatureEditorPlugin: require('../plugins/FeatureEditor'),
    AutoMapUpdatePlugin: require('../plugins/AutoMapUpdate'),
    MapFooterPlugin: require('../plugins/MapFooter'),
    AnnotationsPlugin: require('../plugins/Annotations')
  }
};

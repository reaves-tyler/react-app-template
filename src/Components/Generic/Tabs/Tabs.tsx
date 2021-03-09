// import React, { ReactNode, ReactText } from 'react';
// import { SemanticShorthandItem, Tab, TabPaneProps } from 'semantic-ui-react';
// import './Tabs.css';

// interface props {
//     grid?: ReactNode;
//     vertical?: boolean;
//     tabular?: ReactNode;
//     panes: {
//         pane?: SemanticShorthandItem<TabPaneProps>;
//         menuItem?: any;
//         render?: () => React.ReactNode;
//     }[];
//     defaultActiveIndex?: ReactText;
// }

// export const Tabs: React.FC<props> = ({
//     grid = { paneWidth: 14, tabWidth: 2 },
//     vertical = false,
//     tabular = true,
//     panes = [],
//     defaultActiveIndex = 0,
// }: props) => {
//     return (
//         <Tab
//             defaultActiveIndex={defaultActiveIndex}
//             grid={grid}
//             menu={{
//                 fluid: true,
//                 vertical: vertical,
//                 tabular: tabular,
//             }}
//             panes={panes}
//         />
//     );
// };

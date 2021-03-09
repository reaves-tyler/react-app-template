// import React, { CSSProperties, useState } from 'react';
// import { Accordion, Icon } from 'semantic-ui-react';

// interface props {
//     display: string;
//     content: any;
//     style?: CSSProperties;
// }

// export const Accordions: React.FC<props> = ({ style, display, content }: props) => {
//     const [active, setActive] = useState<boolean>(false);

//     return (
//         <Accordion styled fluid={true} style={style}>
//             <Accordion.Title
//                 active={active}
//                 onClick={(e) => {
//                     setActive(!active);
//                 }}>
//                 <Icon title='Information' style={{ float: 'right' }} name={active ? 'times' : 'plus'} />
//                 {display}
//             </Accordion.Title>
//             <Accordion.Content active={active}>{content}</Accordion.Content>
//         </Accordion>
//     );
// };

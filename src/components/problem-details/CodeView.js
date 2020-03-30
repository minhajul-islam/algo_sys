import React from "react";
import {Card} from "antd";
import { Typography } from 'antd';
const { Paragraph } = Typography;

const CodeView = () =>{
    return(
        <Card title="Code" bordered={false}>
            <div>
                <Paragraph ellipsis>
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                    a design language for background applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.
                </Paragraph>
            </div>,
        </Card>
    )
};
export default CodeView;

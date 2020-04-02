import React from "react";
import {Card} from "antd";
import { Typography } from 'antd';
const { Paragraph } = Typography;

const CodeView = (props) =>{
    return(
        <Card title="Code" bordered={false}>
            <div>
                <Paragraph ellipsis>
                    {props.value}
                </Paragraph>
            </div>,
        </Card>
    )
};
export default CodeView;

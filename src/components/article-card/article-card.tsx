import {Card} from "antd";

export interface ArticleProps {
    title: string;
    description: string;
}

export const ArticleCard = ({title, description}: ArticleProps) => {
    return (
        <Card title={title}>
            {description}
        </Card>
    );
};


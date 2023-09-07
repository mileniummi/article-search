import {Button, Form, Input} from "antd";
import {useForm} from "antd/lib/form/Form";

export interface SearchInput {
    search: string
}

export interface ArticleSearchProps {
    handleSubmit: (v: SearchInput) => void
}

export const ArticleSearch = ({handleSubmit}: ArticleSearchProps) => {
    const [form] = useForm<SearchInput>();

    return (
        <Form layout="inline" form={form} onFinish={handleSubmit} >
            <Form.Item name="search">
                <Input/>
            </Form.Item>
            <Button type="primary" htmlType="submit">Найти статьи</Button>
        </Form>
    )
}
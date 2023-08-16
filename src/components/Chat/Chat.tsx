import { FC, useState } from "react";
import { Form, Input } from "antd";

import bot from "../../assets/bot-icon.svg";
import me from "../../assets/my-icon.svg";
import buttonIcon from "../../assets/submit.svg";

import s from "./Chat.module.scss";

interface IChat {}

interface IMessage {
	id: string;
	content: string;
	type: string;
}

const Chat: FC<IChat> = () => {
	const [form] = Form.useForm();
	const [messages, setMessages] = useState<IMessage[]>([
		{
			id: "0",
			content: "123",
			type: "Income",
		},
		{
			id: "1",
			content: "123",
			type: "Sended",
		},
	]);

	const onSendMessage = ({ message }) => {
		form.validateFields();

		const newMessage = {
			id: crypto.randomUUID(),
			content: message,
			type: "Sended",
		};
		setMessages((messages) => [...messages, newMessage]);

		form.resetFields();
	};

	return (
		<div>
			<div className={s.content}>
				{messages.map(({ id, content, type }) => (
					<div
						className={
							type == "Income"
								? `${s.item}`
								: `${s.local} ${s.item}`
						}
						key={id}
					>
						<img src={bot} className={s.image} />
						<div
							key={id}
							className={
								type == "Income"
									? `${s.message}`
									: `${s.sended} ${s.message}`
							}
						>
							{content}
						</div>
					</div>
				))}
			</div>
			<div className={s.form}>
				<Form
					form={form}
					initialValues={{ message: "" }}
					onFinish={onSendMessage}
				>
					<Form.Item
						name="message"
						rules={[
							{
								required: true,
								min: 1,
								message: "Input your message",
							},
						]}
					>
						<Input
							className={s.input}
							placeholder="Start typing here..."
							suffix={
								<button className={s.submit} type="submit">
									<img src={buttonIcon} alt="" />
								</button>
							}
						/>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Chat;

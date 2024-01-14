import React, {CSSProperties, useState} from 'react';
import {Select} from 'antd';
import {PayMethod} from "@/app/constants";

type PaymentSelectorProps = {
    styles?: CSSProperties;
    onPaymentMethodChange: (method: PayMethod) => void; // 新增 props
};


export const PaymentSelector: React.FC<PaymentSelectorProps> = ({styles, onPaymentMethodChange}) => {
    const [paymentMethod, setPaymentMethod] = useState<PayMethod>(PayMethod.AlipaySandbox);
    return (
        <div style={{width: 160}}>
            <Select
                value={paymentMethod}
                style={{width: 160}}
                options={[
                    {value: PayMethod.WeixinNativePay, label: '微信支付'},
                    {value: PayMethod.AlipaySandbox, label: '支付宝沙箱'},
                ]}
                onChange={(value) => {
                    setPaymentMethod(value);
                    onPaymentMethodChange(value); // 调用传入的函数
                }}
            />
        </div>
    );
}

export default PaymentSelector;

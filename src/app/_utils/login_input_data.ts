import { ISimpleInput } from "../_interfaces/interfaces"

export const loginInputData: ISimpleInput[] = [
    {
        label      : "メールアドレス",
        placeholder: "name@example.com",
        id         : "email",
        _type      : "email",
        require    : true
    },
    {
        label      : "パスワード",
        placeholder: "•••••••",
        id         : "password",
        _type      : "password",
        require    : true
    },
    
]
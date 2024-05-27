import { ISimpleInput } from "../_interfaces/interfaces"

export const signupInputData: ISimpleInput[] = [
    {
        label      : "ユーザー名（任意）",
        placeholder: "Dr.EXAMPLE",
        id         : "name",
        _type      : "text",
        require    : true
    },
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
    {
        label      : "パスワード(確認用）",
        placeholder: "•••••••",
        id         : "check_password",
        _type      : "password",
        require    : true
    },
    
]
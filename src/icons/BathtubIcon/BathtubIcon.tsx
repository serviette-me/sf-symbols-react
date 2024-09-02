import { IconProps } from "../../types"

export default function BathtubIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.49609375 24.709639919056652"
          className={className}
        >
          <path
            d="              M7.6287 24.5679C8.8047 25.0059 10.1307 24.3909 10.5547 23.2289L11.3747 20.9589C11.5937 20.9729 11.8267 20.9729 12.0727 20.9729H28.4097C28.6427 20.9729 28.8747 20.9729 29.1077 20.9589L29.9277 23.2289C30.3517 24.3909 31.6777 25.0059 32.8537 24.5679C34.0017 24.1719 34.6307 22.8319 34.2067 21.6559L33.5777 19.9339C36.3267 18.5669 37.7887 15.8869 37.7887 12.0309V8.0529C39.3747 7.4919 40.4957 6.0019 40.4957 4.1559C40.4957 1.8049 38.6637 -0.0001 36.3537 -0.0001H4.1287C1.8047 -0.0001 -0.0003 1.8049 -0.0003 4.1559C-0.0003 6.0019 1.1077 7.5059 2.7067 8.0669V12.0309C2.7067 15.8869 4.1567 18.5669 6.9047 19.9339L6.2887 21.6429C5.8517 22.8319 6.4527 24.1449 7.6287 24.5679ZM4.0877 4.1559C4.0877 3.8559 4.3207 3.6229 4.6207 3.6229H35.8477C36.1487 3.6229 36.3807 3.8559 36.3807 4.1559C36.3807 4.4569 36.1487 4.6899 35.8477 4.6899H4.6207C4.3207 4.6899 4.0877 4.4569 4.0877 4.1559ZM12.0727 16.4469C8.6547 16.4469 7.2457 15.1489 7.2457 12.0309V8.2989H33.2497V12.0309C33.2497 15.1489 31.8277 16.4469 28.4097 16.4469Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.349609375 23.135676535188402"
          className={className}
        >
          <path
            d="              M7.0137 23.0372C7.8887 23.3512 8.8727 22.8872 9.1877 22.0252L10.0347 19.6742C10.3907 19.7012 10.7597 19.7152 11.1427 19.7152H27.2067C27.5897 19.7152 27.9457 19.7012 28.3007 19.6742L29.1617 22.0252C29.4767 22.8872 30.4607 23.3512 31.3357 23.0372C32.1977 22.7362 32.6487 21.7382 32.3337 20.8772L31.6227 18.9222C34.3707 17.7322 35.7927 15.2442 35.7927 11.5392V6.8222C37.2837 6.4392 38.3497 5.1132 38.3497 3.4722C38.3497 1.5042 36.8317 0.0002 34.8907 0.0002H3.4587C1.5177 0.0002 -0.0003 1.5042 -0.0003 3.4722C-0.0003 5.1272 1.0667 6.4392 2.5567 6.8222V11.5392C2.5567 15.2442 3.9787 17.7322 6.7127 18.9222L6.0157 20.8632C5.7017 21.7382 6.1387 22.7222 7.0137 23.0372ZM3.1307 3.4722C3.1307 3.1312 3.3907 2.8852 3.7457 2.8852H34.5897C34.9457 2.8852 35.2047 3.1312 35.2047 3.4722C35.2047 3.8142 34.9457 4.0602 34.5897 4.0602H3.7457C3.3907 4.0602 3.1307 3.8142 3.1307 3.4722ZM11.1427 16.3512C7.5747 16.3512 5.9197 14.8062 5.9197 11.5392V6.9312H32.4297V11.5392C32.4297 14.8062 30.7617 16.3512 27.2067 16.3512Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.484375 23.966378033135385"
          className={className}
        >
          <path
            d="              M7.3417 23.8434C8.3677 24.2264 9.5427 23.6794 9.9117 22.6684L10.7457 20.3574C11.0337 20.3714 11.3207 20.3844 11.6347 20.3844H27.8357C28.1507 20.3844 28.4377 20.3714 28.7247 20.3574L29.5587 22.6684C29.9417 23.6794 31.1037 24.2264 32.1287 23.8434C33.1547 23.4884 33.6877 22.3264 33.3187 21.2874L32.6617 19.4554C35.3967 18.1704 36.8457 15.5864 36.8457 11.7984V7.4784C38.3907 7.0004 39.4847 5.5914 39.4847 3.8414C39.4847 1.6684 37.8027 0.0004 35.6567 0.0004H3.8147C1.6677 0.0004 -0.0003 1.6684 -0.0003 3.8414C-0.0003 5.5914 1.0937 7.0004 2.6387 7.4784V11.7984C2.6387 15.5864 4.0747 18.1704 6.8227 19.4554L6.1527 21.2874C5.7837 22.3264 6.3027 23.4744 7.3417 23.8434ZM3.6367 3.8414C3.6367 3.5134 3.8827 3.2814 4.2107 3.2814H35.2597C35.5747 3.2814 35.8207 3.5134 35.8207 3.8414C35.8207 4.1564 35.5747 4.3884 35.2597 4.3884H4.2107C3.8827 4.3884 3.6367 4.1564 3.6367 3.8414ZM11.6347 16.4064C8.1487 16.4064 6.6177 14.9844 6.6177 11.7984V7.6564H32.8677V11.7984C32.8677 14.9844 31.3227 16.4064 27.8357 16.4064Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.767578125 20.53322124774889"
          className={className}
        >
          <path
            d="              M5.9887 20.48C6.4257 20.645 6.9177 20.412 7.0817 19.975L7.9847 17.486C8.5037 17.555 9.0507 17.596 9.6247 17.596H25.1427C25.7167 17.596 26.2637 17.555 26.7837 17.486L27.6857 19.975C27.8497 20.412 28.3417 20.645 28.7797 20.48C29.2027 20.33 29.4357 19.838 29.2717 19.4L28.4517 17.131C31.1997 16.228 32.6077 14 32.6077 10.514V4.771C33.8517 4.662 34.7677 3.691 34.7677 2.406C34.7677 1.025 33.7287 0 32.3747 0H2.3927C1.0387 0 -0.0003 1.025 -0.0003 2.406C-0.0003 3.691 0.9157 4.662 2.1597 4.771V10.514C2.1597 14 3.5687 16.228 6.3167 17.131L5.4957 19.4C5.3317 19.838 5.5647 20.33 5.9887 20.48ZM1.6677 2.406C1.6677 1.955 1.9957 1.654 2.4607 1.654H32.3067C32.7717 1.654 33.0997 1.955 33.0997 2.406C33.0997 2.83 32.7717 3.144 32.3067 3.144H2.4607C1.9957 3.144 1.6677 2.83 1.6677 2.406ZM9.6247 15.9C5.8107 15.9 3.8557 14.082 3.8557 10.514V4.785H30.9117V10.514C30.9117 14.082 28.9567 15.9 25.1427 15.9Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.982421875 22.14296529086236"
          className={className}
        >
          <path
            d="              M6.6177 22.066C7.3007 22.312 8.0667 21.943 8.3127 21.273L9.1877 18.853C9.6117 18.895 10.0767 18.908 10.5407 18.908H26.4277C26.9067 18.908 27.3577 18.895 27.7947 18.853L28.6697 21.273C28.9157 21.943 29.6817 22.312 30.3657 22.066C31.0217 21.82 31.3767 21.055 31.1307 20.371L30.3657 18.266C33.1137 17.199 34.5217 14.834 34.5217 11.225V6.016C35.9437 5.756 36.9827 4.566 36.9827 3.035C36.9827 1.312 35.6567 0 33.9477 0H3.0217C1.3267 0 -0.0003 1.312 -0.0003 3.035C-0.0003 4.566 1.0387 5.756 2.4477 6.016V11.225C2.4477 14.834 3.8687 17.199 6.6037 18.266L5.8377 20.371C5.5917 21.055 5.9477 21.82 6.6177 22.066ZM2.5157 3.035C2.5157 2.68 2.8027 2.406 3.1857 2.406H33.7837C34.1797 2.406 34.4527 2.68 34.4527 3.035C34.4527 3.404 34.1797 3.664 33.7837 3.664H3.1857C2.8027 3.664 2.5157 3.404 2.5157 3.035ZM10.5407 16.297C6.8907 16.297 5.0727 14.602 5.0727 11.225V6.07H31.9097V11.225C31.9097 14.602 30.0777 16.297 26.4277 16.297Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.203125 21.562204694506367"
          className={className}
        >
          <path
            d="              M6.3987 21.4926C6.9587 21.7106 7.6017 21.3966 7.8067 20.8356L8.7087 18.3746C9.1737 18.4156 9.6797 18.4436 10.2127 18.4436H26.0037C26.5237 18.4436 27.0297 18.4156 27.4937 18.3746L28.3967 20.8356C28.6017 21.3966 29.2437 21.7106 29.8187 21.4926C30.3787 21.3006 30.6657 20.6446 30.4607 20.0836L29.6677 17.8826C32.4027 16.8846 33.8107 14.5876 33.8107 11.0336V5.5376C35.1917 5.3596 36.2027 4.2386 36.2027 2.7886C36.2027 1.1896 34.9867 -0.0004 33.4277 -0.0004H2.7757C1.2167 -0.0004 -0.0003 1.1896 -0.0003 2.7886C-0.0003 4.2386 1.0257 5.3596 2.3927 5.5376V11.0336C2.3927 14.5876 3.8007 16.8846 6.5487 17.8826L5.7427 20.0836C5.5367 20.6446 5.8377 21.3006 6.3987 21.4926ZM2.1737 2.7886C2.1737 2.4066 2.4607 2.1326 2.8707 2.1326H33.3317C33.7427 2.1326 34.0297 2.4066 34.0297 2.7886C34.0297 3.1586 33.7427 3.4316 33.3317 3.4316H2.8707C2.4607 3.4316 2.1737 3.1586 2.1737 2.7886ZM10.2127 16.2426C6.5077 16.2426 4.5937 14.4646 4.5937 11.0336V5.5646H31.6097V11.0336C31.6097 14.4646 29.6957 16.2426 26.0037 16.2426Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.5703125 22.56860421531323"
          className={className}
        >
          <path
            d="              M6.7817 22.4764C7.5467 22.7634 8.4087 22.3534 8.6817 21.6014L9.5567 19.2094C9.9527 19.2364 10.3637 19.2634 10.8007 19.2634H26.7697C27.1937 19.2634 27.6177 19.2364 28.0137 19.2094L28.8747 21.6014C29.1487 22.3534 30.0097 22.7634 30.7757 22.4764C31.5277 22.2164 31.9237 21.3554 31.6507 20.5894L30.9117 18.5524C33.6467 17.4314 35.0817 15.0114 35.0817 11.3614V6.3714C36.5177 6.0564 37.5707 4.7984 37.5707 3.2264C37.5707 1.3944 36.1617 0.0004 34.3577 0.0004H3.2127C1.4087 0.0004 -0.0003 1.3944 -0.0003 3.2264C-0.0003 4.8124 1.0527 6.0564 2.4887 6.3714V11.3614C2.4887 15.0114 3.9097 17.4314 6.6587 18.5524L5.9197 20.5894C5.6327 21.3554 6.0297 22.2164 6.7817 22.4764ZM2.7757 3.2264C2.7757 2.8714 3.0487 2.6114 3.4317 2.6114H34.1247C34.5077 2.6114 34.7817 2.8714 34.7817 3.2264C34.7817 3.5824 34.5077 3.8414 34.1247 3.8414H3.4317C3.0487 3.8414 2.7757 3.5824 2.7757 3.2264ZM10.8007 16.3104C7.1917 16.3104 5.4417 14.6974 5.4417 11.3614V6.4394H32.1287V11.3614C32.1287 14.6974 30.3787 16.3104 26.7697 16.3104Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.8671875 19.171211822458172"
          className={className}
        >
          <path
            d="              M5.4687 19.1408C5.7287 19.2368 6.0157 19.0998 6.1117 18.8398L7.0277 16.3108C7.5877 16.4058 8.2027 16.4468 8.8597 16.4468H24.0077C24.6637 16.4468 25.2657 16.4058 25.8397 16.3108L26.7557 18.8398C26.8517 19.0998 27.1387 19.2368 27.3987 19.1408C27.6717 19.0588 27.7947 18.7578 27.6997 18.4978L26.8377 16.1058C29.6137 15.3258 31.0077 13.2348 31.0077 9.8298V3.7458C32.0747 3.7458 32.8677 2.9668 32.8677 1.8868C32.8677 0.7928 32.0747 -0.0002 30.9667 -0.0002H1.9007C0.7927 -0.0002 -0.0003 0.7928 -0.0003 1.8868C-0.0003 2.9528 0.7797 3.7188 1.8597 3.7458V9.8298C1.8597 13.2348 3.2537 15.3258 6.0297 16.1058L5.1677 18.4978C5.0727 18.7578 5.1957 19.0588 5.4687 19.1408ZM1.0117 1.8868C1.0117 1.3668 1.3947 1.0118 1.9137 1.0118H30.9527C31.4727 1.0118 31.8557 1.3668 31.8557 1.8868C31.8557 2.3928 31.4727 2.7478 30.9527 2.7478H1.9137C1.3947 2.7478 1.0117 2.3928 1.0117 1.8868ZM8.8597 15.4218C4.8677 15.4218 2.8707 13.5628 2.8707 9.8298V3.7458H29.9957V9.8298C29.9957 13.5628 27.9997 15.4218 24.0077 15.4218Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.896484375 18.460109468794474"
          className={className}
        >
          <path
            d="              M5.1957 18.4436C5.3597 18.4976 5.5507 18.4156 5.6187 18.2386L6.5347 15.6956C7.1227 15.7906 7.7657 15.8456 8.4627 15.8456H23.4197C24.1177 15.8456 24.7597 15.7906 25.3477 15.6956L26.2777 18.2386C26.3457 18.4156 26.5237 18.4976 26.7017 18.4436C26.8787 18.3886 26.9607 18.1836 26.8927 18.0196L26.0037 15.5586C28.8067 14.8476 30.1877 12.8106 30.1877 9.4606V3.1996H30.2557C31.2267 3.1996 31.8967 2.5426 31.8967 1.6136C31.8967 0.6696 31.2267 -0.0004 30.2557 -0.0004H1.6407C0.6697 -0.0004 -0.0003 0.6696 -0.0003 1.6136C-0.0003 2.5426 0.6697 3.1996 1.6407 3.1996H1.6957V9.4606C1.6957 12.8106 3.0897 14.8476 5.8927 15.5586L4.9907 18.0196C4.9217 18.1836 5.0177 18.3886 5.1957 18.4436ZM0.6697 1.6136C0.6697 1.0526 1.0797 0.6696 1.6407 0.6696H30.2557C30.8167 0.6696 31.2267 1.0526 31.2267 1.6136C31.2267 2.1606 30.8167 2.5296 30.2557 2.5296H1.6407C1.0797 2.5296 0.6697 2.1606 0.6697 1.6136ZM8.4627 15.1756C4.3887 15.1756 2.3657 13.2886 2.3657 9.4606V3.1996H29.5177V9.4606C29.5177 13.2886 27.4937 15.1756 23.4197 15.1756Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

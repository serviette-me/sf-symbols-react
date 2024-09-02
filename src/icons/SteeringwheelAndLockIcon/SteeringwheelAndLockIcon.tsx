import { IconProps } from "../../types"

export default function SteeringwheelAndLockIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.154296875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C17.3087 29.8591 19.5647 29.3121 21.5737 28.2871C21.4917 27.9591 21.4377 27.5621 21.4377 27.1661V22.6541C21.4377 22.4631 21.4647 22.2441 21.4787 22.0391C20.7407 22.7911 19.8657 23.4201 18.8807 23.8851C18.4297 24.1311 18.0877 23.8851 18.0877 23.3921C18.0877 20.4941 20.0297 17.9921 22.7497 17.2541C23.5837 14.7241 25.7847 13.1521 28.4237 13.1521C28.8887 13.1521 29.3397 13.2071 29.7777 13.3031C28.9567 5.8241 22.5997 0.0001 14.9297 0.0001C6.6987 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.6987 29.8591 14.9297 29.8591ZM7.1777 8.9961C8.9957 6.5761 11.8127 5.1821 14.8887 5.1821C17.9647 5.1821 20.8087 6.5761 22.6407 8.9821C23.0917 9.5981 22.9137 10.1851 22.2437 10.1851H7.5607C6.9177 10.1851 6.7267 9.5981 7.1777 8.9961ZM14.9157 17.7601C13.5897 17.7601 12.5097 16.6801 12.5097 15.3401C12.5097 14.0271 13.5897 12.9471 14.9157 12.9471C16.2417 12.9471 17.3087 14.0271 17.3087 15.3401C17.3087 16.6801 16.2417 17.7601 14.9157 17.7601ZM25.2517 28.7931H31.6227C32.6487 28.7931 33.1547 28.2731 33.1547 27.1661V22.3671C33.1547 21.5191 32.8537 21.0141 32.2517 20.8221V19.6051C32.2517 17.1031 30.7067 15.4081 28.4377 15.4081C26.1677 15.4081 24.6227 17.1031 24.6227 19.6051V20.8221C24.0077 21.0141 23.7067 21.5061 23.7067 22.3671V27.1661C23.7067 28.2731 24.2127 28.7931 25.2517 28.7931ZM5.7287 17.7731C5.5777 17.1851 5.8107 16.9531 6.3297 17.0351C9.4337 17.5271 11.7307 20.2341 11.7307 23.3921C11.7307 23.8851 11.3887 24.1311 10.9377 23.8851C8.3537 22.6411 6.4937 20.4531 5.7287 17.7731ZM27.0427 19.5231C27.0427 18.4571 27.5757 17.8281 28.4377 17.8281C29.3127 17.8281 29.8317 18.4431 29.8317 19.5231V20.7401H27.0427Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.951171875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C16.5567 28.8886 18.5937 28.4106 20.4117 27.5626C20.3707 27.2886 20.3297 27.0016 20.3297 26.6876V23.6936C20.3297 23.5296 20.3437 23.3516 20.3437 23.1736C19.8787 23.5976 19.3457 23.9536 18.7577 24.2266C18.1697 24.5276 17.7327 24.1856 17.7327 23.5836C17.6917 20.8496 19.2637 18.4296 21.5877 17.3226C22.1207 14.4376 24.3767 12.5916 27.1657 12.5916C27.7407 12.5916 28.2737 12.6736 28.7657 12.8246C27.9587 5.6466 21.8067 -0.0004 14.4237 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5077 28.8886 14.4377 28.8886ZM5.7557 8.2576C7.6697 5.4826 10.8417 3.7596 14.4097 3.7596C17.9647 3.7596 21.1507 5.4826 23.0777 8.2446C23.5837 8.9416 23.3517 9.6656 22.5587 9.6656H6.2617C5.4827 9.6656 5.2497 8.9416 5.7557 8.2576ZM14.4237 17.7186C12.9067 17.7186 11.7027 16.5016 11.7027 14.9846C11.7027 13.4946 12.9067 12.2776 14.4237 12.2776C15.9277 12.2776 17.1307 13.4946 17.1307 14.9846C17.1307 16.5016 15.9277 17.7186 14.4237 17.7186ZM23.8577 28.2326H30.5017C31.4727 28.2326 31.9507 27.7406 31.9507 26.6876V21.6286C31.9507 20.7406 31.6097 20.2476 30.9117 20.1246V18.8126C30.9117 16.3246 29.4077 14.6426 27.1797 14.6426C24.9507 14.6426 23.4477 16.3246 23.4477 18.8126V20.1246C22.7367 20.2476 22.3947 20.7406 22.3947 21.6286V26.6876C22.3947 27.7406 22.8727 28.2326 23.8577 28.2326ZM4.2247 17.3906C4.0327 16.6796 4.3887 16.3656 5.0037 16.4606C8.5177 16.9256 11.1837 19.9886 11.1157 23.5836C11.1017 24.1856 10.6777 24.5276 10.0757 24.2266C7.1777 22.8866 5.0587 20.4126 4.2247 17.3906ZM25.5387 18.6896C25.5387 17.4586 26.1547 16.7476 27.1797 16.7476C28.2047 16.7476 28.8207 17.4456 28.8207 18.6896V20.0836H25.5387Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.59375 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C16.9527 29.4084 19.1137 28.8884 21.0277 27.9454C20.9587 27.6444 20.9177 27.3024 20.9177 26.9474V23.1604C20.9177 22.9684 20.9317 22.7774 20.9457 22.5864C20.3437 23.1734 19.6187 23.6794 18.8257 24.0624C18.3067 24.3224 17.9237 24.0354 17.9237 23.4884C17.8967 20.6724 19.6737 18.2114 22.2027 17.2954C22.9007 14.6014 25.1287 12.8924 27.8357 12.8924C28.3417 12.8924 28.8337 12.9614 29.2987 13.0844C28.4787 5.7554 22.2167 0.0004 14.6977 0.0004C6.6037 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM6.5077 8.6544C8.3667 6.0704 11.3617 4.5114 14.6697 4.5114C17.9647 4.5114 20.9727 6.0704 22.8457 8.6404C23.3237 9.2974 23.1187 9.9394 22.3947 9.9394H6.9457C6.2347 9.9394 6.0297 9.2974 6.5077 8.6544ZM14.6837 17.7464C13.2617 17.7464 12.1267 16.6114 12.1267 15.1754C12.1267 13.7814 13.2617 12.6464 14.6837 12.6464C16.0917 12.6464 17.2267 13.7814 17.2267 15.1754C17.2267 16.6114 16.0917 17.7464 14.6837 17.7464ZM24.5957 28.5334H31.0897C32.0877 28.5334 32.5937 28.0274 32.5937 26.9474V22.0254C32.5937 21.1504 32.2657 20.6584 31.6227 20.4944V19.2364C31.6227 16.7484 30.0917 15.0524 27.8357 15.0524C25.5937 15.0524 24.0627 16.7484 24.0627 19.2364V20.4944C23.4067 20.6584 23.0917 21.1504 23.0917 22.0254V26.9474C23.0917 28.0274 23.5837 28.5334 24.5957 28.5334ZM5.0177 17.5954C4.8537 16.9534 5.1267 16.6794 5.7007 16.7754C8.9957 17.2544 11.4707 20.1254 11.4437 23.4884C11.4437 24.0354 11.0607 24.3224 10.5407 24.0624C7.7927 22.7634 5.8107 20.4534 5.0177 17.5954ZM26.3317 19.1404C26.3317 17.9924 26.9067 17.3224 27.8357 17.3224C28.7927 17.3224 29.3537 17.9784 29.3537 19.1404V20.4394H26.3317Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.078125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7264 27.426C15.6134 27.426 17.4314 27.029 19.0864 26.305C19.0724 26.141 19.0454 25.949 19.0454 25.758V24.391C18.7854 24.514 18.5254 24.637 18.2524 24.746C17.6364 25.02 17.1854 24.664 17.1714 24.049C16.9944 21.328 18.2524 18.826 20.2894 17.268C20.4664 14.232 22.5724 12.223 25.3614 12.223C26.0994 12.223 26.7554 12.373 27.3574 12.646C26.8244 5.633 20.8634 0 13.7124 0C6.2074 0 0.0004 6.193 0.0004 13.713C0.0004 21.219 6.2074 27.426 13.7264 27.426ZM3.4184 7.861C5.3594 4.252 9.2554 1.764 13.6994 1.764C18.1564 1.764 22.0394 4.252 23.9944 7.848C24.4044 8.477 24.1854 9.146 23.4744 9.146H3.9374C3.2404 9.146 3.0074 8.477 3.4184 7.861ZM13.6994 17.582C12.0724 17.582 10.7464 16.27 10.7464 14.615C10.7464 12.988 12.0724 11.676 13.6994 11.676C15.3394 11.676 16.6664 12.988 16.6664 14.615C16.6664 16.27 15.3394 17.582 13.6994 17.582ZM22.0114 27.221H28.7114C29.6404 27.221 30.0784 26.756 30.0784 25.758V20.48C30.0784 19.523 29.6814 19.072 28.8614 19.018V17.664C28.8614 15.354 27.4534 13.809 25.3614 13.809C23.2834 13.809 21.8754 15.354 21.8754 17.664V19.018C21.0414 19.072 20.6444 19.523 20.6444 20.48V25.758C20.6444 26.756 21.0954 27.221 22.0114 27.221ZM23.2964 17.568C23.2964 16.092 24.0894 15.23 25.3614 15.23C26.6464 15.23 27.4394 16.092 27.4394 17.568V19.018H23.2964ZM2.1464 16.652C1.9554 15.982 2.3104 15.627 2.9254 15.682C7.1914 15.982 10.5544 19.742 10.2544 24.049C10.2404 24.664 9.7894 25.02 9.1604 24.746C5.6734 23.297 3.0624 20.316 2.1464 16.652Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.185546875 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C16.0777 28.2461 17.9647 27.8361 19.6737 27.0841C19.6467 26.8651 19.6187 26.6331 19.6187 26.3871V24.3491C19.6187 24.1991 19.6187 24.0491 19.6187 23.8981C19.3317 24.1031 19.0177 24.2951 18.6757 24.4451C17.9917 24.7731 17.4997 24.3631 17.4997 23.7071C17.4317 21.0681 18.7717 18.6891 20.8357 17.3631C21.1917 14.2321 23.4747 12.2091 26.3727 12.2091C27.0017 12.2091 27.5897 12.3181 28.1227 12.5101C27.3297 5.5231 21.2867 0.0001 14.1097 0.0001C6.3707 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3847 28.2461 14.1227 28.2461ZM4.8397 7.7791C6.8087 4.7851 10.2267 2.8441 14.0957 2.8441C17.9507 2.8441 21.3687 4.7851 23.3657 7.7651C23.8987 8.5041 23.6387 9.3381 22.7637 9.3381H5.4277C4.5667 9.3381 4.3067 8.5041 4.8397 7.7791ZM14.0957 17.6781C12.4827 17.6781 11.1837 16.3791 11.1837 14.7521C11.1837 13.1391 12.4827 11.8401 14.0957 11.8401C15.7227 11.8401 17.0217 13.1391 17.0217 14.7521C17.0217 16.3791 15.7227 17.6781 14.0957 17.6781ZM22.9547 27.8771H29.7907C30.7347 27.8771 31.1857 27.3981 31.1857 26.3871V21.1641C31.1857 20.2481 30.8167 19.7691 30.0647 19.6741V18.2931C30.0647 15.8181 28.5737 14.1501 26.3727 14.1501C24.1717 14.1501 22.6817 15.8181 22.6817 18.2931V19.6741C21.9297 19.7691 21.5607 20.2481 21.5607 21.1641V26.3871C21.5607 27.3981 22.0117 27.8771 22.9547 27.8771ZM24.5817 18.1561C24.5817 16.8031 25.2517 16.0511 26.3727 16.0511C27.4937 16.0511 28.1637 16.8031 28.1637 18.1561V19.6601H24.5817ZM3.2677 17.1441C3.0487 16.3381 3.4727 15.9821 4.1567 16.0781C7.9157 16.5291 10.8277 19.8241 10.7187 23.7071C10.7047 24.3631 10.2127 24.7731 9.5297 24.4451C6.4117 23.0371 4.1287 20.3851 3.2677 17.1441Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.748046875 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C15.8047 27.8904 17.6227 27.5074 19.2497 26.8104C19.2367 26.6194 19.2227 26.4144 19.2227 26.2094V24.2954C19.0317 24.3904 18.8257 24.4864 18.6347 24.5684C17.8967 24.9234 17.3767 24.4594 17.3637 23.7614C17.2817 21.1774 18.4977 18.8394 20.4117 17.3774C20.6717 14.1234 22.9687 12.0034 25.9217 12.0034C26.5777 12.0034 27.2067 12.1274 27.7677 12.3324C26.9747 5.4554 20.9997 0.0004 13.9317 0.0004C6.3027 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3167 27.8904 13.9457 27.8904ZM4.3207 7.5054C6.3297 4.3884 9.8707 2.3244 13.9177 2.3244C17.9507 2.3244 21.4917 4.3884 23.5157 7.4924C24.0627 8.2714 23.8027 9.1464 22.8727 9.1464H4.9627C4.0467 9.1464 3.7737 8.2714 4.3207 7.5054ZM13.9177 17.6644C12.2367 17.6644 10.8827 16.3104 10.8827 14.6154C10.8827 12.9474 12.2367 11.5934 13.9177 11.5934C15.5997 11.5934 16.9527 12.9474 16.9527 14.6154C16.9527 16.3104 15.5997 17.6644 13.9177 17.6644ZM22.4487 27.6714H29.3807C30.3107 27.6714 30.7477 27.2074 30.7477 26.2094V20.8904C30.7477 19.9614 30.3787 19.4964 29.5857 19.4274V18.0054C29.5857 15.5314 28.1097 13.8774 25.9217 13.8774C23.7347 13.8774 22.2577 15.5314 22.2577 18.0054V19.4274C21.4647 19.4964 21.0957 19.9614 21.0957 20.8904V26.2094C21.0957 27.2074 21.5327 27.6714 22.4487 27.6714ZM24.0487 17.8554C24.0487 16.4334 24.7457 15.6684 25.9217 15.6684C27.0977 15.6684 27.7947 16.4334 27.7947 17.8554V19.4274H24.0487ZM2.7207 16.9944C2.4887 16.1464 2.9667 15.7634 3.6777 15.8594C7.5877 16.3104 10.6227 19.7424 10.4867 23.7614C10.4867 24.4594 9.9527 24.9234 9.2287 24.5684C5.9887 23.1194 3.6227 20.3574 2.7207 16.9944Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.513671875 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C16.2827 28.5199 18.2387 28.0819 19.9887 27.2889C19.9477 27.0429 19.9197 26.7969 19.9197 26.5239V24.0629C19.9197 23.9119 19.9337 23.7479 19.9337 23.5839C19.5777 23.8849 19.1547 24.1449 18.7167 24.3629C18.0737 24.6779 17.5957 24.2949 17.5957 23.6519C17.5407 20.9729 18.9767 18.5799 21.1507 17.3499C21.6017 14.3279 23.8707 12.3729 26.7147 12.3729C27.3167 12.3729 27.8767 12.4689 28.3967 12.6469C27.6037 5.5779 21.5057 -0.0001 14.2457 -0.0001C6.4257 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM5.2367 7.9849C7.1777 5.0859 10.4997 3.2399 14.2327 3.2399C17.9507 3.2399 21.2737 5.0859 23.2417 7.9709C23.7617 8.6949 23.5157 9.4749 22.6817 9.4749H5.7827C4.9627 9.4749 4.7167 8.6949 5.2367 7.9849ZM14.2327 17.7049C12.6597 17.7049 11.4027 16.4339 11.4027 14.8609C11.4027 13.2889 12.6597 12.0309 14.2327 12.0309C15.8047 12.0309 17.0757 13.2889 17.0757 14.8609C17.0757 16.4339 15.8047 17.7049 14.2327 17.7049ZM23.3517 28.0409H30.0917C31.0487 28.0409 31.5137 27.5489 31.5137 26.5239V21.3689C31.5137 20.4529 31.1577 19.9749 30.4337 19.8649V18.5119C30.4337 16.0369 28.9297 14.3689 26.7147 14.3689C24.5137 14.3689 23.0097 16.0369 23.0097 18.5119V19.8649C22.2717 19.9749 21.9157 20.4529 21.9157 21.3689V26.5239C21.9157 27.5489 22.3807 28.0409 23.3517 28.0409ZM3.6777 17.2539C3.4727 16.4879 3.8687 16.1469 4.5117 16.2419C8.1757 16.7069 10.9787 19.9059 10.8827 23.6519C10.8827 24.2949 10.4177 24.6779 9.7757 24.3629C6.7407 22.9829 4.5257 20.3989 3.6777 17.2539ZM25.0057 18.3889C25.0057 17.0899 25.6487 16.3519 26.7147 16.3519C27.8087 16.3519 28.4377 17.0759 28.4377 18.3889V19.8519H25.0057Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.17578125 26.810546875"
          className={className}
        >
          <path
            d="              M13.4124 26.8102C15.3264 26.8102 17.1714 26.4002 18.8394 25.6482C18.8264 25.4982 18.7984 25.3342 18.7984 25.1702V24.5272C18.4574 24.6912 18.1014 24.8422 17.7464 24.9782C17.2544 25.1702 16.9124 24.9242 16.8844 24.4182C16.5844 21.5332 17.9104 18.7992 20.1114 17.1172C20.1664 14.3962 22.0254 12.5102 24.5954 12.5102C25.4294 12.5102 26.1684 12.7152 26.7964 13.0702C26.6194 5.8652 20.6584 0.0002 13.4124 0.0002C6.0434 0.0002 0.0004 6.0432 0.0004 13.4122C0.0004 20.7672 6.0434 26.8102 13.4124 26.8102ZM2.2014 8.3402C4.0604 4.0742 8.4084 1.0392 13.3984 1.0392C18.4024 1.0392 22.7364 4.0742 24.6094 8.3262C24.8414 8.7502 24.6774 9.1462 24.2404 9.1462H2.5704C2.1324 9.1462 1.9684 8.7502 2.2014 8.3402ZM13.3984 17.4862C11.8264 17.4862 10.5544 16.2282 10.5544 14.6292C10.5544 13.0432 11.8264 11.7852 13.3984 11.7852C14.9844 11.7852 16.2554 13.0432 16.2554 14.6292C16.2554 16.2282 14.9844 17.4862 13.3984 17.4862ZM21.4104 26.6332H27.8084C28.7244 26.6332 29.1754 26.1812 29.1754 25.1702V19.9612C29.1754 18.9632 28.7524 18.5122 27.8774 18.4982V17.2402C27.8774 15.1352 26.5504 13.7262 24.6094 13.7262C22.6544 13.7262 21.3414 15.1352 21.3414 17.2402V18.4982C20.4944 18.4842 20.0434 18.9352 20.0434 19.9612V25.1702C20.0434 26.1812 20.4944 26.6332 21.4104 26.6332ZM22.2714 17.2132C22.2714 15.6402 23.2014 14.6562 24.6094 14.6562C26.0314 14.6562 26.9474 15.6402 26.9474 17.2132V18.4842H22.2714ZM1.3674 16.2152C1.2444 15.7502 1.4214 15.4492 1.9274 15.4632C6.6584 15.5582 10.4314 19.7562 9.9254 24.4182C9.8984 24.9242 9.5564 25.1702 9.0644 24.9782C5.2364 23.5432 2.3104 20.2622 1.3674 16.2152Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.724609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2484 26.4961C15.1894 26.4961 17.0354 26.0721 18.7164 25.3071C18.7034 25.1701 18.6754 25.0061 18.6754 24.8551V24.5961C18.2934 24.7601 17.8824 24.9371 17.4864 25.0881C17.0764 25.2381 16.7754 25.0471 16.7484 24.5961C16.3654 21.6291 17.7324 18.7711 20.0294 17.0351C20.0154 14.4651 21.7384 12.6461 24.2124 12.6461C25.0874 12.6461 25.8534 12.8651 26.4964 13.2751C26.5234 5.9741 20.5484 0.0001 13.2484 0.0001C5.9614 0.0001 0.0004 5.9611 0.0004 13.2481C0.0004 20.5351 5.9614 26.4961 13.2484 26.4961ZM1.5724 8.5721C3.4044 3.9651 7.9704 0.6701 13.2484 0.6701C18.5254 0.6701 23.1054 3.9651 24.9234 8.5721C25.0604 8.8871 24.9234 9.1461 24.6364 9.1461H1.8594C1.5724 9.1461 1.4354 8.8871 1.5724 8.5721ZM13.2344 17.4311C11.7034 17.4311 10.4454 16.1871 10.4454 14.6151C10.4454 13.0701 11.7034 11.8261 13.2344 11.8261C14.8064 11.8261 16.0504 13.0701 16.0504 14.6151C16.0504 16.1871 14.8064 17.4311 13.2344 17.4311ZM21.1094 26.3181H27.3434C28.2594 26.3181 28.7244 25.8671 28.7244 24.8551V19.6741C28.7244 18.6621 28.2734 18.2241 27.3714 18.2111V17.0081C27.3714 15.0121 26.0994 13.6721 24.2264 13.6721C22.3394 13.6721 21.0684 15.0121 21.0684 17.0081V18.2111C20.1794 18.2111 19.7284 18.6481 19.7284 19.6741V24.8551C19.7284 25.8671 20.1794 26.3181 21.1094 26.3181ZM21.7524 17.0081C21.7524 15.4081 22.7504 14.3551 24.2264 14.3551C25.7164 14.3551 26.6874 15.4081 26.6874 17.0081V18.2111H21.7524ZM0.9574 15.9821C0.8754 15.6271 0.9704 15.3401 1.4084 15.3401C6.3844 15.3401 10.3774 19.7561 9.7614 24.5961C9.7204 25.0471 9.4334 25.2381 9.0234 25.0881C5.0044 23.6521 1.9274 20.2211 0.9574 15.9821Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
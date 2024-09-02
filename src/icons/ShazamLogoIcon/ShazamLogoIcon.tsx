import { IconProps } from "../../types"

export default function ShazamLogoIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM13.9587 9.5571C14.4647 9.0511 14.4787 8.2711 13.9727 7.7791C13.4807 7.2871 12.6877 7.2321 12.1817 7.7111C12.1137 7.8071 10.2407 9.5701 9.2007 10.7321C8.2717 11.7581 7.8207 13.0701 7.8887 14.4371C7.9707 15.8461 8.6407 17.1441 9.7477 18.0881C10.6507 18.8671 11.8127 19.2501 12.9887 19.2501C14.2187 19.2501 15.4217 18.8531 16.3377 18.0061C17.0077 17.4451 17.7597 16.6111 17.7597 16.5981C18.2517 16.0641 18.2107 15.2711 17.7047 14.8201C17.1987 14.3281 16.3787 14.3551 15.9137 14.8751C15.9007 14.8751 15.2307 15.6271 14.6427 16.1331C13.6987 16.9801 12.1817 16.8441 11.4027 16.1871C10.8277 15.6681 10.4867 15.0121 10.4317 14.2871C10.3767 13.6031 10.6367 12.9471 11.0877 12.4551C12.0587 11.3481 13.9457 9.5701 13.9587 9.5571ZM15.9137 20.3441C15.3947 20.8491 15.3807 21.6291 15.9007 22.1211C16.3787 22.6411 17.1717 22.6681 17.6917 22.1891C17.7597 22.0941 19.6187 20.3301 20.6577 19.1681C21.6017 18.1421 22.0527 16.8441 21.9847 15.4761C21.9027 14.0681 21.2327 12.7561 20.1527 11.8121C19.2227 11.0331 18.0607 10.6501 16.8847 10.6501C15.6407 10.6501 14.4647 11.0471 13.5347 11.8941C12.8657 12.4551 12.1137 13.2891 12.1137 13.3031C11.6207 13.8361 11.6487 14.6421 12.1677 15.0801C12.6737 15.5721 13.4807 15.5581 13.9587 15.0531C13.9727 15.0251 14.6427 14.2601 15.2307 13.7671C16.1737 12.9201 17.6917 13.0701 18.4707 13.7131C19.0447 14.2321 19.3727 14.8891 19.4277 15.6271C19.4827 16.2971 19.2367 16.9531 18.7847 17.4731C17.8147 18.5531 15.9277 20.3301 15.9137 20.3441Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM13.4117 8.8866C13.9457 8.3536 13.9587 7.5336 13.4257 7.0136C12.9197 6.5076 12.0857 6.4536 11.5527 6.9456C11.4847 7.0546 9.5297 8.9006 8.4357 10.1176C7.4647 11.1836 6.9727 12.5646 7.0547 13.9866C7.1507 15.4626 7.8477 16.8296 9.0097 17.8146C9.9527 18.6346 11.1697 19.0316 12.4007 19.0316C13.6857 19.0316 14.9437 18.6076 15.9007 17.7326C16.5977 17.1306 17.3907 16.2696 17.3907 16.2556C17.8967 15.7086 17.8687 14.8746 17.3357 14.3826C16.8027 13.8766 15.9547 13.9046 15.4627 14.4516C15.4357 14.4516 14.7387 15.2446 14.1227 15.7776C13.1387 16.6526 11.5527 16.5016 10.7327 15.8186C10.1307 15.2716 9.7757 14.5876 9.7347 13.8356C9.6657 13.1116 9.9257 12.4276 10.4177 11.9216C11.4157 10.7596 13.3847 8.9006 13.4117 8.8866ZM15.4627 20.1656C14.9297 20.6996 14.9027 21.5196 15.4357 22.0386C15.9547 22.5726 16.7757 22.5996 17.3227 22.1076C17.3907 21.9976 19.3457 20.1526 20.4257 18.9496C21.4097 17.8696 21.8887 16.5016 21.8067 15.0666C21.7247 13.6036 21.0277 12.2366 19.8927 11.2386C18.9217 10.4316 17.7047 10.0216 16.4607 10.0216C15.1757 10.0216 13.9457 10.4456 12.9747 11.3336C12.2637 11.9216 11.4847 12.7836 11.4707 12.7966C10.9647 13.3576 11.0057 14.2046 11.5387 14.6696C12.0727 15.1896 12.9197 15.1626 13.4117 14.6286C13.4257 14.6016 14.1227 13.7946 14.7387 13.2886C15.7367 12.4006 17.3227 12.5646 18.1287 13.2346C18.7307 13.7816 19.0857 14.4646 19.1407 15.2446C19.1957 15.9416 18.9357 16.6246 18.4567 17.1716C17.4457 18.2926 15.4767 20.1526 15.4627 20.1656Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM13.6987 9.2424C14.2187 8.7224 14.2327 7.9294 13.7127 7.4234C13.2207 6.9184 12.4007 6.8774 11.8807 7.3554C11.8127 7.4644 9.9117 9.2694 8.8457 10.4454C7.8887 11.4984 7.4237 12.8384 7.4917 14.2324C7.5877 15.6684 8.2717 16.9944 9.4067 17.9644C10.3227 18.7574 11.5117 19.1544 12.7147 19.1544C13.9727 19.1544 15.1897 18.7444 16.1327 17.8824C16.8167 17.2954 17.5817 16.4614 17.5817 16.4474C18.0877 15.9004 18.0467 15.0934 17.5277 14.6294C17.0077 14.1234 16.1737 14.1504 15.6957 14.6834C15.6817 14.6834 14.9977 15.4494 14.3967 15.9684C13.4257 16.8304 11.8807 16.6934 11.0877 16.0234C10.4997 15.4904 10.1577 14.8204 10.1037 14.0824C10.0487 13.3844 10.2947 12.7144 10.7737 12.2094C11.7577 11.0744 13.6857 9.2694 13.6987 9.2424ZM15.6957 20.2754C15.1757 20.7954 15.1617 21.5884 15.6817 22.0934C16.1737 22.6134 16.9937 22.6404 17.5137 22.1624C17.5817 22.0524 19.4957 20.2484 20.5487 19.0724C21.5057 18.0194 21.9707 16.6934 21.9027 15.2854C21.8207 13.8494 21.1367 12.5234 20.0297 11.5524C19.0727 10.7594 17.8967 10.3634 16.6797 10.3634C15.4217 10.3634 14.2187 10.7734 13.2757 11.6344C12.5777 12.2094 11.8127 13.0564 11.8127 13.0704C11.3067 13.6174 11.3477 14.4374 11.8667 14.8884C12.3867 15.3944 13.2207 15.3804 13.6987 14.8474C13.7127 14.8344 14.3967 14.0544 14.9977 13.5484C15.9687 12.6734 17.5137 12.8384 18.3067 13.4944C18.8947 14.0274 19.2367 14.6974 19.2907 15.4494C19.3457 16.1324 19.0997 16.8024 18.6207 17.3364C17.6367 18.4434 15.7087 20.2484 15.6957 20.2754Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM12.6327 7.971C13.1937 7.41 13.2067 6.563 12.6467 6.016C12.1267 5.469 11.2517 5.428 10.6917 5.947C10.6227 6.057 8.5857 7.984 7.4507 9.242C6.4257 10.363 5.9197 11.813 6.0017 13.289C6.1117 14.834 6.8227 16.256 8.0387 17.295C9.0237 18.143 10.2947 18.566 11.5797 18.566C12.9337 18.566 14.2327 18.129 15.2307 17.199C15.9687 16.57 16.7887 15.682 16.8027 15.668C17.3227 15.094 17.2947 14.219 16.7347 13.713C16.1737 13.166 15.2847 13.207 14.7797 13.781C14.7657 13.781 14.0277 14.602 13.3847 15.162C12.3597 16.078 10.6917 15.928 9.8437 15.217C9.2147 14.643 8.8457 13.918 8.7907 13.139C8.7227 12.387 9.0097 11.676 9.5157 11.129C10.5547 9.926 12.6187 7.984 12.6327 7.971ZM14.7797 19.742C14.2187 20.303 14.2047 21.164 14.7657 21.697C15.2847 22.258 16.1597 22.299 16.7207 21.779C16.8027 21.67 18.8257 19.729 19.9607 18.471C20.9867 17.363 21.4917 15.928 21.4097 14.424C21.3277 12.893 20.5897 11.457 19.4007 10.432C18.3887 9.57 17.1167 9.16 15.8317 9.16C14.4787 9.16 13.1937 9.598 12.1817 10.514C11.4437 11.143 10.6227 12.031 10.6097 12.059C10.0897 12.646 10.1167 13.521 10.6777 14.014C11.2387 14.547 12.1267 14.52 12.6327 13.959C12.6467 13.932 13.3847 13.098 14.0277 12.564C15.0527 11.635 16.7207 11.813 17.5687 12.51C18.1977 13.084 18.5667 13.795 18.6207 14.602C18.6897 15.34 18.4157 16.051 17.9097 16.625C16.8577 17.801 14.7927 19.729 14.7797 19.742Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM13.0567 8.4491C13.6037 7.9021 13.6307 7.0551 13.0707 6.5211C12.5507 5.9881 11.7027 5.9471 11.1567 6.4531C11.0737 6.5621 9.0647 8.4631 7.9567 9.7071C6.9457 10.8011 6.4397 12.2361 6.5217 13.6851C6.6307 15.2031 7.3417 16.6111 8.5317 17.6231C9.5017 18.4711 10.7597 18.8811 12.0317 18.8811C13.3437 18.8811 14.6427 18.4431 15.6137 17.5411C16.3377 16.9261 17.1447 16.0511 17.1577 16.0231C17.6777 15.4631 17.6507 14.6011 17.0897 14.1091C16.5427 13.5761 15.6677 13.6031 15.1757 14.1641C15.1487 14.1641 14.4377 14.9841 13.7947 15.5311C12.7827 16.4331 11.1567 16.2831 10.3087 15.5861C9.6937 15.0121 9.3237 14.3141 9.2697 13.5351C9.2147 12.7971 9.4887 12.0991 9.9807 11.5661C11.0197 10.3771 13.0427 8.4631 13.0567 8.4491ZM15.1757 20.0561C14.6157 20.6031 14.6017 21.4371 15.1487 21.9711C15.6677 22.5171 16.5297 22.5581 17.0757 22.0391C17.1577 21.9431 19.1547 20.0291 20.2757 18.7991C21.2867 17.6911 21.7797 16.2831 21.6977 14.8061C21.6157 13.2891 20.8907 11.8811 19.7287 10.8691C18.7307 10.0351 17.4727 9.6251 16.2007 9.6251C14.8747 9.6251 13.6037 10.0491 12.6057 10.9651C11.8947 11.5801 11.0737 12.4551 11.0607 12.4691C10.5407 13.0561 10.5817 13.9181 11.1287 14.3961C11.6757 14.9301 12.5507 14.8891 13.0567 14.3421C13.0707 14.3281 13.7947 13.5081 14.4377 12.9741C15.4487 12.0581 17.0757 12.2361 17.9237 12.9201C18.5387 13.4801 18.8947 14.1911 18.9487 14.9841C19.0177 15.6951 18.7437 16.4061 18.2517 16.9671C17.2127 18.1291 15.1897 20.0291 15.1757 20.0561Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM12.8657 8.2034C13.4257 7.6424 13.4397 6.7954 12.8787 6.2484C12.3597 5.7014 11.4847 5.6604 10.9237 6.1794C10.8557 6.2894 8.8187 8.2164 7.6837 9.4744C6.6447 10.5954 6.1387 12.0454 6.2347 13.5214C6.3297 15.0664 7.0547 16.4884 8.2717 17.5274C9.2417 18.3754 10.5277 18.7984 11.8127 18.7984C13.1527 18.7984 14.4647 18.3614 15.4627 17.4314C16.1877 16.8024 17.0077 15.9144 17.0347 15.9004C17.5547 15.3264 17.5137 14.4514 16.9667 13.9454C16.4067 13.3984 15.5177 13.4394 15.0117 14.0134C14.9847 14.0134 14.2597 14.8344 13.6167 15.3944C12.5777 16.3104 10.9237 16.1604 10.0627 15.4494C9.4337 14.8754 9.0777 14.1504 9.0237 13.3714C8.9547 12.6194 9.2287 11.9084 9.7347 11.3614C10.7867 10.1584 12.8377 8.2164 12.8657 8.2034ZM15.0117 19.9744C14.4507 20.5354 14.4377 21.3964 14.9847 21.9294C15.5177 22.4904 16.3787 22.5314 16.9397 22.0114C17.0347 21.9024 19.0587 19.9614 20.1937 18.7034C21.2187 17.5954 21.7247 16.1604 21.6427 14.6564C21.5467 13.1254 20.8227 11.6894 19.6327 10.6644C18.6207 9.8024 17.3497 9.3924 16.0507 9.3924C14.7107 9.3924 13.4257 9.8304 12.4007 10.7464C11.6757 11.3754 10.8557 12.2634 10.8417 12.2914C10.3087 12.8784 10.3497 13.7534 10.9097 14.2464C11.4707 14.7794 12.3597 14.7524 12.8657 14.1914C12.8787 14.1644 13.6167 13.3304 14.2597 12.7964C15.2847 11.8674 16.9397 12.0454 17.8007 12.7424C18.4297 13.3164 18.7987 14.0274 18.8397 14.8344C18.9217 15.5724 18.6347 16.2834 18.1287 16.8574C17.0897 18.0334 15.0257 19.9614 15.0117 19.9744Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM13.2067 8.6409C13.7537 8.0939 13.7677 7.2599 13.2207 6.7399C12.7147 6.2209 11.8667 6.1659 11.3207 6.6719C11.2517 6.7809 9.2697 8.6539 8.1617 9.8849C7.1637 10.9649 6.6717 12.3729 6.7537 13.8219C6.8497 15.3129 7.5607 16.7069 8.7367 17.7049C9.6937 18.5389 10.9377 18.9489 12.1817 18.9489C13.4937 18.9489 14.7657 18.5259 15.7367 17.6229C16.4477 17.0079 17.2537 16.1469 17.2677 16.1329C17.7737 15.5589 17.7457 14.7249 17.1987 14.2329C16.6527 13.6989 15.7907 13.7399 15.2987 14.2869C15.2717 14.2869 14.5607 15.0939 13.9457 15.6409C12.9337 16.5289 11.3207 16.3789 10.4997 15.6819C9.8847 15.1209 9.5297 14.4379 9.4747 13.6719C9.4067 12.9339 9.6797 12.2359 10.1717 11.7169C11.1837 10.5409 13.1937 8.6539 13.2067 8.6409ZM15.2987 20.0979C14.7517 20.6449 14.7387 21.4789 15.2717 21.9979C15.7907 22.5449 16.6387 22.5859 17.1857 22.0669C17.2677 21.9709 19.2367 20.0839 20.3437 18.8539C21.3417 17.7739 21.8337 16.3789 21.7517 14.9159C21.6567 13.4259 20.9457 12.0309 19.7967 11.0329C18.8127 10.1989 17.5687 9.7889 16.3107 9.7889C15.0117 9.7889 13.7537 10.2269 12.7697 11.1149C12.0587 11.7309 11.2517 12.5919 11.2387 12.6189C10.7327 13.1929 10.7597 14.0409 11.3067 14.5199C11.8537 15.0389 12.7147 15.0119 13.2067 14.4649C13.2207 14.4509 13.9457 13.6309 14.5607 13.1109C15.5727 12.2089 17.1857 12.3729 18.0057 13.0569C18.6207 13.6169 18.9767 14.3149 19.0317 15.0939C19.0997 15.8049 18.8257 16.5019 18.3337 17.0629C17.3087 18.1969 15.3127 20.0839 15.2987 20.0979Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM12.3317 7.6702C12.8927 7.1092 12.9067 6.2622 12.3457 5.7152C11.8257 5.1682 10.9507 5.1272 10.3907 5.6462C10.3227 5.7562 8.2847 7.6832 7.1507 8.9412C6.1247 10.0622 5.6187 11.5122 5.7007 12.9882C5.8107 14.5332 6.5217 15.9552 7.7387 16.9942C8.7227 17.8422 9.9937 18.2652 11.2797 18.2652C12.6327 18.2652 13.9317 17.8282 14.9297 16.8982C15.6677 16.2692 16.4887 15.3812 16.5017 15.3672C17.0217 14.7932 16.9937 13.9182 16.4337 13.4122C15.8727 12.8652 14.9847 12.9062 14.4787 13.4802C14.4647 13.4802 13.7267 14.3012 13.0837 14.8612C12.0587 15.7772 10.3907 15.6272 9.5427 14.9162C8.9137 14.3422 8.5447 13.6172 8.4907 12.8382C8.4217 12.0862 8.7087 11.3752 9.2147 10.8282C10.2537 9.6252 12.3187 7.6832 12.3317 7.6702ZM14.4787 19.4412C13.9177 20.0022 13.9047 20.8632 14.4647 21.3962C14.9847 21.9572 15.8597 21.9982 16.4197 21.4782C16.5017 21.3692 18.5257 19.4282 19.6597 18.1702C20.6857 17.0622 21.1917 15.6272 21.1097 14.1232C21.0277 12.5922 20.2887 11.1562 19.0997 10.1312C18.0877 9.2692 16.8167 8.8592 15.5317 8.8592C14.1777 8.8592 12.8927 9.2972 11.8807 10.2132C11.1427 10.8422 10.3227 11.7302 10.3087 11.7582C9.7887 12.3452 9.8167 13.2202 10.3767 13.7132C10.9377 14.2462 11.8257 14.2192 12.3317 13.6582C12.3457 13.6312 13.0837 12.7972 13.7267 12.2632C14.7517 11.3342 16.4197 11.5122 17.2677 12.2092C17.8967 12.7832 18.2657 13.4942 18.3207 14.3012C18.3887 15.0392 18.1157 15.7502 17.6097 16.3242C16.5567 17.5002 14.4917 19.4282 14.4787 19.4412Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM12.1817 7.5061C12.7417 6.9451 12.7557 6.0981 12.1957 5.5511C11.6757 5.0041 10.8007 4.9631 10.2407 5.4821C10.1717 5.5921 8.1347 7.5191 6.9997 8.7771C5.9607 9.8981 5.4547 11.3481 5.5507 12.8241C5.6467 14.3691 6.3707 15.7911 7.5877 16.8301C8.5727 17.6781 9.8437 18.1011 11.1287 18.1011C12.4687 18.1011 13.7817 17.6641 14.7797 16.7341C15.5177 16.1051 16.3377 15.2171 16.3517 15.2031C16.8707 14.6291 16.8437 13.7541 16.2827 13.2481C15.7227 12.7011 14.8337 12.7421 14.3277 13.3161C14.3007 13.3161 13.5757 14.1371 12.9337 14.6971C11.8947 15.6131 10.2407 15.4631 9.3927 14.7521C8.7637 14.1781 8.3947 13.4531 8.3397 12.6741C8.2717 11.9221 8.5447 11.2111 9.0507 10.6641C10.1037 9.4611 12.1547 7.5191 12.1817 7.5061ZM14.3277 19.2771C13.7677 19.8381 13.7537 20.6991 14.3007 21.2321C14.8337 21.7931 15.7087 21.8341 16.2557 21.3141C16.3517 21.2051 18.3747 19.2641 19.5097 18.0061C20.5347 16.8981 21.0407 15.4631 20.9587 13.9591C20.8637 12.4281 20.1387 10.9921 18.9487 9.9671C17.9377 9.1051 16.6657 8.6951 15.3667 8.6951C14.0277 8.6951 12.7417 9.1331 11.7307 10.0491C10.9917 10.6781 10.1717 11.5661 10.1577 11.5941C9.6247 12.1811 9.6657 13.0561 10.2267 13.5491C10.7867 14.0821 11.6757 14.0551 12.1817 13.4941C12.1957 13.4671 12.9337 12.6331 13.5757 12.0991C14.6017 11.1701 16.2557 11.3481 17.1167 12.0451C17.7457 12.6191 18.1157 13.3301 18.1697 14.1371C18.2387 14.8751 17.9507 15.5861 17.4457 16.1601C16.4067 17.3361 14.3417 19.2641 14.3277 19.2771Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
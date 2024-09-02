import { IconProps } from "../../types"

export default function StethoscopeCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM7.2047 11.7581C7.2047 14.0271 9.0917 16.7621 10.9097 17.4451C11.0607 20.1521 12.1547 21.5741 14.1227 21.5741C16.1467 21.5741 17.2267 20.3161 17.5817 17.5821C17.7327 16.2421 18.0607 15.6541 18.5937 15.6541C19.1407 15.6541 19.4417 16.0641 19.5237 16.9531C18.8537 17.3081 18.3887 18.0191 18.3887 18.8261C18.3887 20.0021 19.3597 20.9591 20.5217 20.9591C21.7107 20.9591 22.6547 20.0161 22.6547 18.8261C22.6547 17.9781 22.1487 17.2401 21.4097 16.8981C21.1777 14.7521 20.2887 13.7401 18.6617 13.7401C16.9937 13.7401 15.9687 14.8611 15.6957 17.0211C15.4357 18.9761 15.0387 19.6461 14.1777 19.6461C13.3847 19.6461 12.9337 18.9351 12.8237 17.4321C14.6287 16.7341 16.5017 14.0141 16.5017 11.7581C16.5017 10.2951 15.6677 9.4741 14.1637 9.4741H14.1367C13.9317 9.2971 13.6577 9.1871 13.3707 9.1871C12.7007 9.1871 12.1407 9.7481 12.1407 10.4181C12.1407 11.1151 12.6877 11.6621 13.3707 11.6621C13.6577 11.6621 13.9177 11.5661 14.1367 11.4021H14.1777C14.4377 11.4021 14.5877 11.5391 14.5877 11.7581C14.5877 13.2751 12.8927 15.6821 11.8397 15.6821C10.8007 15.6821 9.1327 13.2891 9.1327 11.7581C9.1327 11.5391 9.2697 11.4021 9.5297 11.4021H9.5707C9.7887 11.5661 10.0487 11.6621 10.3357 11.6621C11.0197 11.6621 11.5667 11.1151 11.5667 10.4181C11.5667 9.7481 11.0057 9.1871 10.3357 9.1871C10.0487 9.1871 9.7757 9.2971 9.5707 9.4741H9.5427C8.0527 9.4741 7.2047 10.2951 7.2047 11.7581ZM20.5347 19.2911C20.2757 19.2911 20.0707 19.0861 20.0707 18.8261C20.0707 18.5661 20.2757 18.3611 20.5347 18.3611C20.7947 18.3611 20.9867 18.5661 20.9867 18.8261C20.9867 19.0861 20.7947 19.2911 20.5347 19.2911Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM6.1527 10.8146C6.1527 13.3296 8.1897 16.3786 10.1307 17.0216C10.2677 19.9336 11.4437 21.5196 13.4937 21.5196C15.5177 21.5196 16.6387 20.1386 17.1037 17.0766C17.3497 15.3396 17.7597 14.6566 18.4567 14.6566C19.1267 14.6566 19.5097 15.2576 19.6187 16.5836C18.8667 16.9256 18.3337 17.6916 18.3337 18.5796C18.3337 19.8106 19.3187 20.7946 20.5347 20.7946C21.7657 20.7946 22.7497 19.8106 22.7497 18.5796C22.7497 17.6366 22.1487 16.8296 21.3147 16.5156C21.0687 14.1096 20.1527 12.9606 18.4847 12.9606C16.7887 12.9606 15.8187 14.1096 15.4217 16.6386C15.0527 18.9356 14.5737 19.8106 13.4937 19.8106C12.5237 19.8106 11.9487 18.8536 11.8397 17.0216C13.7817 16.3656 15.8187 13.3296 15.8187 10.8146C15.8187 9.3106 14.9977 8.4766 13.4937 8.4766H13.4527C13.2347 8.2576 12.9337 8.1076 12.5917 8.1076C11.9357 8.1076 11.3747 8.6546 11.3747 9.3246C11.3747 10.0076 11.9217 10.5546 12.5917 10.5546C12.9337 10.5546 13.2207 10.4176 13.4397 10.1996H13.5347C13.9047 10.1996 14.0957 10.4046 14.0957 10.8146C14.0957 12.7016 12.2497 15.4356 10.9787 15.4356C9.7067 15.4356 7.8617 12.7016 7.8617 10.8146C7.8617 10.3906 8.0527 10.1996 8.4357 10.1996H8.5037C8.7227 10.4176 9.0237 10.5546 9.3657 10.5546C10.0347 10.5546 10.5817 10.0076 10.5817 9.3246C10.5817 8.6546 10.0347 8.1076 9.3657 8.1076C9.0237 8.1076 8.7227 8.2576 8.5037 8.4766H8.4767C6.9727 8.4766 6.1527 9.3106 6.1527 10.8146ZM20.5347 19.2776C20.1657 19.2776 19.8517 18.9626 19.8517 18.5796C19.8517 18.1976 20.1657 17.8826 20.5347 17.8826C20.9317 17.8826 21.2327 18.1976 21.2327 18.5796C21.2327 18.9626 20.9177 19.2776 20.5347 19.2776Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM6.7127 11.3204C6.7127 13.6994 8.6677 16.5844 10.5407 17.2544C10.6917 20.0564 11.8127 21.5604 13.8227 21.5604C15.8457 21.5604 16.9527 20.2344 17.3637 17.3494C17.5547 15.8184 17.9097 15.1894 18.5257 15.1894C19.1407 15.1894 19.4687 15.6814 19.5647 16.7894C18.8537 17.1444 18.3617 17.8694 18.3617 18.7164C18.3617 19.9204 19.3317 20.8904 20.5217 20.8904C21.7387 20.8904 22.7087 19.9204 22.7087 18.7164C22.7087 17.8284 22.1487 17.0484 21.3557 16.7204C21.1227 14.4514 20.2347 13.3714 18.5797 13.3714C16.8987 13.3714 15.9007 14.5194 15.5727 16.8434C15.2577 18.9634 14.8207 19.7284 13.8497 19.7284C12.9747 19.7284 12.4687 18.9084 12.3597 17.2404C14.2327 16.5704 16.1737 13.6994 16.1737 11.3204C16.1737 9.8304 15.3397 9.0094 13.8497 9.0094H13.8227C13.6037 8.8044 13.3167 8.6814 13.0017 8.6814C12.3317 8.6814 11.7847 9.2424 11.7847 9.9124C11.7847 10.5954 12.3317 11.1424 13.0017 11.1424C13.3167 11.1424 13.5897 11.0334 13.8087 10.8414H13.8767C14.1917 10.8414 14.3557 11.0054 14.3557 11.3204C14.3557 13.0024 12.5917 15.5724 11.4437 15.5724C10.2947 15.5724 8.5317 13.0154 8.5317 11.3204C8.5317 11.0054 8.6957 10.8414 9.0097 10.8414H9.0647C9.2827 11.0334 9.5707 11.1424 9.8707 11.1424C10.5547 11.1424 11.1017 10.5954 11.1017 9.9124C11.1017 9.2424 10.5407 8.6814 9.8707 8.6814C9.5707 8.6814 9.2827 8.8044 9.0647 9.0094H9.0367C7.5327 9.0094 6.7127 9.8304 6.7127 11.3204ZM20.5347 19.2914C20.2207 19.2914 19.9747 19.0314 19.9747 18.7164C19.9747 18.4024 20.2207 18.1424 20.5347 18.1424C20.8637 18.1424 21.1097 18.4024 21.1097 18.7164C21.1097 19.0314 20.8497 19.2914 20.5347 19.2914Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM12.6877 21.246C14.7927 21.246 15.8727 19.77 16.4067 16.27C16.7477 14.096 17.2677 13.248 18.2107 13.248C19.0997 13.248 19.6057 14.096 19.7697 15.969C18.8257 16.242 18.1287 17.131 18.1287 18.17C18.1287 19.469 19.1407 20.48 20.4397 20.48C21.7247 20.48 22.7637 19.455 22.7637 18.17C22.7637 17.09 21.9977 16.188 20.9867 15.941C20.7267 13.303 19.8377 12.031 18.2107 12.031C16.5567 12.031 15.6817 13.18 15.1897 15.982C14.7387 18.744 14.2457 20.016 12.6467 20.016C11.3067 20.016 10.5547 18.744 10.4867 16.324C12.6057 15.859 14.9437 12.346 14.9437 9.461C14.9437 7.93 14.1917 7.137 12.7147 7.137H12.5917C12.4007 6.877 12.0857 6.699 11.7437 6.699C11.1697 6.699 10.6917 7.164 10.6917 7.738C10.6917 8.313 11.1697 8.791 11.7437 8.791C12.0857 8.791 12.3867 8.627 12.5777 8.367H12.8237C13.4257 8.367 13.7127 8.709 13.7127 9.447C13.7127 11.922 11.5387 15.162 9.8847 15.162C8.2307 15.162 6.0427 11.908 6.0427 9.447C6.0427 8.695 6.3437 8.367 6.9457 8.367H7.1637C7.3687 8.627 7.6697 8.791 8.0117 8.791C8.5997 8.791 9.0647 8.313 9.0647 7.738C9.0647 7.164 8.5997 6.699 8.0117 6.699C7.6697 6.699 7.3557 6.877 7.1507 7.137H7.0547C5.5777 7.137 4.8127 7.93 4.8127 9.461C4.8127 12.332 7.1367 15.846 9.2697 16.324C9.3657 19.496 10.5547 21.246 12.6877 21.246ZM20.4397 19.359C19.7827 19.359 19.2637 18.826 19.2637 18.17C19.2637 17.514 19.7827 16.994 20.4397 16.994C21.0957 16.994 21.6157 17.514 21.6157 18.17C21.6157 18.826 21.0817 19.359 20.4397 19.359Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM13.0837 21.4781C15.1207 21.4781 16.2557 20.0021 16.7887 16.7481C17.1167 14.7651 17.5687 14.0141 18.3617 14.0141C19.1267 14.0141 19.5507 14.7241 19.6877 16.3381C18.8667 16.6661 18.2927 17.4731 18.2927 18.4161C18.2927 19.6741 19.2907 20.6721 20.5487 20.6721C21.8067 20.6721 22.8187 19.6601 22.8187 18.4161C22.8187 17.4181 22.1487 16.5701 21.2457 16.2831C20.9867 13.6851 20.0707 12.4551 18.3747 12.4551C16.6527 12.4551 15.7227 13.6311 15.2307 16.3791C14.8067 18.8941 14.2737 19.9061 13.0567 19.9061C11.9627 19.9061 11.3067 18.7851 11.2107 16.7341C13.2207 16.1331 15.3667 12.8921 15.3667 10.1991C15.3667 8.6681 14.5607 7.8341 13.0707 7.8341H13.0017C12.7827 7.5741 12.4547 7.4101 12.0997 7.4101C11.4437 7.4101 10.8967 7.9431 10.8967 8.6131C10.8967 9.2831 11.4297 9.8301 12.0997 9.8301C12.4547 9.8301 12.7697 9.6661 13.0017 9.4201H13.1117C13.5757 9.4201 13.7947 9.6661 13.7947 10.1991C13.7947 12.3181 11.8397 15.2581 10.4177 15.2581C9.0097 15.2581 7.0547 12.3181 7.0547 10.1991C7.0547 9.6521 7.2737 9.4201 7.7387 9.4201H7.8337C8.0527 9.6661 8.3807 9.8301 8.7367 9.8301C9.4067 9.8301 9.9397 9.2831 9.9397 8.6131C9.9397 7.9431 9.4067 7.4101 8.7367 7.4101C8.3807 7.4101 8.0527 7.5741 7.8207 7.8341H7.7797C6.2887 7.8341 5.4827 8.6681 5.4827 10.1991C5.4827 12.8791 7.6157 16.1331 9.6387 16.7341C9.7757 19.7691 10.9917 21.4781 13.0837 21.4781ZM20.5487 19.2641C20.0837 19.2641 19.7147 18.8811 19.7147 18.4161C19.7147 17.9511 20.0837 17.5821 20.5487 17.5821C21.0137 17.5821 21.3967 17.9511 21.3967 18.4161C21.3967 18.8811 21.0137 19.2641 20.5487 19.2641Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM12.8517 21.4644C14.8887 21.4644 16.0367 19.9334 16.6117 16.5564C16.9807 14.4374 17.4587 13.6584 18.3067 13.6584C19.1137 13.6584 19.5777 14.4234 19.7287 16.1874C18.8807 16.5154 18.2797 17.3494 18.2797 18.3204C18.2797 19.5914 19.2777 20.6034 20.5487 20.6034C21.8207 20.6034 22.8457 19.5784 22.8457 18.3204C22.8457 17.2954 22.1487 16.4334 21.2187 16.1464C20.9457 13.4534 20.0157 12.1684 18.3067 12.1684C16.5837 12.1684 15.6677 13.3574 15.1347 16.2424C14.6697 18.8674 14.1097 19.9614 12.7967 19.9614C11.6487 19.9614 10.9507 18.7574 10.8417 16.5844C12.9197 16.0094 15.1207 12.6324 15.1207 9.8574C15.1207 8.3124 14.3277 7.4784 12.8237 7.4784H12.7557C12.5367 7.1914 12.1957 7.0134 11.8257 7.0134C11.1567 7.0134 10.6227 7.5464 10.6227 8.2164C10.6227 8.8734 11.1567 9.4204 11.8257 9.4204C12.1817 9.4204 12.5237 9.2424 12.7417 8.9684H12.8787C13.3847 8.9684 13.6167 9.2554 13.6167 9.8574C13.6167 12.1134 11.6077 15.1624 10.1167 15.1624C8.6137 15.1624 6.6037 12.1134 6.6037 9.8574C6.6037 9.2424 6.8357 8.9684 7.3417 8.9684H7.4507C7.6837 9.2424 8.0117 9.4204 8.3947 9.4204C9.0507 9.4204 9.5837 8.8734 9.5837 8.2164C9.5837 7.5464 9.0507 7.0134 8.3947 7.0134C8.0117 7.0134 7.6697 7.1914 7.4507 7.4784H7.3967C5.9067 7.4784 5.0997 8.3124 5.0997 9.8574C5.0997 12.6324 7.2867 15.9964 9.3657 16.5704C9.4887 19.6734 10.7327 21.4644 12.8517 21.4644ZM20.5487 19.2504C20.0427 19.2504 19.6467 18.8264 19.6467 18.3204C19.6467 17.8004 20.0427 17.4044 20.5487 17.4044C21.0687 17.4044 21.4787 17.8004 21.4787 18.3204C21.4787 18.8264 21.0547 19.2504 20.5487 19.2504Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM13.2617 21.5059C15.2847 21.5059 16.4197 20.0569 16.9257 16.8849C17.2127 15.0119 17.6507 14.3009 18.4027 14.3009C19.1267 14.3009 19.5367 14.9569 19.6597 16.4339C18.8667 16.7759 18.3067 17.5679 18.3067 18.4849C18.3067 19.7289 19.3047 20.7269 20.5347 20.7269C21.7927 20.7269 22.7907 19.7289 22.7907 18.4849C22.7907 17.5139 22.1487 16.6929 21.2737 16.3789C21.0137 13.8629 20.0977 12.6739 18.4157 12.6739C16.7067 12.6739 15.7637 13.8359 15.3127 16.4879C14.9157 18.9079 14.3967 19.8649 13.2347 19.8649C12.2087 19.8649 11.5797 18.8259 11.4847 16.8579C13.4667 16.2419 15.5587 13.0839 15.5587 10.4729C15.5587 8.9419 14.7517 8.1079 13.2477 8.1079H13.2067C12.9747 7.8749 12.6597 7.7109 12.3187 7.7109C11.6487 7.7109 11.1017 8.2579 11.1017 8.9139C11.1017 9.5979 11.6487 10.1309 12.3187 10.1309C12.6597 10.1309 12.9747 9.9939 13.1937 9.7479H13.2887C13.7127 9.7479 13.9317 9.9809 13.9317 10.4589C13.9317 12.4829 12.0177 15.3399 10.6637 15.3399C9.3107 15.3399 7.4097 12.4829 7.4097 10.4589C7.4097 9.9809 7.6157 9.7479 8.0387 9.7479H8.1207C8.3397 9.9939 8.6547 10.1309 9.0097 10.1309C9.6797 10.1309 10.2127 9.5979 10.2127 8.9139C10.2127 8.2579 9.6797 7.7109 9.0097 7.7109C8.6547 7.7109 8.3397 7.8749 8.1077 8.1079H8.0797C6.5757 8.1079 5.7697 8.9419 5.7697 10.4729C5.7697 13.0839 7.8617 16.2419 9.8577 16.8579C9.9937 19.8379 11.1837 21.5059 13.2617 21.5059ZM20.5487 19.2639C20.1247 19.2639 19.7827 18.9079 19.7827 18.4849C19.7827 18.0609 20.1247 17.7049 20.5487 17.7049C20.9867 17.7049 21.3277 18.0609 21.3277 18.4849C21.3277 18.9079 20.9727 19.2639 20.5487 19.2639Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM12.4417 20.9592C14.6567 20.9592 15.6547 19.5642 16.1327 15.9002C16.4337 13.6442 17.0217 12.7012 18.1017 12.7012C19.0857 12.7012 19.6597 13.6582 19.8377 15.6812C18.7577 15.8872 17.9237 16.8442 17.9237 17.9782C17.9237 19.2912 18.9627 20.3302 20.2757 20.3302C21.6017 20.3302 22.6547 19.2912 22.6547 17.9782C22.6547 16.8302 21.8067 15.8732 20.6987 15.6812C20.4527 13.1112 19.6057 11.8532 18.1017 11.8532C16.5297 11.8532 15.7087 12.9742 15.2847 15.6682C14.8337 18.5942 14.4237 20.0972 12.4417 20.0972C10.8557 20.0972 10.0347 18.7582 9.9937 15.9962C12.1957 15.6682 14.6977 11.9632 14.6977 8.9282C14.6977 7.4242 14.0137 6.6992 12.5777 6.6992H12.3867C12.2367 6.4532 11.9487 6.2752 11.6347 6.2752C11.1837 6.2752 10.7867 6.6442 10.7867 7.1092C10.7867 7.5742 11.1837 7.9702 11.6347 7.9702C11.9357 7.9702 12.2087 7.8062 12.3597 7.5602H12.7417C13.4807 7.5602 13.8497 7.9842 13.8497 8.9142C13.8497 11.6762 11.4567 15.1622 9.5837 15.1622C7.7107 15.1622 5.3187 11.6622 5.3187 8.9142C5.3187 7.9842 5.6877 7.5602 6.4257 7.5602H6.7947C6.9457 7.8062 7.2187 7.9702 7.5197 7.9702C7.9977 7.9702 8.3667 7.5742 8.3667 7.1092C8.3667 6.6442 7.9977 6.2752 7.5197 6.2752C7.2047 6.2752 6.9317 6.4532 6.7817 6.6992H6.6037C5.1547 6.6992 4.4437 7.4372 4.4437 8.9282C4.4437 11.9352 6.9457 15.6542 9.1467 15.9962C9.2007 19.2772 10.3087 20.9592 12.4417 20.9592ZM20.2757 19.5102C19.4417 19.5102 18.7717 18.8262 18.7717 17.9782C18.7717 17.1442 19.4417 16.4612 20.2757 16.4612C21.1367 16.4612 21.8067 17.1442 21.8067 17.9782C21.8067 18.8262 21.1367 19.5102 20.2757 19.5102Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM12.3317 20.8081C14.5877 20.8081 15.5447 19.4411 15.9957 15.7091C16.2697 13.4121 16.8987 12.4141 18.0327 12.4141C19.0727 12.4141 19.6737 13.4391 19.8787 15.5451C18.7167 15.6951 17.8277 16.6931 17.8277 17.8691C17.8277 19.2091 18.8807 20.2481 20.2067 20.2481C21.5327 20.2481 22.5997 19.2091 22.5997 17.8691C22.5997 16.6801 21.7107 15.6951 20.5487 15.5451C20.3167 13.0021 19.4957 11.7441 18.0327 11.7441C16.5017 11.7441 15.7227 12.8511 15.3257 15.4901C14.8887 18.5121 14.5057 20.1391 12.3317 20.1391C10.6227 20.1391 9.7757 18.7441 9.7477 15.8181C11.9907 15.5581 14.5737 11.7581 14.5737 8.6401C14.5737 7.1641 13.9177 6.4671 12.5097 6.4671H12.2637C12.1407 6.2211 11.8807 6.0561 11.5797 6.0561C11.1837 6.0561 10.8417 6.3851 10.8417 6.7811C10.8417 7.1911 11.1837 7.5331 11.5797 7.5331C11.8667 7.5331 12.1267 7.3691 12.2497 7.1371H12.7007C13.5077 7.1371 13.9177 7.6151 13.9177 8.6271C13.9177 11.5391 11.4157 15.1621 9.4337 15.1621C7.4507 15.1621 4.9487 11.5251 4.9487 8.6271C4.9487 7.6151 5.3457 7.1371 6.1527 7.1371H6.6037C6.7407 7.3691 6.9867 7.5331 7.2737 7.5331C7.6837 7.5331 8.0117 7.1911 8.0117 6.7811C8.0117 6.3851 7.6837 6.0561 7.2737 6.0561C6.9727 6.0561 6.7127 6.2211 6.5897 6.4671H6.3707C4.9357 6.4671 4.2657 7.1781 4.2657 8.6401C4.2657 11.7301 6.8497 15.5581 9.0917 15.8181C9.1187 19.1401 10.1857 20.8081 12.3317 20.8081ZM20.2067 19.5781C19.2637 19.5781 18.5117 18.8261 18.5117 17.8691C18.5117 16.9391 19.2637 16.1871 20.2067 16.1871C21.1507 16.1871 21.9157 16.9391 21.9157 17.8691C21.9157 18.8261 21.1507 19.5781 20.2067 19.5781Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
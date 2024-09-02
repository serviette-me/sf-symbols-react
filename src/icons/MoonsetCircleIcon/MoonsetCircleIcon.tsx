import { IconProps } from "../../types"

export default function MoonsetCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8677 20.4941 4.8677 14.9301C4.8677 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM17.9237 7.1231C17.4457 7.1231 17.0217 7.5601 17.0217 8.0531V10.1721L17.0627 10.4451L17.1447 10.5821L16.7207 10.0761C16.5567 9.8571 16.3247 9.6521 15.9827 9.6521C15.5177 9.6521 15.1207 10.0491 15.1207 10.5001C15.1207 10.8141 15.3127 11.0601 15.5177 11.2661L17.2407 12.9061C17.4587 13.1111 17.6637 13.1931 17.9237 13.1931C18.1837 13.1931 18.3887 13.1111 18.6077 12.9061L20.3297 11.2661C20.5347 11.0601 20.7407 10.8141 20.7407 10.5001C20.7407 10.0491 20.3437 9.6521 19.8787 9.6521C19.5237 9.6521 19.3047 9.8571 19.1267 10.0761L18.7167 10.5681L18.7847 10.4451L18.8267 10.1721V8.0531C18.8267 7.5601 18.4157 7.1231 17.9237 7.1231ZM9.8577 17.5821H19.6737C19.7147 17.5141 19.7427 17.4591 19.7697 17.4041C19.9607 16.9531 19.9197 16.5291 19.7017 16.3241C19.4687 16.1051 19.0857 16.0921 18.7027 16.2561C18.3207 16.4471 17.7867 16.5291 17.2537 16.5291C14.9297 16.5291 13.4807 15.1481 13.4807 12.9201C13.4807 12.3591 13.5897 11.7711 13.8227 11.2381C13.9997 10.8011 13.9867 10.4731 13.7817 10.2401C13.5627 10.0081 13.2067 9.9671 12.7427 10.1581C10.7047 10.9651 9.3377 12.9881 9.3377 15.2171C9.3377 16.0511 9.5297 16.8711 9.8577 17.5821ZM8.9957 20.8631H20.8637C21.4927 20.8631 21.9567 20.3301 21.9567 19.7421C21.9567 19.1411 21.4927 18.6211 20.8637 18.6211H8.9957C8.3677 18.6211 7.9027 19.1541 7.9027 19.7421C7.9027 20.3161 8.3947 20.8631 8.9957 20.8631Z"
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
            d="              M14.4377 28.8886C22.3677 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM17.5687 6.4946C17.1307 6.4946 16.7757 6.8766 16.7757 7.3286V9.9126L16.8027 10.2676L16.8167 10.2946L16.1327 9.5976C15.9827 9.4196 15.7777 9.2836 15.5177 9.2836C15.1077 9.2836 14.7797 9.6116 14.7797 10.0076C14.7797 10.2536 14.9027 10.4586 15.0937 10.6366L16.9937 12.4276C17.1857 12.6056 17.3637 12.6876 17.5687 12.6876C17.7867 12.6876 17.9647 12.6056 18.1567 12.4276L20.0567 10.6366C20.2477 10.4456 20.3707 10.2536 20.3707 10.0076C20.3707 9.6116 20.0427 9.2836 19.6327 9.2836C19.3727 9.2836 19.1547 9.4196 19.0177 9.5976L18.3887 10.2676L18.3477 10.2946L18.3747 9.9126V7.3286C18.3747 6.8766 18.0197 6.4946 17.5687 6.4946ZM9.5707 17.6916H19.3457C19.4957 17.4996 19.6057 17.2946 19.7147 17.0626C19.8787 16.6936 19.8377 16.3516 19.6467 16.1606C19.4687 15.9826 19.1677 15.9546 18.8267 16.0916C18.3887 16.2966 17.8007 16.3926 17.1587 16.3926C14.4787 16.3926 12.7967 14.7656 12.7967 12.1676C12.7967 11.4976 12.9067 10.7736 13.1387 10.2946C13.3027 9.9396 13.2757 9.6526 13.1247 9.4476C12.9337 9.2426 12.6057 9.2016 12.2227 9.3656C10.1447 10.1996 8.7367 12.3186 8.7367 14.7106C8.7367 15.8186 9.0367 16.8436 9.5707 17.6916ZM7.8887 20.5356H20.9727C21.4787 20.5356 21.9027 20.1116 21.9027 19.6196C21.9027 19.1266 21.4927 18.7036 20.9727 18.7036H7.8887C7.3827 18.7036 6.9727 19.1266 6.9727 19.6196C6.9727 20.1116 7.3967 20.5356 7.8887 20.5356Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4087 22.7914 29.4087 14.7114C29.4087 6.6304 22.7777 0.0004 14.6977 0.0004C6.6177 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6177 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM17.7597 6.8364C17.2947 6.8364 16.9117 7.2464 16.9117 7.7114V10.0484L16.9397 10.3634L16.9937 10.4594L16.4477 9.8574C16.2837 9.6524 16.0647 9.4884 15.7637 9.4884C15.3267 9.4884 14.9567 9.8434 14.9567 10.2674C14.9567 10.5544 15.1207 10.7734 15.3127 10.9644L17.1307 12.6874C17.3357 12.8794 17.5277 12.9614 17.7597 12.9614C17.9927 12.9614 18.1837 12.8794 18.4027 12.6874L20.2067 10.9644C20.3987 10.7734 20.5627 10.5544 20.5627 10.2674C20.5627 9.8434 20.1937 9.4884 19.7557 9.4884C19.4547 9.4884 19.2227 9.6524 19.0727 9.8574L18.5667 10.4314L18.5797 10.3774L18.6077 10.0484V7.7114C18.6077 7.2464 18.2247 6.8364 17.7597 6.8364ZM9.7207 17.6504H19.5097C19.6187 17.5134 19.6877 17.3904 19.7427 17.2404C19.9197 16.8434 19.8787 16.4474 19.6737 16.2554C19.4687 16.0504 19.1267 16.0374 18.7577 16.1874C18.3477 16.3794 17.7867 16.4744 17.2127 16.4744C14.7247 16.4744 13.1527 14.9844 13.1527 12.5784C13.1527 11.9634 13.2757 11.3064 13.4937 10.8004C13.6717 10.4044 13.6587 10.0894 13.4667 9.8714C13.2617 9.6524 12.9197 9.6114 12.4957 9.7894C10.4457 10.6094 9.0507 12.6734 9.0507 14.9844C9.0507 15.9414 9.2967 16.8574 9.7207 17.6504ZM8.4767 20.7134H20.9177C21.4927 20.7134 21.9297 20.2344 21.9297 19.6874C21.9297 19.1404 21.4927 18.6624 20.9177 18.6624H8.4767C7.9027 18.6624 7.4647 19.1544 7.4647 19.6874C7.4647 20.2344 7.9157 20.7134 8.4767 20.7134Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6997 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6997 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM17.0077 5.51C16.6657 5.51 16.4067 5.797 16.4067 6.125V9.365L16.4477 9.967L16.2147 9.734L15.1897 8.709C15.0797 8.613 14.9297 8.531 14.7797 8.531C14.4647 8.531 14.2327 8.764 14.2327 9.051C14.2327 9.201 14.2867 9.352 14.4517 9.502L16.6117 11.566C16.7347 11.676 16.8577 11.744 17.0077 11.744C17.1447 11.744 17.2817 11.676 17.4047 11.566L19.5647 9.502C19.7287 9.338 19.7697 9.201 19.7697 9.051C19.7697 8.764 19.5367 8.531 19.2367 8.531C19.0997 8.531 18.9217 8.586 18.8267 8.695L17.8557 9.693L17.5547 9.994L17.5957 9.365V6.125C17.5957 5.797 17.3357 5.51 17.0077 5.51ZM9.1877 17.842H18.6757C19.0317 17.459 19.3187 17.008 19.5367 16.516C19.6597 16.256 19.6327 16.023 19.4957 15.873C19.3727 15.764 19.1677 15.736 18.9217 15.832C18.3747 16.051 17.7187 16.174 16.9117 16.174C13.6587 16.174 11.6347 14.178 11.6347 10.965C11.6347 10.145 11.7717 9.324 12.0317 8.805C12.1547 8.559 12.1267 8.34 12.0177 8.176C11.8807 8.012 11.6077 7.984 11.3337 8.135C9.2287 9.078 7.7927 11.266 7.7927 13.877C7.7927 15.422 8.2987 16.789 9.1877 17.842ZM6.1937 19.906H21.2187C21.5467 19.906 21.8337 19.66 21.8337 19.332C21.8337 19.004 21.5607 18.744 21.2187 18.744H6.1937C5.8657 18.744 5.5777 19.004 5.5777 19.332C5.5777 19.66 5.8657 19.906 6.1937 19.906Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM17.3497 6.0701C16.9257 6.0701 16.6117 6.4391 16.6117 6.8631V9.7211L16.6387 10.1581L16.5977 10.1171L15.7637 9.2831C15.6137 9.1331 15.4217 9.0371 15.2307 9.0371C14.8477 9.0371 14.5607 9.3241 14.5607 9.6931C14.5607 9.8851 14.6427 10.0621 14.8207 10.2261L16.8297 12.1131C17.0077 12.2771 17.1587 12.3591 17.3497 12.3591C17.5277 12.3591 17.6917 12.2771 17.8557 12.1131L19.8787 10.2261C20.0567 10.0621 20.1387 9.8851 20.1387 9.6931C20.1387 9.3241 19.8517 9.0371 19.4687 9.0371C19.2777 9.0371 19.0587 9.1331 18.9357 9.2691L18.1837 10.0761L18.0607 10.1851L18.0877 9.7211V6.8631C18.0877 6.4391 17.7597 6.0701 17.3497 6.0701ZM9.3927 17.7601H19.1407C19.3597 17.4861 19.5237 17.1721 19.6737 16.8301C19.8247 16.5151 19.7837 16.2281 19.6057 16.0371C19.4547 15.9001 19.2087 15.8731 18.9087 15.9821C18.4157 16.2011 17.8007 16.2971 17.1037 16.2971C14.1917 16.2971 12.3457 14.5061 12.3457 11.6761C12.3457 10.9371 12.4687 10.1441 12.7017 9.6801C12.8517 9.3791 12.8247 9.1051 12.6877 8.9281C12.5367 8.7361 12.2227 8.6951 11.8807 8.8461C9.7757 9.7071 8.3537 11.8811 8.3537 14.3831C8.3537 15.6541 8.7227 16.8161 9.3927 17.7601ZM7.1777 20.3161H21.0407C21.4787 20.3161 21.8617 19.9741 21.8617 19.5371C21.8617 19.0991 21.4927 18.7581 21.0407 18.7581H7.1777C6.7407 18.7581 6.3707 19.0991 6.3707 19.5371C6.3707 19.9611 6.7537 20.3161 7.1777 20.3161Z"
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
            d="              M13.9457 27.8904C21.5747 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4927 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM17.2267 5.8374C16.8167 5.8374 16.5157 6.1794 16.5157 6.5894V9.6254L16.5427 10.0894L16.4747 10.0074L15.5447 9.1054C15.4087 8.9824 15.2307 8.9004 15.0667 8.9004C14.7107 8.9004 14.4377 9.1604 14.4377 9.5024C14.4377 9.6794 14.4927 9.8434 14.6567 9.9944L16.7477 11.9354C16.9117 12.0864 17.0487 12.1684 17.2267 12.1684C17.3907 12.1684 17.5407 12.0864 17.6917 11.9354L19.7837 9.9944C19.9477 9.8304 20.0017 9.6794 20.0017 9.5024C20.0017 9.1604 19.7427 8.9004 19.3727 8.9004C19.2227 8.9004 19.0037 8.9684 18.8947 9.0914L18.0607 9.9534L17.8967 10.1304L17.9237 9.6254V6.5894C17.9237 6.1794 17.6227 5.8374 17.2267 5.8374ZM9.2837 17.8004H19.0177C19.2907 17.4724 19.4827 17.1034 19.6597 16.7074C19.7837 16.4064 19.7557 16.1604 19.5917 15.9684C19.4547 15.8594 19.2367 15.8184 18.9627 15.9274C18.4437 16.1324 17.8007 16.2424 17.0627 16.2424C14.0277 16.2424 12.0997 14.3694 12.0997 11.4024C12.0997 10.6234 12.2227 9.7754 12.4547 9.3374C12.6057 9.0644 12.5777 8.8044 12.4547 8.6274C12.3047 8.4494 12.0177 8.4084 11.6897 8.5584C9.5707 9.4204 8.1347 11.6344 8.1347 14.1914C8.1347 15.5724 8.5587 16.8024 9.2837 17.8004ZM6.7817 20.1934H21.0817C21.4787 20.1934 21.8337 19.8784 21.8337 19.4824C21.8337 19.0864 21.4927 18.7854 21.0817 18.7854H6.7817C6.3847 18.7854 6.0297 19.0864 6.0297 19.4824C6.0297 19.8784 6.3987 20.1934 6.7817 20.1934Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM17.4457 6.2479C17.0217 6.2479 16.6797 6.6309 16.6797 7.0679V9.8029L16.7067 10.2129L16.6937 10.1989L15.9277 9.4199C15.7777 9.2699 15.5727 9.1469 15.3537 9.1469C14.9567 9.1469 14.6567 9.4469 14.6567 9.8299C14.6567 10.0489 14.7517 10.2269 14.9297 10.4039L16.8987 12.2499C17.0897 12.4139 17.2537 12.4959 17.4457 12.4959C17.6367 12.4959 17.8007 12.4139 17.9927 12.2499L19.9607 10.4039C20.1387 10.2269 20.2347 10.0489 20.2347 9.8299C20.2347 9.4469 19.9337 9.1469 19.5367 9.1469C19.3187 9.1469 19.0997 9.2559 18.9627 9.4059L18.2797 10.1579L18.1837 10.2399L18.2107 9.8029V7.0679C18.2107 6.6309 17.8687 6.2479 17.4457 6.2479ZM9.4607 17.7329H19.2227C19.4277 17.4859 19.5647 17.2269 19.6877 16.9399C19.8377 16.5839 19.8107 16.2829 19.6187 16.0919C19.4547 15.9419 19.1957 15.9139 18.8807 16.0369C18.4027 16.2419 17.8007 16.3379 17.1307 16.3379C14.3147 16.3379 12.5367 14.6149 12.5367 11.8949C12.5367 11.1839 12.6597 10.4179 12.8927 9.9529C13.0427 9.6249 13.0157 9.3379 12.8787 9.1469C12.7017 8.9549 12.3867 8.9139 12.0317 9.0649C9.9397 9.9119 8.5177 12.0719 8.5177 14.5199C8.5177 15.7229 8.8597 16.8299 9.4607 17.7329ZM7.4927 20.4119H21.0137C21.4787 20.4119 21.8747 20.0289 21.8747 19.5779C21.8747 19.1129 21.4927 18.7309 21.0137 18.7309H7.4927C7.0137 18.7309 6.6307 19.1129 6.6307 19.5779C6.6307 20.0289 7.0277 20.4119 7.4927 20.4119Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5767 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5767 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM16.7207 5.0722C16.4607 5.0722 16.2697 5.2772 16.2697 5.5102V9.0102L16.3107 9.8162L15.8867 9.3792L14.7107 8.2032C14.6287 8.1212 14.5197 8.0532 14.3827 8.0532C14.1507 8.0532 13.9727 8.2302 13.9727 8.4632C13.9727 8.5862 14.0137 8.7092 14.1637 8.8452L16.4197 11.0742C16.5017 11.1422 16.6117 11.1832 16.7207 11.1832C16.8167 11.1832 16.9397 11.1422 17.0077 11.0742L19.2637 8.8452C19.4277 8.6952 19.4687 8.5862 19.4687 8.4632C19.4687 8.2302 19.2777 8.0532 19.0447 8.0532C18.9357 8.0532 18.8127 8.0942 18.7307 8.1762L17.5817 9.3652L17.1177 9.8302L17.1587 9.0102V5.5102C17.1587 5.2772 16.9667 5.0722 16.7207 5.0722ZM9.0507 17.8962H18.2107C18.6897 17.4452 19.0857 16.8852 19.3727 16.2562C19.4827 16.0512 19.4687 15.8592 19.3597 15.7502C19.2637 15.6542 19.0997 15.6272 18.8807 15.7092C18.2797 15.9412 17.6097 16.0782 16.7067 16.0782C13.1657 16.0782 11.0197 13.9452 11.0197 10.3772C11.0197 9.5152 11.1697 8.7222 11.4707 8.1212C11.5667 7.9022 11.5527 7.7112 11.4437 7.5742C11.3067 7.4512 11.0877 7.4372 10.8557 7.5742C8.7637 8.6402 7.3557 10.7872 7.3557 13.4672C7.3557 15.2442 7.9567 16.7892 9.0507 17.8962ZM5.4137 19.5512H21.3967C21.6427 19.5512 21.8337 19.3732 21.8337 19.1402C21.8337 18.8812 21.6427 18.7172 21.3967 18.7172H5.4137C5.1817 18.7172 4.9767 18.9082 4.9767 19.1402C4.9767 19.3732 5.1817 19.5512 5.4137 19.5512Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8267 6.3031 25.8267 13.2481C25.8267 20.1801 20.1937 25.8261 13.2477 25.8261ZM16.5707 4.8531C16.3657 4.8531 16.2017 5.0041 16.2017 5.1811V8.8321L16.2427 9.7211L15.7087 9.1741L14.4647 7.9301C14.3967 7.8611 14.3147 7.7931 14.1917 7.7931C13.9867 7.7931 13.8227 7.9431 13.8227 8.1621C13.8227 8.2581 13.8767 8.3671 14.0137 8.5041L16.3247 10.8141C16.3787 10.8691 16.4747 10.8961 16.5707 10.8961C16.6527 10.8961 16.7617 10.8691 16.8027 10.8141L19.1137 8.5041C19.2777 8.3401 19.3047 8.2581 19.3047 8.1621C19.3047 7.9431 19.1547 7.7931 18.9497 7.7931C18.8537 7.7931 18.7577 7.8341 18.6897 7.9021L17.4457 9.1741L16.8987 9.7211L16.9257 8.8321V5.1811C16.9257 5.0041 16.7757 4.8531 16.5707 4.8531ZM8.9827 17.9241H17.9787C18.5257 17.4311 18.9767 16.8161 19.2907 16.1051C19.4007 15.9411 19.3867 15.7641 19.2907 15.6811C19.2087 15.5861 19.0587 15.5581 18.8677 15.6401C18.2387 15.8731 17.5547 16.0231 16.6117 16.0231C12.9067 16.0231 10.7047 13.8081 10.7047 10.0761C10.7047 9.1871 10.8687 8.3941 11.1837 7.7521C11.2657 7.5601 11.2517 7.3831 11.1427 7.2601C11.0197 7.1501 10.8147 7.1501 10.6097 7.2871C8.5317 8.4081 7.1227 10.5271 7.1227 13.2481C7.1227 15.1351 7.7927 16.7891 8.9827 17.9241ZM5.0177 19.3461H21.4927C21.6977 19.3461 21.8337 19.2091 21.8337 19.0311C21.8337 18.8261 21.6977 18.6891 21.4927 18.6891H5.0177C4.8267 18.6891 4.6757 18.8401 4.6757 19.0311C4.6757 19.2091 4.8267 19.3461 5.0177 19.3461Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
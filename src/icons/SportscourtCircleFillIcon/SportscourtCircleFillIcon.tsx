import { IconProps } from "../../types"

export default function SportscourtCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM8.5857 20.5901C7.2457 20.5901 6.5757 19.9201 6.5757 18.6071V18.1151H8.3127C9.2147 18.1151 9.7757 17.5411 9.7757 16.6391V13.2341C9.7757 12.3051 9.2147 11.7301 8.3127 11.7301H6.5757V11.2521C6.5757 9.9391 7.2457 9.2831 8.5857 9.2831H14.2327V11.6481C12.7007 11.9491 11.5527 13.3161 11.5527 14.9301C11.5527 16.5571 12.7007 17.9241 14.2327 18.2241V20.5901ZM15.5997 20.5901V18.2241C17.1307 17.9241 18.2927 16.5571 18.2927 14.9301C18.2927 13.3161 17.1307 11.9491 15.5997 11.6481V9.2831H21.2597C22.5857 9.2831 23.2557 9.9391 23.2557 11.2521V11.7301H21.5197C20.6167 11.7301 20.0567 12.3051 20.0567 13.2341V16.6391C20.0567 17.5411 20.6167 18.1151 21.5197 18.1151H23.2557V18.6071C23.2557 19.9201 22.5857 20.5901 21.2597 20.5901ZM14.2327 16.8301C13.4667 16.5571 12.9337 15.8461 12.9337 14.9301C12.9337 14.0411 13.4667 13.3301 14.2327 13.0431ZM15.5997 16.8301V13.0431C16.3787 13.3301 16.8987 14.0411 16.8987 14.9301C16.8987 15.8461 16.3787 16.5571 15.5997 16.8301ZM6.5757 16.7341V13.1111H8.2437C8.3397 13.1111 8.4077 13.1661 8.4077 13.2621V16.5841C8.4077 16.6661 8.3397 16.7341 8.2437 16.7341ZM23.2557 16.7341H21.5877C21.4917 16.7341 21.4237 16.6661 21.4237 16.5841V13.2621C21.4237 13.1661 21.4917 13.1111 21.5877 13.1111H23.2557Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM7.9157 20.2476C6.5757 20.2476 5.8927 19.5786 5.8927 18.2656V17.6366H7.7107C8.5727 17.6366 9.1187 17.0896 9.1187 16.2146V12.7016C9.1187 11.7986 8.5727 11.2516 7.7107 11.2516H5.8927V10.6366C5.8927 9.3246 6.5757 8.6546 7.9157 8.6546H13.8227V11.1696C12.2497 11.4296 11.0607 12.8106 11.0607 14.4516C11.0607 16.1056 12.2497 17.4996 13.8227 17.7596V20.2476ZM15.0117 20.2476V17.7596C16.5837 17.4996 17.7737 16.1056 17.7737 14.4516C17.7737 12.8106 16.5837 11.4296 15.0117 11.1696V8.6546H20.9457C22.2717 8.6546 22.9547 9.3246 22.9547 10.6366V11.2516H21.1507C20.2757 11.2516 19.7287 11.7986 19.7287 12.7016V16.2146C19.7287 17.0896 20.2757 17.6366 21.1507 17.6366H22.9547V18.2656C22.9547 19.5786 22.2717 20.2476 20.9457 20.2476ZM13.8227 16.5566C12.9067 16.3106 12.2497 15.4906 12.2497 14.4516C12.2497 13.4396 12.9067 12.6196 13.8227 12.3726ZM15.0117 16.5566V12.3726C15.9277 12.6196 16.5837 13.4396 16.5837 14.4516C16.5837 15.4906 15.9277 16.3106 15.0117 16.5566ZM5.8927 16.4476V12.4416H7.6427C7.8207 12.4416 7.9297 12.5506 7.9297 12.7286V16.1606C7.9297 16.3376 7.8207 16.4476 7.6427 16.4476ZM22.9547 16.4476H21.2047C21.0277 16.4476 20.9177 16.3376 20.9177 16.1606V12.7286C20.9177 12.5506 21.0277 12.4416 21.2047 12.4416H22.9547Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM8.2717 20.4394C6.9317 20.4394 6.2617 19.7694 6.2617 18.4434V17.8964H8.0257C8.9137 17.8964 9.4747 17.3364 9.4747 16.4474V12.9884C9.4747 12.0724 8.9137 11.5114 8.0257 11.5114H6.2617V10.9644C6.2617 9.6664 6.9317 8.9964 8.2717 8.9964H14.0407V11.4294C12.4957 11.7164 11.3207 13.0844 11.3207 14.7114C11.3207 16.3514 12.4957 17.7324 14.0407 18.0054V20.4394ZM15.3257 20.4394V18.0054C16.8707 17.7324 18.0467 16.3514 18.0467 14.7114C18.0467 13.0844 16.8707 11.7164 15.3257 11.4294V8.9964H21.1097C22.4357 8.9964 23.1187 9.6664 23.1187 10.9644V11.5114H21.3417C20.4527 11.5114 19.9067 12.0724 19.9067 12.9884V16.4474C19.9067 17.3364 20.4527 17.8964 21.3417 17.8964H23.1187V18.4434C23.1187 19.7694 22.4357 20.4394 21.1097 20.4394ZM14.0407 16.7074C13.1937 16.4474 12.6187 15.6814 12.6187 14.7114C12.6187 13.7674 13.1937 13.0024 14.0407 12.7424ZM15.3257 16.7074V12.7424C16.1597 13.0024 16.7477 13.7674 16.7477 14.7114C16.7477 15.6814 16.1597 16.4474 15.3257 16.7074ZM6.2617 16.6114V12.7974H7.9567C8.0937 12.7974 8.1757 12.8794 8.1757 13.0154V16.3924C8.1757 16.5154 8.0937 16.6114 7.9567 16.6114ZM23.1187 16.6114H21.4097C21.2737 16.6114 21.1917 16.5154 21.1917 16.3924V13.0154C21.1917 12.8794 21.2737 12.7974 21.4097 12.7974H23.1187Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM7.0687 19.605C5.8107 19.605 5.1547 18.963 5.1547 17.719V16.912H7.0817C7.9027 16.912 8.4627 16.379 8.4627 15.531V11.936C8.4627 11.088 7.9027 10.555 7.0817 10.555H5.1547V9.762C5.1547 8.504 5.8107 7.875 7.0687 7.875H13.2207V10.486C11.6207 10.705 10.3907 12.072 10.3907 13.74C10.3907 15.408 11.6207 16.789 13.2207 17.008V19.605ZM14.1097 19.605V17.008C15.7227 16.789 16.9527 15.408 16.9527 13.74C16.9527 12.072 15.7227 10.705 14.1097 10.486V7.875H20.3437C21.6017 7.875 22.2577 8.518 22.2577 9.762V10.555H20.3297C19.5097 10.555 18.9487 11.088 18.9487 11.936V15.531C18.9487 16.379 19.5097 16.912 20.3297 16.912H22.2577V17.719C22.2577 18.963 21.6017 19.605 20.3437 19.605ZM13.2207 16.092C12.0857 15.9 11.2797 14.957 11.2797 13.74C11.2797 12.523 12.0857 11.594 13.2207 11.389ZM14.1097 16.092V11.389C15.2577 11.594 16.0507 12.523 16.0507 13.74C16.0507 14.971 15.2577 15.9 14.1097 16.092ZM5.1547 16.023V11.443H7.0407C7.3557 11.443 7.5467 11.648 7.5467 11.963V15.504C7.5467 15.832 7.3557 16.023 7.0407 16.023ZM22.2577 16.023H20.3707C20.0567 16.023 19.8657 15.832 19.8657 15.504V11.963C19.8657 11.648 20.0567 11.443 20.3707 11.443H22.2577Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM7.4787 20.0291C6.1387 20.0291 5.4547 19.3591 5.4547 18.0331V17.3221H7.3147C8.1617 17.3221 8.7087 16.8031 8.7087 15.9281V12.3591C8.7087 11.4711 8.1617 10.9371 7.3147 10.9371H5.4547V10.2541C5.4547 8.9281 6.1387 8.2581 7.4787 8.2581H13.5627V10.8421C11.9627 11.0881 10.7457 12.4821 10.7457 14.1371C10.7457 15.8181 11.9627 17.2131 13.5627 17.4451V20.0291ZM14.6287 20.0291V17.4451C16.2287 17.2131 17.4457 15.8181 17.4457 14.1371C17.4457 12.4821 16.2287 11.0881 14.6287 10.8421V8.2581H20.7407C22.0797 8.2581 22.7637 8.9281 22.7637 10.2541V10.9371H20.9047C20.0567 10.9371 19.5097 11.4711 19.5097 12.3591V15.9281C19.5097 16.8031 20.0567 17.3221 20.9047 17.3221H22.7637V18.0331C22.7637 19.3591 22.0797 20.0291 20.7407 20.0291ZM13.5627 16.3651C12.5507 16.1331 11.8257 15.2581 11.8257 14.1371C11.8257 13.0431 12.5507 12.1681 13.5627 11.9351ZM14.6287 16.3651V11.9351C15.6407 12.1681 16.3657 13.0431 16.3657 14.1371C16.3657 15.2581 15.6407 16.1331 14.6287 16.3651ZM5.4547 16.2561V12.0041H7.2597C7.4787 12.0041 7.6287 12.1541 7.6287 12.3871V15.8871C7.6287 16.1191 7.4787 16.2561 7.2597 16.2561ZM22.7637 16.2561H20.9587C20.7407 16.2561 20.5897 16.1191 20.5897 15.8871V12.3871C20.5897 12.1541 20.7407 12.0041 20.9587 12.0041H22.7637Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM7.2457 19.9064C5.8927 19.9064 5.2087 19.2364 5.2087 17.9104V17.1444H7.0957C7.9297 17.1444 8.4767 16.6254 8.4767 15.7774V12.1544C8.4767 11.2934 7.9297 10.7594 7.0957 10.7594H5.2087V10.0214C5.2087 8.6954 5.8927 8.0254 7.2457 8.0254H13.4117V10.6644C11.7987 10.8964 10.5817 12.2914 10.5817 13.9594C10.5817 15.6544 11.7987 17.0484 13.4117 17.2814V19.9064ZM14.4097 19.9064V17.2814C16.0367 17.0484 17.2537 15.6544 17.2537 13.9594C17.2537 12.2914 16.0367 10.8964 14.4097 10.6644V8.0254H20.6167C21.9707 8.0254 22.6547 8.6954 22.6547 10.0214V10.7594H20.7677C19.9337 10.7594 19.4007 11.2934 19.4007 12.1544V15.7774C19.4007 16.6254 19.9337 17.1444 20.7677 17.1444H22.6547V17.9104C22.6547 19.2364 21.9707 19.9064 20.6167 19.9064ZM13.4117 16.2694C12.3457 16.0374 11.5797 15.1214 11.5797 13.9594C11.5797 12.8244 12.3457 11.9084 13.4117 11.6754ZM14.4097 16.2694V11.6754C15.4907 11.9084 16.2557 12.8244 16.2557 13.9594C16.2557 15.1214 15.4907 16.0374 14.4097 16.2694ZM5.2087 16.1464V11.7574H7.0407C7.3007 11.7574 7.4647 11.9354 7.4647 12.1814V15.7224C7.4647 15.9964 7.3007 16.1464 7.0407 16.1464ZM22.6547 16.1464H20.8227C20.5757 16.1464 20.4117 15.9964 20.4117 15.7224V12.1814C20.4117 11.9354 20.5757 11.7574 20.8227 11.7574H22.6547Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM7.6697 20.1249C6.3297 20.1249 5.6467 19.4549 5.6467 18.1289V17.4589H7.4787C8.3397 17.4589 8.8867 16.9259 8.8867 16.0509V12.5099C8.8867 11.6209 8.3397 11.0739 7.4787 11.0739H5.6467V10.4179C5.6467 9.0919 6.3297 8.4219 7.6697 8.4219H13.6717V10.9919C12.0857 11.2379 10.8827 12.6329 10.8827 14.2739C10.8827 15.9419 12.0857 17.3359 13.6717 17.5819V20.1249ZM14.7927 20.1249V17.5819C16.3787 17.3359 17.5817 15.9419 17.5817 14.2739C17.5817 12.6329 16.3787 11.2379 14.7927 10.9919V8.4219H20.8227C22.1617 8.4219 22.8457 9.1059 22.8457 10.4179V11.0739H21.0137C20.1527 11.0739 19.6057 11.6209 19.6057 12.5099V16.0509C19.6057 16.9259 20.1527 17.4589 21.0137 17.4589H22.8457V18.1289C22.8457 19.4549 22.1617 20.1249 20.8227 20.1249ZM13.6717 16.4469C12.7007 16.2149 12.0037 15.3539 12.0037 14.2739C12.0037 13.2209 12.7007 12.3599 13.6717 12.1269ZM14.7927 16.4469V12.1269C15.7637 12.3599 16.4607 13.2209 16.4607 14.2739C16.4607 15.3539 15.7637 16.2149 14.7927 16.4469ZM5.6467 16.3379V12.1949H7.4237C7.6287 12.1949 7.7657 12.3319 7.7657 12.5369V16.0099C7.7657 16.2149 7.6287 16.3379 7.4237 16.3379ZM22.8457 16.3379H21.0687C20.8637 16.3379 20.7267 16.2149 20.7267 16.0099V12.5369C20.7267 12.3319 20.8637 12.1949 21.0687 12.1949H22.8457Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM6.8497 19.2092C5.6877 19.2092 5.0727 18.6212 5.0727 17.4722V16.6112H7.0687C7.8747 16.6112 8.4357 16.0372 8.4357 15.2302V11.6622C8.4357 10.8422 7.8747 10.2812 7.0687 10.2812H5.0727V9.4202C5.0727 8.2712 5.6877 7.6702 6.8497 7.6702H12.9477V10.2542C11.3747 10.4452 10.1307 11.7992 10.1307 13.4392C10.1307 15.1072 11.3747 16.4612 12.9477 16.6522V19.2092ZM13.7127 19.2092V16.6522C15.3257 16.4612 16.5427 15.1072 16.5427 13.4392C16.5427 11.7992 15.3257 10.4452 13.7127 10.2542V7.6702H19.9607C21.1227 7.6702 21.7247 8.2852 21.7247 9.4202V10.2812H19.7417C18.9357 10.2812 18.3747 10.8422 18.3747 11.6622V15.2302C18.3747 16.0372 18.9357 16.6112 19.7417 16.6112H21.7247V17.4722C21.7247 18.6072 21.1227 19.2092 19.9607 19.2092ZM12.9477 15.8872C11.7307 15.7222 10.8967 14.7652 10.8967 13.4392C10.8967 12.1272 11.7307 11.1702 12.9477 11.0192ZM13.7127 15.8872V11.0192C14.9567 11.1702 15.7777 12.1272 15.7777 13.4392C15.7777 14.7792 14.9567 15.7222 13.7127 15.8872ZM5.0727 15.8452V11.0332H7.0547C7.4507 11.0332 7.6697 11.2792 7.6697 11.6762V15.2032C7.6697 15.5992 7.4507 15.8452 7.0547 15.8452ZM21.7247 15.8452H19.7557C19.3597 15.8452 19.1407 15.5992 19.1407 15.2032V11.6762C19.1407 11.2792 19.3597 11.0332 19.7557 11.0332H21.7247Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM6.7267 19.0041C5.6327 19.0041 5.0447 18.4301 5.0447 17.3361V16.4331H7.0687C7.8477 16.4331 8.4357 15.8591 8.4357 15.0661V11.4981C8.4357 10.7051 7.8477 10.1171 7.0687 10.1171H5.0447V9.2281C5.0447 8.1351 5.6327 7.5601 6.7267 7.5601H12.8107V10.1311C11.2517 10.2951 10.0077 11.6351 10.0077 13.2751C10.0077 14.9431 11.2517 16.2831 12.8107 16.4611V19.0041ZM13.5077 19.0041V16.4611C15.1077 16.2831 16.3377 14.9431 16.3377 13.2751C16.3377 11.6351 15.1077 10.2951 13.5077 10.1311V7.5601H19.7697C20.8637 7.5601 21.4647 8.1481 21.4647 9.2281V10.1171H19.4277C18.6487 10.1171 18.0737 10.7051 18.0737 11.4981V15.0661C18.0737 15.8591 18.6487 16.4331 19.4277 16.4331H21.4647V17.3361C21.4647 18.4161 20.8637 19.0041 19.7697 19.0041ZM5.0447 15.7501V10.8141H7.0547C7.4917 10.8141 7.7387 11.0741 7.7387 11.5251V15.0391C7.7387 15.4761 7.4917 15.7501 7.0547 15.7501ZM21.4647 15.7501H19.4547C19.0177 15.7501 18.7717 15.4761 18.7717 15.0391V11.5251C18.7717 11.0741 19.0177 10.8141 19.4547 10.8141H21.4647ZM12.8107 15.7641C11.5527 15.6271 10.7047 14.6421 10.7047 13.2751C10.7047 11.9221 11.5527 10.9511 12.8107 10.8141ZM13.5077 15.7641V10.8141C14.8067 10.9511 15.6407 11.9221 15.6407 13.2751C15.6407 14.6701 14.8067 15.6271 13.5077 15.7641Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
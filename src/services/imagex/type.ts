export interface AIProcessBody {
  /**
   * 服务 ID。
   * * 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * 服务 ID。
   * * 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "91**2g"
   */
  ServiceId: string;
  /**
   * AI 图像处理模板参数，需要将 JSON 压缩并转义为字符串。根据您需要的图像处理功能，参看 [AI 图像处理模板](https://www.volcengine.com/docs/508/1515840)页面获取模板 ID 和参数信息。
   * 工作流模板参数。
   * * 您可以在 [AI图像处理工作流](TODO)页面查看所有支持的工作流ID及参数信息。
   * @example "{\"Input\":{\"ObjectKey\":\"example.webp\",\"DataType\":\"uri\"},\"GenDREnhanceParam\":{\"Multiple\":1.2}}"
   */
  WorkflowParameter: string;
  /**
   * AI 图像处理模板 ID。根据您需要的图像处理功能，参看 [AI 图像处理模板](https://www.volcengine.com/docs/508/1515840)页面获取模板 ID 和参数信息。
   * 工作流模板 ID。
   * * 您可以在 [AI图像处理工作流](TODO)页面查看所有支持的工作流ID及参数信息。
   * @example "system_workflow_ai_super_resolution"
   */
  WorkflowTemplateId: string;
}

export interface AIProcessRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * AI 图像处理结果，是 JSON 压缩并转义后的字符串。参看 [AI 图像处理模板](https://www.volcengine.com/docs/508/1515840)页面获取模板 ID 和参数信息，根据具体的工作流的说明进行解析。
     * AI图像处理结果，是JSON序列化后的字符串。
     * * 您可以在 [AI图像处理工作流](TODO)页面查看所有支持的工作流ID及参数信息，根据具体工作流的说明进行解析。
     * @example "{\"ObjectKey\":\"veImageX-store/ai_super_resolution/67***\/example.webp\",\"Size\":54509,\"Format\":\"webp\"}"
     */
    Output: string;
  };
}

export interface AddDomainV1Body {
  /**
   * 访问控制配置。
   * @example "-"
   */
  access_control?: {
    /**
     * Referer 配置。
     * @example "-"
     */
    refer_link?: {
      /**
       * 是否允许空 Referer，取值如下所示：
       * - `true`：允许空 Referer
       * - `false`：不允许空 Referer
       * @example "false"
       */
      allow_empty_refer?: boolean;
      /**
       * 是否开启 Referer 防盗链，取值如下所示：
       * * `true`：开启
       * * `false`：关闭
       * @example "true"
       */
      enabled: boolean;
      /**
       * 是否配置白名单，取值如下所示：
       *
       * - `true`：配置白名单
       * - `false`：配置黑名单
       * @example "true"
       */
      is_white_mode?: boolean;
      /**
       * 根据是否为白名单，为对应的白/黑名单的值。
       * @example "["s.com", "y.com", "q.com"]"
       */
      values?: string[];
    }[];
  }[];
  /**
   * 新增域名。
   * @example "test456.volcimagextest.com"
   */
  domain: string;
  /**
   * 证书配置，海外加速或者全球加速为必选，否则审核不通过。
   * @example "-"
   */
  https?: {
    /**
     * 证书 ID，若`enable_https`为`true`，则为必选。
     * @example "cert-bce71503813******84072a423610471"
     */
    cert_id?: string;
    /**
     * 是否开启 Https，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_https?: boolean;
    /**
     * 是否强制使用 Https，取值如下所示：
     * - `true`：强制
     * - `false`：不强制
     * @example "false"
     */
    force_https?: boolean;
  }[];
  /**
   * 请求需要添加的响应头。
   * @example "-"
   */
  resp_hdrs?: {
    /**
     * Header Key，请见[支持配置的响应头](https://www.volcengine.com/docs/508/196704#%E6%94%AF%E6%8C%81%E9%85%8D%E7%BD%AE%E7%9A%84%E5%93%8D%E5%BA%94%E5%A4%B4)。
     * @example "Access-Control-Allow-Origin"
     */
    key: string;
    /**
     * Header Value，设置该响应头字段的值。字段值不能超过 1,024 个字符，可以包含除美元符号（$），Delete（ASCII code 127）外的可打印 ASCII 字符。
     * @example "*"
     */
    value?: string;
  }[];
}

export interface AddDomainV1Query {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "qhc**nuslz"
   */
  ServiceId: string;
}

export interface AddDomainV1Res {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "AddDomainV1"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** @example "ok" */
  Result?: {
    /**
     * 新增的域名。
     * @example "test456.volcimagextest.com"
     */
    Domain?: string;
  };
}

/** title */
export interface AddImageBackgroundColorsBody {
  /**
   * 待添加的颜色列表
   * @example "["#EE5C3D","#E55D8F","#bddcbe","#00000000","#C9CDD4","#FFA841"]"
   */
  Colors: string[];
}

export interface AddImageBackgroundColorsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "AddImageBackgroundColors"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071513305401021204519717A8DFCF"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 添加失败的颜色列表。若全部添加失败，则接口将返回失败。
     * 若全部添加失败，则接口将返回失败
     * @example "["#EE5C3D","#E55D8F","#bddcbe","#00000000","#C9CDD4","#FFA841"]"
     */
    FailedList: string[];
  };
}

/**
 * 要素类型，取值如下所示：
 * * image：图片要素；
 * * background：背景要素；
 * * mask：蒙版要素。
 * 取值image表示图片要素，background表示背景要素
 * @example "background"
 */
export enum AddImageElementsBodyTypeEnum {
  Image = "image",
  Background = "background",
}

/** title */
export interface AddImageElementsBody {
  /**
   * 待添加的图片 URI 列表。
   * @example "["tos-cn-i-nn***mq/mofang/20220629-111409.jpeg"]"
   */
  Images: string[];
  /**
   * 要素类型，取值如下所示：
   * * image：图片要素；
   * * background：背景要素；
   * * mask：蒙版要素。
   * 取值image表示图片要素，background表示背景要素
   * @example "background"
   */
  Type: AddImageElementsBodyTypeEnum;
}

export interface AddImageElementsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "AddImageElements"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071513305401021204519717A8DFCF"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 添加失败的图片 URI 列表。若全部添加失败，则接口将返回失败。
     * 若全部添加失败，则接口将返回失败
     */
    FailedList: string[];
  };
}

export interface ApplyImageUploadQuery {
  /**
   * 文件扩展名(如：.java, .txt, .go 等)，最大长度限制为 8 个字节。
   * :::tip
   * 仅当未指定`StoreKeys`时生效。
   * :::
   * @example "png"
   */
  FileExtension?: string;
  /**
   * 是否开启重名文件覆盖上传，取值如下所示：
   *
   * - `true`：开启
   * - `false`：（默认）关闭
   *
   * :::warning
   * 在指定 `Overwrite` 为 `true` 前，请确保您指定的 `ServiceId` 对应服务已[开启了覆盖上传](https://www.volcengine.com/docs/508/1119912)能力。
   * :::
   * @example "false"
   */
  Overwrite?: boolean;
  /**
   * 指定的上传文件路径。
   * * 指定`Prefix`时，下发的存储 Key 为：`Prefix/{随机Key}{FileExtension}`，其中`Prefix + FileExtension`最大长度限制为 145 个字节。
   * * 不支持以/开头或结尾，不支持/连续出现。
   * :::tip
   * 仅当未指定`StoreKeys`时生效。
   * :::
   * @example "a/b"
   */
  Prefix?: string;
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "WMK**UXe"
   */
  ServiceId: string;
  /**
   * 一次上传会话 Key。
   * :::tip
   * 本接口上一次请求的`SessionKey`，可在重试时带上，作为服务端的再次选路时的一个参考。
   * :::
   * @example "eyJh**In0="
   */
  SessionKey?: string;
  /**
   * 上传文件的存储 Key。默认使用随机生成的字符串作为存储 Key。
   * * 数组长度和`UploadNum`保持一致。
   * * 存储 Key 详细命名规范请参看 [veImageX 存储 Key 通用字符规则](https://www.volcengine.com/docs/508/1458331)。
   * @example "312**ea6.png"
   */
  StoreKeys?: string[];
  /**
   * 上传文件的数量，将决定下发的 StoreUri 的数量，取值范围为[1,10]，默认为 1。
   * @example 1
   */
  UploadNum?: number;
}

export interface ApplyImageUploadRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    Error?: {
      /**
       * 错误码
       * @example "{ErrorCode}"
       */
      Code: string;
      /**
       * 错误信息
       * @example "{ErrorMessage}"
       */
      Message: string;
    };
    /**
     * 请求的Region，例如：cn-north-1
     * @example "{Region}"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "{Service}"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result: {
    /**
     * 请求的唯一标识 ID。
     * @example "20221110162951010212162157127244C2"
     */
    RequestId: string;
    /** 上传地址 */
    UploadAddress: {
      /**
       * 一次上传会话 Key。
       * 上传完成上报时使用该值，该 Key 可以在解码后提取信息及参数校验。
       * @example "eyJh**In0="
       */
      SessionKey: string;
      /**
       * 上传 Uri
       *
       * :::tip
       * 数量由请求参数中的 `UploadNum` 决定。
       * :::
       * @example "-"
       */
      StoreInfos: {
        /**
         * 上传凭证。
         * @example "6F**JL:-fU**zI=:Mz**5n"
         */
        Auth: string;
        /**
         * 资源 ID。
         * @example "tos-cn-i-mm**w2/31**a6.png"
         */
        StoreUri: string;
      }[];
      /**
       * 上传域名列表，可以用于客户端容灾，并行上传等。
       * @example "tos.test.com"
       */
      UploadHosts: string[];
    };
  };
}

export interface ApplyVpcUploadInfoQuery {
  /**
   * 上传文件的 Content-Type 值。
   *
   * 需确保指定值在服务维度的白名单内，否则无法成功上传，参看[上传 Content-Type 限制](https://www.volcengine.com/docs/508/1319948)。
   * @example "image/jpeg"
   */
  ContentType?: string;
  /**
   * 文件扩展名，最大长度限制为 8 个字节。
   *
   * :::tip
   * 仅当未指定 `StoreKeys` 时生效。
   * :::
   * @example ".jpg"
   */
  FileExtension?: string;
  /**
   * 文件大小。
   * @format int64
   * @example 123
   */
  FileSize?: number;
  /**
   * 是否开启重名文件覆盖上传，取值如下所示：
   *
   * - `true`：开启
   * - `false`：（默认）关闭
   *
   * :::tip
   * 在指定 `Overwrite` 为 `true` 前，请确保您指定的 `ServiceId` 对应服务已[开启了覆盖上传](https://www.volcengine.com/docs/508/1119912)能力。
   * :::
   * @example "true"
   */
  Overwrite?: boolean;
  /**
   * 分片大小，单位为字节，默认值为 200 MB。
   * 当 `FileSize` 大于 `PartSize` 时，下发分片上传的 URL。
   * @format int64
   * @example 5242880
   */
  PartSize?: number;
  /**
   * 指定的上传文件路径。指定 `Prefix` 时，下发的存储 Key 为：`Prefix/{随机Key}.{FileExtension}`，拼接形成的存储 Key 需满足 [veImageX 存储 Key 通用字符规则](https://www.volcengine.com/docs/508/1458331)。
   *
   *
   * :::tip
   * 仅当未指定 `StoreKeys` 时生效。
   * :::
   * @example "test"
   */
  Prefix?: string;
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "u3*k"
   */
  ServiceId: string;
  /**
   * 存储类型。
   *
   * - `STANDARD`：标准存储
   * - `IA`：低频存储
   * - `ARCHIVE_FR`：归档闪回存储
   * - `ARCHIVE`：归档存储
   * - `COLD_ARCHIVE`：冷归档存储
   * @example "ARCHIVE"
   */
  StorageClass?: string;
  /**
   * 上传文件的存储 Key。默认使用随机生成的字符串作为存储 Key。
   *
   * 存储 Key 详细命名规范请参看 [veImageX 存储 Key 通用字符规则](https://www.volcengine.com/docs/508/1458331)。
   * @example "test.jpg"
   */
  StoreKey?: string;
}

export interface ApplyVpcUploadInfoRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 参数的唯一标识符。
     * 参数的唯一标识符
     * @example "demo"
     */
    Oid: string;
    /**
     * 分片上传信息。
     * @example "-"
     */
    PartUploadInfo: {
      /**
       * 合并分片的 URL。
       * 完整部分的URL。
       * @example "https://ouy.*.com"
       */
      CompletePartURL: string;
      /**
       * 上传分片请求头信息，用于合并分片请求。
       * 合并分片请求头信息，map结构
       * @example "-"
       */
      CompletePartURLHeaders: {
        /**
         * 请求头的键（Header key）。
         * 请提供具体的Key和string值，我将根据这些信息生成参数的一句话描述。
         * @example "X-Tos-Forbid-Overwrite"
         */
        Key: string;
        /**
         * 请求头的值（Header value）。
         * 请提供参数的名字和类型。
         * @example "true"
         */
        Value: string;
      }[];
      /**
       * 分块上传 URL 列表。
       * 分块上传URL列表。
       * @example "["https://tos.xxx","https://tos.yyy"]"
       */
      PartPutURLs: string[];
      /**
       * 上传分片大小，默认为 200MB。
       * @format int64
       * @example 4194304
       */
      PartSize: number;
    };
    /**
     * 直接上传的 URL。
     * 上传URL。
     * @example "https://ll.xxx"
     */
    PutURL: string;
    /**
     * 直接上传的请求头。
     * 自定义请求头。
     * @example "-"
     */
    PutURLHeaders: {
      /**
       * 请求头的键（Header key）。
       * 请提供具体的Key和string值，我将根据这些信息生成参数描述。
       * @example "Content-Type"
       */
      Key: string;
      /**
       * 请求头的值（Header value）。
       * 参数的值。
       * @example "image/jpeg"
       */
      Value: string;
    }[];
    /**
     * 一次上传会话 Key。
     * 上传完成上报时使用该值，该 Key 可以在解码后提取信息及参数校验。
     * 上传会话
     * @example "eyJh**In0="
     */
    SessionKey: string;
    /**
     * 上传模式。
     * - `direct`：直接上传
     * - `part`：分片上传
     * @example "part"
     */
    UploadMode: string;
  };
}

export interface CommitImageUploadBody {
  DecryptKeys?: string[];
  /**
   * 一次上传会话 Key。
   * :::tip
   * 请参考[获取文件上传地址](https://www.volcengine.com/docs/508/9397)获取。
   * :::
   */
  SessionKey: string;
  /** 上传成功的资源 ID。 */
  SuccessOids?: string[];
}

export interface CommitImageUploadQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "WM***Xed"
   */
  ServiceId: string;
  /**
   * 是否返回图片meta信息。默认 false。
   * * true：不返回图片 meta 信息。
   * * false：获取图片 meta 信息并返回对应 meta 信息。
   * * 其中若 meta 获取超时或失败，接口返回成功，但对应 meta 信息将为空。
   * * 如果强依赖 meta 请参考[图片Meta信息](https://www.volcengine.com/docs/508/64085)获取。
   * @example "false"
   */
  SkipMeta?: boolean;
}

export interface CommitImageUploadRes {
  ResponseMetadata: {
    /** @example "CommitImageUpload" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "2019052117081501022507411172601" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /** JSON 序列化之后的图片信息，结构体请参考 [ImageInfo](#imageinfo) 的 Array。 */
    PluginResult?: {
      /** 图片的 MD5 */
      ImageMd5?: string;
      /** 图片文件名。 */
      FileName?: string;
      /** 图片帧数量 */
      FrameCnt?: number;
      /** 图片格式 */
      ImageFormat?: string;
      /** 图片的高。 */
      ImageHeight?: number;
      /** 图片大小 */
      ImageSize?: number;
      /** 图片 Uri。 */
      ImageUri: string;
      /** 图片的宽。 */
      ImageWidth?: number;
    }[];
    /** 请求的唯一标识 ID。 */
    RequestId: string;
    /** 运行结果，数组长度对应上传的数量。 */
    Results: {
      /**
       * 加密结果。
       * :::tip
       * 指定了 Encryption Function 时有值 。
       * :::
       */
      Encryption?: {
        /** 加密源 MD5。 */
        SourceMd5: string;
        /** 加密算法。 */
        Algorithm: string;
        /** 额外信息，键值均为 String。 */
        Extra: Record<string, string>;
        /** 加密私钥。 */
        SecretKey: string;
        /** 加密图片的 Uri。 */
        Uri: string;
        /** 加密版本。 */
        Version: string;
      };
      ImageMeta?: {
        Field75: number;
        Md5: string;
        Format: string;
        Height: number;
        Size: number;
        Uri: string;
      };
      /**
       * 源图片的 Uri。
       * @example "uri1"
       */
      Uri: string;
      /**
       * 图片上传结果。
       * * 返回值为 2000，表示上传成功；
       * * 返回值为 2001，表示上传失败。
       * :::tip
       * 需要传 SuccessOids 才会返回值。
       * :::
       */
      UriStatus: number;
    }[];
  };
}

export interface CreateBatchProcessTaskBody {
  /**
   * 指定服务下待批量处理的资源链接信息
   * @example "-"
   */
  BatchingInfo: {
    /**
     * 批处理能力，取值如下所示：
     * - `meta`：获取资源元信息
     * - `preload`：源站图片预热
     * :::warning
     * 如需批量预热源站图片，请 [提交工单](https://console.volcengine.com/ticket/createTicketV2/?step=3&Service=rtc&FlowKey=NGnOHeWkbeCrEAkrNvjT)联系技术支持开启。
     * :::
     * @example "meta"
     */
    Action?: string;
    /**
     * 指定服务下待批处理资源的可访问 URL
     * @example "http://test.com/tos-cn-i-f0**5k/demo.png"
     */
    Url?: string;
  }[];
  /**
   * 回调地址，用于接收返回的回调信息。
   * @example "https://info.com"
   */
  Callback?: string;
  /**
   * 自定义回调内容，取值需要符合`CallbackBodyType`指定格式。
   * @example "{
   * 	"param1": "value1",
   * 	"param2": "value2"
   * }"
   */
  CallbackBody?: string;
  /**
   * 回调内容格式。默认为空，若需指定`CallbackBody`时，也需同时指定`CallbackBodyType`的值。取值如下所示：
   *
   * - `application/json`
   * - `application/x-www-form-urlencoded`
   * @example "application/json"
   */
  CallbackBodyType?: string;
}

export interface CreateBatchProcessTaskQuery {
  /**
   * 待执行异步批处理的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "9u**k2"
   */
  ServiceId: string;
}

export interface CreateBatchProcessTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 任务 ID
     * @example "92830H07WJS28370"
     */
    TaskId: string;
  };
}

export interface CreateCVImageGenerateTaskBody {
  /**
   * 服务下绑定的域名，域名状态需正常可用。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取绑定的域名信息。
   * - 您也可以通过 OpenAPI 的方式获取域名，具体请参考[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)。
   * @example "domain.test.com"
   */
  Domain: string;
  /**
   * [文生图系列模型](#使用说明)的接口 Action 名称。
   *
   * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 `ModelAction` 需要取值为 `CVSync2AsyncSubmitTask`。
   * 模型接口action
   * @example "CVSync2AsyncSubmitTask"
   */
  ModelAction: string;
  /**
   * [文生图系列模型](#使用说明)的接口 Version 名称。
   *
   * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 `ModelVersion` 需要取值为 `2022-08-31`。
   * @example "2022-08-31"
   */
  ModelVersion: string;
  /** 参数输出。 */
  Outputs: string[];
  /**
   * 是否覆盖服务下同名文件，取值如下所示：
   * - `false`：（默认）不覆盖
   * - `true`：覆盖
   * :::tip
   * 请确保您已开启[重名覆盖上传](https://www.volcengine.com/docs/508/1119912)功能，否则，此处配置无效。
   * :::
   * 是否覆盖现有内容。<ul><li>`false`：不覆盖；</li><li>`true`：覆盖。</li></ul>默认值为`false`。
   * @example "true"
   */
  Overwrite?: boolean;
  /**
   * [文生图系列模型](#使用说明)的接口的请求 JSON 字符串。
   *
   * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 `ReqJson` 需要取值为：
   * ```json
   * {
   *     "req_key":"high_aes_general_v20",
   *     "prompt":"千军万马",
   *     "model_version":"general_v2.0",
   *     "seed":-1,
   *     "scale":3.5,
   *     "ddim_steps":16,
   *     "width":512,
   *     "height":512,
   *     "use_sr":true
   * }
   * ```
   * 请求的JSON字符串。
   * @example "{
   *     "req_key":"high_aes_general_v20",
   *     "prompt":"千军万马",
   *     "model_version":"general_v2.0",
   *     "seed":-1,
   *     "scale":3.5,
   *     "ddim_steps":16,
   *     "width":512,
   *     "height":512,
   *     "use_sr":true
   * }"
   */
  ReqJson: Record<string, Record<string, unknown>>;
  /**
   * 服务下创建的图片处理模板名称，指定后，将按照模板中的处理配置对生成的原始图片进行图片处理。
   *
   * 您可在 veImageX 控制台的处理配置页面，参考[新建模板](https://www.volcengine.com/docs/508/8087)配置模板并获取模版名称，例如 `tplv-f0****5k-test`。
   * @example "tplv-serviceid-test"
   */
  Template: string;
}

export interface CreateCVImageGenerateTaskQuery {
  /**
   * 指定存储结果图并计量计费的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid"
   */
  ServiceId: string;
}

export interface CreateCVImageGenerateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 根据指定的文生图模型接口信息，接收的该接口响应的 JSON 数据。
     *
     * 例如，例如使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 RespJson 接收到的相应信息为：
     * ```json
     * {
     *     "code": 10000,
     *     "data": {
     *         "task_id": "7418048504813240370"
     *     },
     *     "message": "Success",
     *     "request_id": "2024092411365866C579D2A96A35DA62A9",
     *     "status": 10000,
     *     "time_elapsed": "23.099216ms"
     * }
     * ```
     * 响应的JSON数据。
     * @example "{
     *     "code": 10000,
     *     "data": {
     *         "task_id": "7418048504813240370"
     *     },
     *     "message": "Success",
     *     "request_id": "2024092411365866C579D2A96A35DA62A9",
     *     "status": 10000,
     *     "time_elapsed": "23.099216ms"
     * }"
     */
    RespJson: Record<string, Record<string, unknown>>;
    /**
     * 任务 ID，用于查询结果。
     * @example "7418048504813240370"
     */
    TaskId: string;
  };
}

export interface CreateFileRestoreBody {
  /**
   * 恢复时长，取值范围为[1,365]，单位为天。
   * @example 30
   */
  Duration: number;
  /**
   * 文件存储 URI。
   * - 您可以在 veImageX 控制台 [资源管理](https://console.volcengine.com/imagex/resource_manage/)页面，在已上传文件的名称列获取资源 URI。
   * - 您也可以通过 OpenAPI 的方式获取 URI，具体请参考[获取服务下全部上传文件](https://www.volcengine.com/docs/508/9393)。
   * @example "demo.png"
   */
  StoreUri: string;
  /** 取回方式： Expedited：快速取回 Standard：标准取回 Bulk：批量取回；不设置默认standard */
  Tier?: string;
}

export interface CreateFileRestoreQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**kl"
   */
  ServiceId: string;
}

export interface CreateFileRestoreRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface CreateHiddenWatermarkImageBody {
  /**
   * 盲水印模型，取值如下所示：
   * - `tracev1`：前景图层水印模型（纯色背景适用）。
   *
   * 	该模型可以生成带有水印的透明图像，但仅适用于**纯色**网页泄露溯源场景。该模型可有效抵抗常见的社交软件传播。然而，该算法对页面背景色的影响相对较大，因此不适合用于保护多彩页面或图片，例如商品页面。
   *
   * - `tracev2`：前景图层水印模型（彩色背景通用）
   *
   * 	该模型可以生成含水印的透明图像，主要应用在前端页面截图泄露溯源场景。该模型生成的水印纹理密集，在正常界面添加后肉眼基本不可见（截图放大后存在肉眼可见的水印纹理），可抵抗常见的社交软件传播。
   * @example "tracev1，tracev2"
   */
  Algorithm: string;
  /**
   * 自定义盲水印文本信息，最多支持 128 个字符。
   * @example "你好"
   */
  Info: string;
  /**
   * 盲水印强度，取值如下所示：
   * - `low`：低强度，适用于对图像质量要求高。
   * - `medium`：中强度
   * - `strong`：高强度，适合图像纹理丰富时使用。
   * @example "medium"
   */
  Strength: string;
}

export interface CreateHiddenWatermarkImageQuery {
  /**
   * 用于存储结果图和计量计费的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "h1**0k"
   */
  ServiceId: string;
}

export interface CreateHiddenWatermarkImageRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 盲水印图片 Uri，当前仅支持输出 png 格式。
     *
     * @example "tos-cn-i-h1**0k-example.png"
     */
    StoreUri: string;
  };
}

/** title */
export interface CreateImageAITaskBody {
  /**
   * 任务回调配置，缺省情况下默认使用队列回调配置。
   * @example "-"
   */
  CallbackConf?: {
    /**
     * 业务自定义回调参数，将在回调消息的 `callback_args` 中透传。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/1104726#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
     * @example "product id"
     */
    Args?: string;
    /**
     * 回调数据格式，仅支持取值 `JSON`。
     * @example "JSON"
     */
    DataFormat?: string;
    /**
     * 回调 HTTP 请求地址，用于接收转码结果详情。支持使用 https 和 http 协议。
     * @example "https://demo.com"
     */
    Endpoint: string;
    /**
     * 回调方式，仅支持取值 `HTTP`。
     * HTTP
     * @example "HTTP"
     */
    Method: string;
    /**
     * 回调的维度类型，缺省情况下按照条目级别进行回调。取值如下所示：
     *
     * - `task`：将按照任务级别进行回调。可分批回调，一个批次内最多一次性可回调 5000 条图片转码条目执行信息。
     * - `entry`：将按照条目级别进行回调。当该条目执行完毕，将立即产生回调。
     * 参数类型。
     * @example "task"
     */
    Type?: string;
  };
  /**
   * 待进行 AI 处理的图片 URI 或 URL 列表，其中 URI 不需要带 `tos-cn-i-***` 前缀。
   *
   * :::warning
   * 若 `DataType` 取值 `uri`，则待转码图片 URI 必须为指定服务 ID 下的存储 URI。您可通过调用 [GetImageUploadFiles](https://www.volcengine.com/docs/508/9392) 获取指定服务下全部的上传文件存储 URI。
   * :::
   * 数据列表。
   * @example "["a.png","uridemo.png"]"
   */
  DataList: string[];
  /**
   * 需要提交的图片数据类型，取值如下所示：
   *
   * - `uri`：指定 ServiceId 下存储 URI。
   * - `url`：公网可访问的 URL。
   * @example "uri"
   */
  DataType: string;
  /**
   * 服务 ID。若 `DataType` 取值 `uri`，则提交的图片 URI 列表需在该服务内。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "5s****fo"
   */
  ServiceId: string;
  /**
   * AI 图像处理模板参数，需要将 JSON 压缩并转义为字符串。根据您需要的图像处理功能，参看 [AI 图像处理模板](https://www.volcengine.com/docs/508/1515840)页面获取模板 ID 和参数信息。
   * 工作流参数，序列化的 JSON 字符串。
   * @example "{\"GenDREnhanceParam\":{\"Multiple\":1.2}}"
   */
  WorkflowParameter: string;
  /**
   * AI 图像处理模板 ID。根据您需要的图像处理功能，参看 [AI 图像处理模板](https://www.volcengine.com/docs/508/1515840)页面获取模板 ID 和参数信息。
   * 工作流ID。
   * @example "system_workflow_ai_super_resolution"
   */
  WorkflowTemplateld: string;
}

export interface CreateImageAITaskRes {
  ResponseMetadata: {
    /** @example "CreateImageTranscodeTask" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /**
     * 队列 ID。查询接口需要使用，请注意保存。
     * @example "67d****"
     */
    QueueId: string;
    /**
     * 任务 ID。查询接口需要使用，请注意保存。
     * @example "649b9d3****5537684010a7"
     */
    TaskId: string;
  };
}

/** title */
export interface CreateImageAnalyzeTaskBody {
  /**
   * 任务描述，可作为该条任务的备注信息。
   * @example "备注"
   */
  Desc?: string;
  /**
   * 自定义离线评估任务名称
   * @example "test"
   */
  Name: string;
  /**
   * 任务地区。当前仅支持取值 `cn`，表示国内。
   * @example "cn"
   */
  Region: string;
  /**
   * txt 评估文件的 Store URI，该文件需上传至指定服务对应存储中。
   * - `Type` 取值 `UrlFile` 时，填写合法 URL
   * - `Type` 取值 `UriFile` 时，填写指定服务的存储 URI
   * @example "["tos-cn-i-4u***7a/URL.txt"]"
   */
  ResUri?: string[];
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "4u***7a"
   */
  ServiceId: string;
  /**
   * 仅当`Type` 取值 `UriFile` 时，配置有效。
   * 模板名称，您可通过调用 [GetAllImageTemplates](https://www.volcengine.com/docs/508/9386) 获取服务下所有已创建的 `TemplateName`。
   * @example "tplv-xyz-xxx"
   */
  Tpl?: string;
  /**
   * 任务类型。取值如下所示：
   * - OnlineUrl（暂不支持）
   * - SdkUrl（暂不支持）
   * - `UrlFile`：在线提交 URL 离线评估，即在.txt 文件（评估文件）内填写了待评估图片文件 URL，并将该 txt 文件上传至指定服务后获取并传入该文件的 StoreUri。
   * - `UriFile`：在线提交 URI 离线评估，即在.txt 文件（评估文件）内填写了待评估图片文件 URI，并将该 txt 文件上传至指定服务后获取并传入该文件的 StoreUri。
   * @example "UrlFile"
   */
  Type: string;
}

export interface CreateImageAnalyzeTaskRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务 ID
     * @example "927930**028930"
     */
    TaskId: string;
  };
}

/** title */
export interface CreateImageAuditTaskBody {
  /**
   * 审核能力，取值如下所示：
   * - `0`：基础审核能力
   * - `1`：智能审核能力
   * @example 1
   */
  AuditAbility: number;
  /**
   * 审核维度，根据审核能力的不同，其具体取值不同。基础审核与智能审核之间不支持混用。
   *
   * - 基础安全审核，仅当 `AuditAbility` 取值为 `0` 时，配置生效。
   *
   * 	- `govern`：涉政
   * 	- `porn` ：涉黄
   * 	- `illegal`：违法违规
   * 	- `terror`：涉暴
   *
   * - 智能安全审核，仅当 `AuditAbility` 取值为 `1` 时，配置生效。
   *
   * 	- 图像风险识别
   * 		- `porn` ：涉黄，主要适用于通用色情、色情动作、性行为、性暗示、性分泌物、色情动漫、色情裸露等涉黄场景的风险识别
   * 		- `sensitive1` ：涉敏1，具体指涉及暴恐风险
   * 		- `sensitive2`：涉敏2，具体值涉及政治内容风险
   * 		- `forbidden`：违禁，主要适用于打架斗殴、爆炸、劣迹艺人等场景的风险识别
   * 		- `uncomfortable`：引人不适，主要适用于恶心、恐怖、尸体、血腥等引人不适场景的风险识别
   * 		- `qrcode`：二维码，主要适用于识别常见二维码（QQ、微信、其他二维码等）
   * 		- `badpicture`：不良画面，主要适用于自我伤害、丧葬、不当车播、吸烟/纹身/竖中指等不良社会风气的风险识别
   * 		- `sexy`：性感低俗，主要适用于舌吻、穿衣性行为、擦边裸露等多种性感低俗场景的风险识别
   * 		- `age`：年龄，主要适用于图中人物对应的年龄段识别
   * 		- `underage`：未成年相关，主要适用于儿童色情、儿童邪典等风险识别
   * 		- `quality`：图片质量，主要适用于图片模糊、纯色边框、纯色屏等风险识别
   * 	- 图文风险识别，您可在 `AuditTextDimensions` 配置文字审核的维度。
   *
   * 	:::tip
   * 	您可将智能安全审核的图像风险识别和图文风险识别搭配使用。
   * 	:::
   * "porn"          // 涉黄
   * "govern"        // 涉政
   * "terror"        // 涉恐
   * "illegal"       // 违法违规
   * "sensitive1"    // 涉敏1
   * "sensitive2"    // 涉敏2
   * "forbidden"     // 违禁
   * "uncomfortable" // 引人不适
   * "qrcode"        // 二维码
   * "badpicture"    // 不良画面
   * "sexy"          // 性感低俗
   * "age"           // 年龄
   * "underage"      // 未成年
   * "quality"       // 图片质量
   * @example "["pron","sexy"]"
   */
  AuditDimensions: string[];
  /**
   * 仅当 `EnableAuditRange` 取值 `1` 时，配置生效。
   * 指定前缀审核，若你希望对某个目录进行审核，请设置路径为对应的目录名，以`/`结尾。例如`123/test/`
   * @example "["a/"]"
   */
  AuditPrefix?: string[];
  /**
   * 智能安全审核类型下图文风险审核的具体维度，取值如下所示：
   * - `ad`：广告，综合图像及文字内容智能识别广告
   * - `defraud`：诈骗，综合图像及文字内容智能识别诈骗
   * - `charillegal`：文字违规，图片上存在涉黄、涉敏、违禁等违规文字
   *
   * :::tip
   * 仅当 `AuditDimensions` 取值为智能安全审核模型时，您可将 `AuditTextDimensions` 与 `AuditDimensions` 搭配使用。
   * :::
   * "ad"          // 广告 "defraud"     // 诈骗 "charillegal" // 文字违规
   * @example "["ad"]"
   */
  AuditTextDimensions?: string[];
  /**
   * 回调类型，取值需要与 `AuditDimensions` 审核维度保持一致或少于 `AuditDimensions`。
   *
   * 例如，`AuditDimensions` 取值 ["pron","sexy"]，`AuditTextDimensions` 取值 ["ad"]，支持您将 `FreezeDimensions` 取值 ["pron","sexy","ad"] 、 ["pron","sexy"]、["pron","ad"] 和 ["sexy","ad"] 任意一种。
   * @example "["ad"]"
   */
  CallbackDimensions?: string[];
  /**
   * 回调图片类型，取值如下所示：
   * - `normal`：正常图片
   *
   * - `problem`：问题图片
   *
   * - `frozen`：冻结图片
   *
   * - `fail`：审核失败图片
   * @example "["problem","frozen","fail"]"
   */
  CallbackImageTypes?: string[];
  /**
   * 回调 URL，veImageX 以 Post 方式向业务服务器发送 JSON 格式回调数据。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/134676#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
   * @example "https://example.callback.com"
   */
  CallbackUrl?: string;
  /**
   * 仅当 `Type` 取值 `Upload` 时，配置生效。
   * 审核范围，取值如下所示：
   * - `0`：（默认）不限范围
   * - `1`：指定范围
   * 默认0
   * @example 1
   */
  EnableAuditRange?: number;
  /**
   * 是否开启回调，取值如下所示：
   * - `true`：开启
   * - `false`：（默认）不开启
   * @example "true"
   */
  EnableCallback?: boolean;
  /**
   * 是否开启冻结，取值如下所示：
   * - `true`：开启
   * - `false`：（默认）不开启
   * @example "true"
   */
  EnableFreeze?: boolean;
  /**
   * 图片审核仅支持审核 5MB 以下的图片，若您的图片大小在 5MB~32MB，您可以开启大图审核功能，veImageX 会对图片压缩后再进行审核。开启后，将对压缩能力按照[基础图片处理](https://www.volcengine.com/docs/508/65935#%E5%9F%BA%E7%A1%80%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E6%9C%8D%E5%8A%A1)进行计费。（您每月可使用 20TB 的免费额度）
   * 取值如下所示：
   * - `true`：开启
   * - `false`：（默认）不开启
   *
   * :::tip
   * - 若未开启大图审核且图片大小 ≥ 5 MB，可能会导致系统超时报错；
   * - 若已开启大图审核但图片大小 ≥ 32 MB，可能会导致系统超时报错。
   * :::
   * @example "true"
   */
  EnableLargeImageDetect?: boolean;
  /**
   * 冻结维度，取值需要与 `AuditDimensions` 审核维度保持一致或少于 `AuditDimensions`。
   *
   * 例如，`AuditDimensions` 取值 ["pron","sexy"]，`AuditTextDimensions` 取值 ["ad"]，支持您将 `FreezeDimensions` 取值 ["pron","sexy","ad"] 、 ["pron","sexy"]、["pron","ad"] 和 ["sexy","ad"] 任意一种。
   * 若开启冻结，则不可为空
   * @example "["pron","sexy","ad"] "
   */
  FreezeDimensions?: string[];
  /**
   * 冻结策略，当前仅支持取 `0`，表示禁用图片。
   * 若开启冻结，则不可为空
   */
  FreezeStrategy?: number;
  /**
   * 冻结措施，取值如下所示：
   * - `recheck`：建议复审
   * - `nopass`：审核不通过
   * 若开启冻结，则不可为空
   * @example "["recheck","nopass"]"
   */
  FreezeType?: string[];
  /**
   * 仅当 `Type` 为 `Url` 时，配置生效。
   *
   * 批量提交图片 URL 列表
   * @example "-"
   */
  ImageInfos?: {
    /**
     * 建议您根据实际业务情况，将该参数作为可区分审核图片 `ImageUri` 的自定义标识。
     * @example "92bodw28122j19***018h3i1928g"
     */
    DataId?: string;
    /**
     * 待审核图片 URL，需满足公网可访问。
     * @example "https://test.png"
     */
    ImageUri?: string;
  }[];
  /**
   * 仅当 `EnableAuditRange` 取值 `1` 时，配置生效。
   * 指定前缀不审核，若你希望对某个目录不进行审核，请设置路径为对应的目录名，以`/`结尾。例如`123/test/`
   * @example "["b/"]"
   */
  NoAuditPrefix?: string[];
  /**
   * 任务地区。当前仅支持取值 `cn`，表示国内。
   * @example "cn"
   */
  Region: string;
  /**
   * 仅当 `Type` 为 `UrlFile` 时，配置生效。
   *
   * 审核文件的 StoreUri，为 .txt 文件，该文件需上传至指定服务对应存储中。该 txt 文件内需填写待审核图片文件的 URL，每行填写一个，最多可填写 10000 行。
   * @example "[ "指定服务/图片审核文件.txt" ]"
   */
  ResUri?: string[];
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "9u**6i"
   */
  ServiceId: string;
  /**
   * 任务类型，当前仅支持取值为 `audit`。
   * @example "audit"
   */
  TaskType: string;
  /**
   * 图片审核任务场景。取值如下所示：
   * - `UrlFile`：存量图片处理，进针对已有存储内的图片请求获取审核结果。传入方式是 `ResUri`方式，即在.txt 文件（审核文件）内填写了待审核图片文件 URL，并将该 txt 文件上传至指定服务后获取并传入该文件的 StoreUri。
   * - `Url`：URL 直传场景。传入方式为 `ImageInfos` 方式，即可直接传入待审核图片的 URL 及区分标识。
   * - `Upload`：图片上传场景，针对上传图片到指定服务下的场景。可在 `EnableAuditRange`下指定审核的范围，例如对指定上传到某目录下的图片进行审核。
   * @example "UrlFile"
   */
  Type: string;
}

export interface CreateImageAuditTaskRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务 ID
     * @example "652ceffd309a6dd937a3780d"
     */
    TaskId: string;
  };
}

export interface CreateImageCompressTaskBody {
  /**
   * POST 类型的回调 URL，用于接收相关回调 JSON 类型数据。回调参数请参考[回调内容](#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
   * @example "http://test.com"
   */
  Callback?: string;
  /**
   * 与`IndexFile`为二选一，必填。<br>
   * 压缩文件列表配置，最多可支持 3000 个文件，压缩前文件的总大小不得超过 45000 MB。若超出限制，则取消压缩打包操作，致使打包任务失败。
   * @example "-"
   */
  FileList?: {
    /**
     * - 指定时，为 URL 文件所在压缩包中的别名。输入规则如下所示：
     * 	- 支持汉字、字母、数字及符号`-`、`_`和`.`；
     * 	- 不能以`-`、`_`和`.`开头；
     * 	- 长度不得超过 100 个字符。
     * - 不指定时，若能提取原文件名称时，则以 URL 原文件名称；否则，使用随机名称。
     * @example "compress1"
     */
    Alias?: string;
    /**
     * 指定源文件在压缩包中的文件夹，不传时则将该资源存储至一级目录下。输入规则如下所示：
     *
     * - 支持汉字、字母、数字及符号`-`、`_`和`.`；
     * - 不能以`-`、`_`和`.`开头；
     * - 不能以`/`结尾。
     *
     * :::warning
     * - 建议命名长度不超过 256 个字节。
     * - 建议您在命名中仅使用 `-`、`_` 和 `.` 这三种符号。如果您使用了其他符号，可能因操作系统不支持导致处理异常。
     * :::
     * @example "a/b"
     */
    Folder?: string;
    /**
     * 公网可访问的待压缩文件 URL
     * @example "http://test.imagex.com/tos-cn-i-rw****qr/86****4c.png~tplv-rw***qr-6.image"
     */
    Url: string;
  }[];
  /**
   * 与 `FileList`为二选一，必填。<br>
   * 索引文件的 StoreUri，为 .txt 文件，该索引文件需上传至指定服务对应存储中。<br>
   * 该索引文件内需填写待压缩文件的地址，每行填写一个，最多可填写 3000 行。压缩前文件的总大小不超过 45000 MB。若超出限制，则取消压缩打包操作，致使打包任务失败。
   * @example "tos-boe-i-hr***pr/testcompress.txt"
   */
  IndexFile?: string;
  /**
   * 压缩后文件压缩包的指定名称，默认为随机 Key。
   * @example "testcompress"
   */
  Output?: string;
  /**
   * 文件的处理方式，取值如下所示：
   *
   * - `0`：使用 ZIP DEFLATE 压缩方法，将文件进行压缩并打包为 ZIP 包。该方式适用于需要长期存储大量未经压缩的文件的场景，以节省存储空间。但需注意的是，若文件本身已经过压缩处理，将会因为文件的可压缩空间有限，导致该方式的压缩效果不明显。
   * - `1`：仅将文件打包为 ZIP 包，但不执行压缩操作。该方式适用于快速整理文件而无需节省存储空间的场景。例如已经过压缩的文件的打包存储，以便于传输或归档。
   * @example 0
   */
  ZipMode: number;
}

export interface CreateImageCompressTaskQuery {
  /**
   * 压缩文件存储的目标服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7g**2i"
   */
  ServiceId: string;
}

export interface CreateImageCompressTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 压缩任务 ID
     * @example "82370***12102"
     */
    TaskId: string;
  };
}

/** 描述 */
export interface CreateImageContentTaskBody {
  /**
   * 仅当 `TaskType` 为 `refresh_dir` 使用目录刷新时，可通过此配置开启前缀刷新。取值如下所示：
   * - `true`：开启前缀刷新
   * - `false`：（默认）关闭前缀刷新，进行标准的目录匹配刷新。
   * 仅当 TaskType 为 refresh_dir 使用目录刷新时，可通过此配置开启前缀刷新。取值如下所示：  true：开启前缀刷新 false：（默认）关闭前缀刷新，进行标准的目录匹配刷新。
   * @example "false"
   */
  PrefixRefreshDir?: boolean;
  /**
   * 操作类型。取值如下所示：
   * - `refresh_url`：刷新 URL
   * - `refresh_dir`：目录刷新（支持根目录刷新）
   * - `preload_url`：预热 URL
   * - `block_url`：禁用 URL
   * - `unblock_url`：解禁 URL
   * @example "refresh_url"
   */
  TaskType: string;
  /**
   * 资源 URL 或者目录。
   * - 当`TaskType`取值`refresh_url`，一次可提交的最大限额为 2000 个；
   * - 当`TaskType`取值`refresh_dir`，一次可提交的最大限额为 50 个；
   * - 当`TaskType`取值`preload_url`，一次可提交的最大限额为 2000 个；
   * - 当`TaskType`取值`block_url`，一次可提交的最大限额为 2000 个；
   * - 当`TaskType`取值`unblock_url`，一次可提交的最大限额为 2000 个。
   * @example "["http://r.test.com/demo1.png"]"
   */
  Urls: string[];
}

export interface CreateImageContentTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "CreateImageContentTask"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "20230308131511B4378236E5E16B1073F8"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 完成结果提示信息
     * @example "create content task succeed"
     */
    Msg: string;
    /**
     * 对应的任务 ID
     * @example "8279***0180"
     */
    TaskId: string;
  };
}

export interface CreateImageFromUriBody {
  /**
   * 复制后资源的存储 Key。缺省情况下与源存储的资源存储 Key 相同。自定义规则如下所示：
   *
   * - 不支持空格。
   * - 不支持以`/`开头或结尾，不支持`/`连续出现，Key 值最大长度限制为 180 个字节。
   * @example "a/test"
   */
  DstKey?: string;
  /**
   * 待复制资源对应的服务 ID
   * @example "serviceid222"
   */
  OriServiceId?: string;
  /**
   * 是否保留目标存储中的同名文件，取值如下所示：
   * - `false`：不保留目标存储中的同名文件，直接覆盖。
   * - `true`：保留目标存储中的同名文件，不覆盖。
   * 是否保留目标存储中的同名文件。False：不保留目标存储中的同名文件直接覆盖。True：保留目标存储中的同名文件，不覆盖。
   * @example "true"
   */
  SkipDuplicate?: boolean;
  /**
   * 待复制资源对应的存储 URI。您可在控制台的资源管理页面，获取[上传文件的存储 URI](https://www.volcengine.com/docs/508/1205054)；或者调用 [GetImageStorageFiles](https://www.volcengine.com/docs/508/1158308) 获取指定服务下的存储 URI。
   * @example "tos-serviceid222/demo1.png"
   */
  StoreUri: string;
}

export interface CreateImageFromUriQuery {
  /**
   * 复制目标对应的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid1"
   */
  ServiceId: string;
}

export interface CreateImageFromUriRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 资源复制到目标服务后的存储 URI
     * @example "tos-serviceid111/a/test"
     */
    DstUri: string;
    /**
     * 待复制资源的源存储 URI
     * @example "tos-serviceid222/demo1.png"
     */
    StoreUri: string;
  };
}

/** 描述 */
export interface CreateImageHmEmbedBody {
  /**
   * 算法模型，取值如下所示：
   * * default：文本嵌入模型，默认文本嵌入模型；
   * * adapt_resize：画质自适应文本嵌入模型。
   * @example "default"
   */
  Algorithm: string;
  /**
   * 待添加盲水印的可公网访问原图 Url。当 StoreUri 和 ImageUrl 均不为空，以 StoreUri 取值为准。
   * @example "https://test.com/example.png"
   */
  ImageUrl?: string;
  /**
   * 自定义盲水印文本内容。
   * * 文本嵌入模型支持最长可嵌入115个水印内容字符。
   * * 画质自适应文本嵌入模型无水印内容长度限制。
   * @example "你好 abc123%^$%"
   */
  Info: string;
  /**
   * 输出图片格式，默认 png，支持图片格式有：png、jpeg、webp。
   * @example "png"
   */
  OutFormat?: string;
  /**
   * 输出图片质量参数。取值范围为 [1,100]，默认为 75。
   * 对于 PNG 无损压缩，其他格式下其值越小，压缩率越高，画质越差。
   * @example 75
   */
  OutQuality?: number;
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "oz***y2"
   */
  ServiceId: string;
  /**
   * 待添加盲水印的原图 Uri。
   * @example "tos-boe-i-oz***y2/cf***9d.jpg"
   */
  StoreUri: string;
  /**
   * 算法强度，强度越高，图像抵抗攻击性能越强。<br>取值如下所示：
   * * low：低强度，适用于纯色图场景以及对图像质量要求高；
   * * medium：中强度，默认中强度；
   * * strong：高强度，适合图像纹理丰富时使用。
   * @example "strong"
   */
  StrengthLevel?: string;
}

export interface CreateImageHmEmbedRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "CreateImageHmEmbed"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022082316404301017425518104A49986"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 添加盲水印后的结果图 Uri。
     * @example "tos-boe-i-oz***y2/9b***76"
     */
    StoreUri: string;
  };
}

export interface CreateImageHmExtractQuery {
  /**
   * 算法模型，取值如下所示：
   *
   * - `default`：文本嵌入基础模型
   * - `adapt_resize`：画质自适应文本嵌入模型。
   * - `adapt`: 文本嵌入自适应模型（AIGC 适用）
   * - `natural`：文本嵌入基础模型（彩色图片通用）
   * - `tracev1`：前景图层水印模型（纯色背景适用）
   * - `tracev2`：前景图层水印模型（彩色背景通用）
   *
   * :::warning
   * 指定 `tracev1` 或 `tracev2` 模型时，请传入已添加对应模型水印的背景网页的**截图**。若模型错误，则无法提取水印。
   * :::
   * @example "default"
   */
  Algorithm: string;
  /**
   * 待提取盲水印图片的 URL。`StoreUri` 和 `ImageUrl` 都不为空时，以 `StoreUri` 为准。
   * @example "https://test.com/example.png"
   */
  ImageUrl: string;
  /**
   * 待提取水印图对应的服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "97**sh"
   */
  ServiceId: string;
  /**
   * 待提取盲水印的图片的 URI。`StoreUri` 和 `ImageUrl` 都不为空时，以 `StoreUri` 为准。
   * @example "tos-cn-i-97**sh/example"
   */
  StoreUri: string;
}

export interface CreateImageHmExtractRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "CreateImageHmExtract"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022082317022201017425518102AA654C"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result: {
    /**
     * 仅当 `Algorithm` 取值为 `tracev2` 时，有返回值。
     *
     * 编码附加信息。
     * @example "-"
     */
    AdditionInfo?: {
      /**
       * 所提取的水印背景图层的生成周期，从 0 开始，表示处于生成的第一周内。
       * @example 1
       */
      HmCode?: number;
      /**
       * 生成周期所对应的起始与结束时间段，固定为 7 天。
       * @example "-"
       */
      HmDateInfo?: {
        /**
         * 使用 `tracev2` 模型生成背景水印图层的生成周期的结束时间，Unix 时间戳，精度为秒。
         * 结束时间戳
         * @example 1719244800
         */
        EndDate?: number;
        /**
         * 使用 `tracev2` 模型生成背景水印图层的生成周期的开始时间，Unix 时间戳，精度为秒。
         *
         * :::tip
         * 例如：您于 6 月 5 日上午 9 时许调用 CreateHiddenWatermarkImage 接口生成 `tracev2` 模型的水印图层，在 6 月 10 日提取该模型网页截图的水印时，API 将会返回自生成时刻起至当前提取时刻所处的一个时间区间（无法精准至时分秒），该时间区间长度固定为 7 天。返回值如下所示：
         *
         * - `HmCode` 为 `0`，表示处于生成的第一周内
         * - `StartDate` 为 `1717516800`，表示 2024 年 6 月 5 日 00:00:00
         * - `EndDate` 为 `1718121600`，表示 2024 年 6 月 12 日 00:00:00
         * :::
         * 开始时间戳
         * @example 1718640000
         */
        StartDate?: number;
      };
      /**
       * 水印类型，返回值固定为 `date`，表示日期。
       * 水印类型
       * @example "date"
       */
      HmType?: string;
    };
    /**
     * 提取出的盲水印文本信息。
     * @example "你好 abc123%^$%"
     */
    Info: string;
    /**
     * 响应码，具体取值如下所示：
     * * `-1`：盲水印为空；
     * * `0`：`info`不为空时表示盲水印提取成功。
     * :::tip
     * 提取失败时显示接口错误。
     * :::
     * @example 0
     */
    StatusCode: number;
  };
}

export interface CreateImageMigrateTaskBody {
  /**
   * 任务信息
   * @example "-"
   */
  Task: {
    /**
     * 回调信息。配置后，当任务执行完成时，将往该回调配置地址发送任务回调信息。
     * @example "-"
     */
    CallbackCfg?: {
      /**
       * 回调地址。`Method`取值`http`时，填写公网可访问的 URL 地址，任务结束将向该地址发送 HTTP POST 请求。具体回调参数请参考[回调内容](#回调参数)。
       * @example "http://test.com"
       */
      Addr: string;
      /**
       * 任务维度自定义回调参数，最多可输入 1024 个任意类型字符，并在回调的 `CallbackArgs` 中返回。
       * 任务维度自定义回调参数，最大长度为1024
       * @example "App1"
       */
      CallbackArgs?: string;
      /**
       * 回调信息中是否包含具体迁移任务条目信息。取值如下所示：
       * - `true`：包含。仅包含迁移成功的任务条目信息，迁移失败的任务列表请在迁移完成后调用 [ExportFailedMigrateTask](https://www.volcengine.com/docs/508/1261309) 接口获取。
       * - `false`：（默认）不包含。
       * :::warning
       * 若任务中包含的条目数量过多，会导致回调消息体过大，增加回调失败的风险。因此建议仅在任务中条目量级不超过十万时使用该参数。
       * :::
       * @example "false"
       */
      IncludeEntry?: boolean;
      /**
       * 回调方法。仅支持取值为 `http`。
       * @example "http"
       */
      Method: string;
    };
    /**
     * 目的信息
     * @example "-"
     */
    Dst: {
      /**
       * 目标 key 前缀，即保存到到指定目录下。如需多重目录，请使用`/`分割，并以`/`结尾。
       * 默认为空，表示迁移到根目录。
       *
       * - 使用非 URL 方式迁移到根目录时：迁移后 存储 Key 与源存储 Bucket 的文件存储 Key 相同。
       * - 使用 Url 方式迁移到根目录时：迁移后存储 Key 与源 URL 中 Path 值相同。
       * @example "aaa/bbb/ccc/"
       */
      Prefix?: string;
      /**
       * 迁移目标服务 ID，请提前[新建服务](https://www.volcengine.com/docs/508/357114#%E6%96%B0%E5%BB%BA%E6%9C%8D%E5%8A%A1)。
       *
       * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
       * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
       * @example "uh**7j"
       */
      ServiceId: string;
      /**
       * 源 Bucket 名称保留规则。取值如下所示：
       *
       * - `true`：不保留，迁移后资源访问 URI 中，不保留迁移源的 Bucket 名称。
       * - `false`：（默认）保留，迁移后资源访问 URI 中，会保留迁移源的 Bucket 名称。
       * @example "true"
       */
      SkipBucket?: boolean;
      /**
       * 同名文件覆盖规则配置。取值如下所示：
       *
       * - `0`：（默认）直接覆盖同名文件
       * - `1`：增加文件名后缀，后缀为任务 ID
       * - `2`：跳过同名文件，即不做迁移
       *
       * :::tip
       * 同名文件指文件在对象存储中的访问 Key 相同的文件，调用 veImageX 服务时会用到文件访问 Key。
       * :::
       * @example 0
       */
      UploadConf?: number;
    };
    /**
     * 自定义迁移任务名称
     * @example "migrate-test"
     */
    Name: string;
    /**
     * 迁移策略
     * @example "-"
     */
    RunStrategy?: {
      /**
       * 源下载 QPS 限制。如取值不为空，则长度必须为 24，表示一天 24 小时内各小时的 QPS 限制值。默认无限制。
       *
       * - 取值为负值时，表示无限制
       * - 取值为 0 时，表示对应时间不允许迁移
       * @example "[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]"
       */
      ReadQps?: number[];
      /**
       * 源下载流量限制。单位为 Byte。如取值不为空，则长度必须为24，表示一天 24 小时内各小时的流量限制值。默认无限制。
       *
       * - 取值为负值时，表示无限制
       * - 取值为 0 时，表示对应时间不允许迁移
       * @example "[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]"
       */
      ReadRate?: number[];
    };
    /**
     * 迁移源信息
     * @example "-"
     */
    Source: {
      /**
       * 仅当`Vendor` 非 `URL`时，为必填。
       *
       * Access Key，与 Secret Key 同时填写，为了保证有访问源数据桶的权限。
       *
       * - 请参考[云数据迁移准备](https://www.volcengine.com/docs/508/129213)获取对应阿里云OSS、腾讯云COS、七牛云KODO、百度云BOS、华为云OBS、 优刻得（Ucloud File)、AWS国际站的账号 AK/SK。
       * - 对于其他 S3 协议存储的AK/SK，请根据其具体源站信息填写。
       * @example "AKTP8shJDSYGbi8*****"
       */
      AK?: string;
      /**
       * - 仅当`Vendor`为`URL`时，需填写 URL 列表文件地址（公网 URL 地址）。
       * 	 :::tip
       * 	支持指定迁移文件和转码后迁移文件进行重命名，详见 [URL 列表迁移文件说明](https://www.volcengine.com/docs/508/1263268)。
       * 	 :::
       * - 当`Vendor`为其他时，需填写对应云服务商所需迁移数据的 Bucket 名称。您可参考[云数据迁移准备](https://www.volcengine.com/docs/508/129213)获取对应阿里云OSS、腾讯云COS、七牛云KODO、百度云BOS、华为云OBS、 优刻得（Ucloud File)、AWS国际站的 Bucket 名称。
       * @example "storage-test"
       */
      Bucket: string;
      /**
       * 仅当 `Vendor` 取值 `COS` 时，为选填。不为空，表示使用桶清单方式进行数据迁移；若为空，将遍历指定 `Bucket` 内的文件后再进行迁移。
       *
       * 桶清单 csv 文件在第三方云存储 Bucket 中的存储目录路径。该路径不携带域名和 csv 清单文件信息，需要以`/`结尾。您可参考[获取桶清单文件存储路径](https://www.volcengine.com/docs/508/1347855#%E8%8E%B7%E5%8F%96%E6%A1%B6%E6%B8%85%E5%8D%95%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E8%B7%AF%E5%BE%84)获取。
       * Vendor != URL 时选填，表示桶清单文件在Bucket中的存储目录路径。若不为空，则使用桶清单获取桶内待迁移文件。否则，会调用桶的 ListObject 接口获取桶内待迁移文件。
       * @example "cos_bucket_inventory/1311434967/test/buctet1/20240924_145226/1311434967/test/buctet1_instant_20240924_145226/data/"
       */
      BucketInventoryDir?: string;
      /**
       * 仅当 `BucketInventoryDir` 不为空时，为必填。
       *
       * 桶清单文件的表头信息，需要传入实际桶清单文件内每列数据对应字段名称，并遵循原字段位置进行填写。您可参考[获取桶清单文件解析位置](https://www.volcengine.com/docs/508/1347855#%E8%8E%B7%E5%8F%96%E6%A1%B6%E6%B8%85%E5%8D%95%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90%E4%BD%8D%E7%BD%AE)获取解析 csv 文件所需的字段信息。
       *
       * - Key ：【必填】表示待迁移的资源存储 Key。
       * - Size ：【推荐】表示待迁移的资源大小。
       * - ETag ：【可选】表示待迁移资源的 ETag 值。
       *
       * :::tip
       * veImageX 按照该字段顺序对 csv 文件进行解析，获取待迁移文件详细信息。若位置填写错误，可能导致迁移失败。
       * :::
       *
       * 示例：
       * 1. 若 csv 文件内 Key、Size和 ETag 分别位于整张数据表的第 3 列、第 4 列和第 6 列。那么，此时 `BucketInventorySchema取值应为` `["", "", "Key", "Size", "", "ETag"]`；
       * 2. 若 csv 文件内 Key、Size和 ETag 分别位于整张数据表的第 2 列、第 4 列和第 5 列。那么，此时 `BucketInventorySchema取值应为` `["", "Key", "", "Size", "ETag", ""]`。
       * :::warning
       * csv 文件内数据的位置可能会因为您配置桶清单时选择的清单内容而产生差异，具体请以实际为准。
       * :::
       *
       * BucketInventoryDir != "" 时必填，表示桶清单CSV文件的表头信息，数组元素顺序需与桶清单CSV文件的列顺序保持一致。ImageX会根据该参数解析桶清单CSV文件，参数规范为：
       *
       * - 必须包含 Key ：表示待迁移的资源Key
       * - 强烈推荐包含 Size ：表示待迁移的资源大小
       * - 推荐包含 ETag ：表示待迁移资源的ETag值
       * @example "["", "", "Key", "Size", "", "ETag"]"
       */
      BucketInventorySchema?: string[];
      /**
       * 仅当`Vendor` 非 `URL`时，为选填。
       *
       * 迁移源云服务商 CDN 域名，若不为空将使用该 CDN 域名下载三方云厂商的资源。
       * @example "my-bucket.oss-cn-hangzhou.aliyuncs.com"
       */
      CdnHost?: string;
      /**
       * 仅当`Vendor`为`S3`时，为必填。
       *
       * S3 协议 Endpoint，需以`http://`或`https://`开头。请根据源站信息填写。
       * @example "https://s3.amazonaws.com"
       */
      Endpoint?: string;
      /**
       * 仅迁移匹配的前缀列表文件。文件路径前缀无需包含桶名称，但需要完整路径。
       * 默认为空，表示对该存储 Bucket 内资源执行全量迁移。若不为空，表示仅做部分迁移，即指定迁移的文件路径前缀。
       * @example "["home/aaaa"]"
       */
      Prefix?: string[];
      /**
       * 仅迁移匹配的正则表达式列表的文件。默认为空，表示对该存储 Bucket 内资源执行全量迁移。
       *
       * :::tip
       * - 多条正则表达式之间是"或"的关系，即源文件匹配任何一条正则表达式即视为符合迁移条件。
       * - 正则过滤规则需要遍历源桶中的全部文件，如果源桶中文件数量较多会降低迁移速度。
       * :::
       * @example "[".png"]"
       */
      Regex?: string[];
      /**
       * 仅当`Vendor` 非 `URL/OSS/KODO/AWS`时，为必填。
       *
       * Bucket 所在地区。
       * - 请参考[云数据迁移准备](https://www.volcengine.com/docs/508/129213)获取对应阿里云OSS、腾讯云COS、七牛云KODO、百度云BOS、华为云OBS、 优刻得（Ucloud File)、AWS国际站的 Bucket 地区。
       * - 对于其他 S3 协议存储的 Bucket 地区，请根据其具体源站信息填写。
       * @example "cn-beijing"
       */
      Region?: string;
      /**
       * 仅当`Vendor` 非 `URL`时，为必填。
       *
       * Secret Key，与 Access Key 同时填写，为了保证有访问源数据桶的权限。
       *
       * - 请参考[云数据迁移准备](https://www.volcengine.com/docs/508/129213)获取对应阿里云OSS、腾讯云COS、七牛云KODO、百度云BOS、华为云OBS、 优刻得（Ucloud File)、AWS国际站的账号 AK/SK。
       * - 对于其他 S3 协议存储的AK/SK，请根据其具体源站信息填写。
       * @example "PJDJSAJNNNCbE1E****"
       */
      SK?: string;
      /**
       * 是否丢弃源 Header。取值如下所示：
       *
       * - `true`：丢弃源 Header
       * - `false`：（默认）保留源 Header
       * @example "false"
       */
      SkipHeader?: boolean;
      /**
       * 迁移文件结束时间点。默认为空。仅迁移该查询时间段内新增或变更的文件。
       *
       * 日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
       * @example "2019-06-03T00:00:00+08:00"
       */
      TimeEnd?: string;
      /**
       * 迁移文件起始时间点。仅迁移该查询时间段内新增或变更的文件。默认为空。
       *
       * 日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
       * @example "2019-06-02T00:00:00+08:00"
       */
      TimeStart?: string;
      /**
       * 迁移云服务商。取值如下所示：
       *
       * - `OSS`：阿里云
       * - `COS`：腾讯云
       * - `KODO`：七牛云
       * - `BOS`：百度云
       * - `OBS`：华为云
       * - `Ucloud`：Ucloud file
       * - `AWS`：AWS 国际站
       * - `S3`：其他 S3 协议存储
       * - `URL`：以上传 URL 列表的方式迁移
       * @example "OSS"
       */
      Vendor: string;
    };
    /**
     * 转码配置
     * @example "-"
     */
    Transcode?: {
      /**
       * 仅当转码/降级格式为 heic、webp、jpeg 时生效。
       *
       * 是否开启自适应转码。
       * - `true`：开启。开启后，将根据 `Format` 或者 `DemotionFmt` 指定格式进行自适应转码处理。
       * - `false`：（默认）关闭
       * 是否开启自适应编码。仅编码/降级格式为heic/webp/jpeg时生效
       * @example "false"
       */
      Adapt?: boolean;
      /**
       * 包含透明通道的图片是否编码为降级格式。取值如下所示：
       *
       * - `true`：降级
       * - `false`：（默认）不降级
       * @example "true"
       */
      AlphaDemotion?: boolean;
      /**
       * 降级编码格式，仅当`AlphaDemotion`为`true`时必填。支持的格式有 png、jpeg、heic、avif、webp、vvic。
       * @example "heic"
       */
      DemotionFmt?: string;
      /**
       * 转码是否保留 exif 信息。取值如下所示：
       *
       * - `true`：保留
       * - `false`：（默认）不保留
       * @example "false"
       */
      EnableExif?: boolean;
      /**
       * 目标转码格式，仅针对静图执行转码策略。支持的格式有 png、jpeg、heic、avif、webp、vvic。
       * @example "png"
       */
      Format: string;
      /**
       * 转码质量参数，取值范围为 \[1,100\]。对于 PNG 为无损压缩，其他格式下其值越小，压缩率越高，画质越差。
       * @example 75
       */
      Quality: number;
      /**
       * 当 jpeg 原图在迁移中指定转码为 heic 图时， heic 图是否需要存储原图大小的数据。
       * - `true`：是
       * - `false`：（默认）否
       * @example "false"
       */
      ReserveJpegSize?: boolean;
      /**
       * 对带有 CMYK 色彩空间的图片，是否跳过转码处理直接存储原图。取值如下所示：
       *
       * - `true`：是
       * - `false`：（默认）否
       * @example "false"
       */
      SkipCMYK?: boolean;
    };
  };
}

export interface CreateImageMigrateTaskRes {
  ResponseMetadata: {
    /** @example "CreateImageMigrateTask" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "202306041104200100100232280022D31" */
    RequestId: string;
    /** @example "ImageX" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /**
     * 创建成功的迁移任务 ID
     * @example "648c15f764f3c4abd95ad044"
     */
    TaskId: string;
  };
}

export interface CreateImageMonitorRuleBody {
  /**
   * 告警规则
   * @example "-"
   */
  MonitorRule: {
    /**
     * 监控的应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppID。
     * @example "82**41"
     */
    Appid: string;
    /**
     * 监测规则。
     * @example "-"
     */
    Cond: {
      ItemCond: {
        /**
         * 聚合周期，单位为分钟。被监控指标在该指定周期内满足指标比较阈值且上报量满足样本量阈值时，才会触发告警。取值如下所示：
         *
         * - `5`
         * - `10`
         * @example 5
         */
        AggrInterval: number;
        /**
         * 样本量阈值。被监控指标超过该值时触发告警。
         * @example 200
         */
        CntThreshold?: number;
        /**
         * 指标取值函数，取值如下所示：
         *
         * - `max`：最大值
         * - `min`：最小值
         * - `avg`：平均值
         * - `pct25`：25峰值
         * - `pct50`：50峰值
         * - `pct90`：90峰值
         * - `pct99`：99峰值
         * - `sum`：总和
         *
         * :::tip
         * 各指标支持的函数参考 [veImageX 告警指标定义](https://www.volcengine.com/docs/508/1113944)。
         * :::
         * @example "avg"
         */
        Func: string;
        /**
         * 指标名称，取值参考 [veImageX 告警指标定义](https://www.volcengine.com/docs/508/1113944)。
         * @example "cdn_srate"
         */
        Item: string;
        /**
         * 指标比较方法，取值如下所示：
         *
         * - `LE`：小于等于
         * - `GE`：大于等于
         * - `INC`：环比上升大于等于
         * - `INC_LE`：环比上升小于等于
         * - `DEC`：环比下降小于等于
         * - `DEC_GE`：环比下降大于等于
         * - `HOH_INC`：与上小时同比上升大于等于
         * - `HOH_INC_LE`：与上小时同比上升小于等于
         * - `HOH_DEC`：与上小时同比下降小于等于
         * - `HOH_DEC_GE`：与上小时同比下降大于等于
         * - `DOD_INC`：与昨天同比上升大于等于
         * - `DOD_INC_LE`：与昨天同比上升小于等于
         * - `DOD_DEC`：与昨天同比下降小于等于
         * - `DOD_DEC_GE`：与昨天同比下降大于等于
         * @example "LE"
         */
        Op: string;
        /**
         * 持续周期，当监控指标在聚合周期内，连续`RepeatCnt`次满足指标比较阈值且上报量满足样本量阈值时，才会触发告警。取值如下所示：
         *
         * - `1`
         * - `3`
         * - `5`
         * @example 3
         */
        RepeatCnt: number;
        /**
         * 指标比较阈值，需要与 `CntThreshold` 同时被满足才会触发告警。
         * @example 50
         */
        Threshold: number;
      }[];
      /**
       * 多条监控规则之间的逻辑关系，取值如下所示：
       *
       * - `and`：且。表示有多条监控规则时，需满足所有监控规则才会触发告警通知。
       * - `or`：或。表示有多条监控规则时，满足其中一条监控规则就会触发告警通知。
       * @example "and"
       */
      LogicOp: string;
    };
    /**
     * 创建后是否立即开启告警，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    Enabled: boolean;
    /**
     * 维度过滤条件，具体参数请见 [Filter](#filter)。用于指定需要告警提示的维度配置。
     * @example "-"
     */
    Filter?: {
      /**
       * 过滤条件
       * @example "-"
       */
      DimFilter: {
        /**
         * 维度名称，由[公共过滤维度](https://www.volcengine.com/docs/508/1113944)和[自定义过滤维度](https://www.volcengine.com/docs/508/34554)组合而成。
         * @example "ImageType"
         */
        Dim: string;
        /**
         * 纬度值是否取反，取值如下所示：
         *
         * - `true`：指定维度的实际值不得满足 `Vals` 所有指定值
         * - `false`：（默认）维度值等于 `Vals` 中之一即可
         * @example "false"
         */
        Not?: boolean;
        /**
         * 维度取值，您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/34555)来获取。
         * @example "png"
         */
        Vals: string[];
      }[];
      /**
       * 过滤条件之间的逻辑关系，取值如下所示：
       *
       * - `and`：和
       * - `or`：或
       * @example "or"
       */
      LogicOp: string;
    };
    /**
     * 监控频率，单位为分钟。取值如下所示：
     *
     * - `5`
     * - `10`
     * - `20`
     * - `30`
     * - `40`
     * - `50`
     * @example 5
     */
    Frequency: number;
    /**
     * 拆分维度，由[公共拆分维度](https://www.volcengine.com/docs/508/1113944)和[自定义拆分维度](https://www.volcengine.com/docs/508/34554)组合而成。
     * @example "AppVer"
     */
    GroupBy?: string;
    /**
     * 告警级别，取值如下所示：
     *
     * - `warn`：警告
     * - `error`：错误
     * - `fatal`：致命
     * @example "warn"
     */
    Level: string;
    /**
     * 自定义告警规则名称
     * @example "test"
     */
    Name: string;
    /**
     * 告警通知配置。
     * @example "-"
     */
    Notification: {
      /**
       * 回调地址，`Mode` 包含 `http_callback`时，为必填。
       * @example "http://test.com"
       */
      CallbackUrl?: string;
      /**
       * 通知内容模板，模板中变量格式为 `$Name$`。Name 取值如下所示：
       *
       * - `报警名称`
       * - `报警级别`
       * - `报警App`
       * - `报警平台`
       * - `报警时间`
       * - `报警内容`
       * @example "```
       * 告警名称：$报警名称$
       * 告警级别：$报警级别$
       * 告警App：$报警App$
       * 告警平台：$报警平台$
       * 告警时间：$报警时间$
       * 告警内容：$报警内容$
       * ```"
       */
      Content: string;
      /**
       * 通知方式，仅支持取值 `http_callback`，表示回调。
       * @example "http_callback"
       */
      Mode: string[];
      /**
       * 沉默周期，单位为分钟。告警发生后，若未恢复正常，则会间隔一个沉默周期后再次重复发送一次告警通知。取值如下所示：
       *
       * - `0`
       * - `30`
       * - `60`
       * - `360`
       * @example 30
       */
      SilentDur: number;
      /**
       * 告警通知标题
       * @example "【veImageX图片服务】报警通知"
       */
      Title: string;
    };
    /**
     * 监控平台，取值如下所示：
     *
     * - `iOS`
     * - `Android`
     * - `WEB`
     * @example "Android"
     */
    OS?: string;
    /**
     * 监控阶段，取值如下所示：
     *
     * - `upload`：图片上传-上传 1.0
     * - `uploadv2`：图片上传-上传 2.0
     * - `cdn`：图片加载-下行网络监控
     * - `client`：图片加载-客户端传状态监控
     * - `sensible`：图片加载-感知指标监控
     * @example "upload"
     */
    Phase: string;
  };
}

export interface CreateImageMonitorRuleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 告警规则 ID
     * @example "R1ae373c0-0686-***-bf6f-84d529c55881"
     */
    RuleId: string;
  };
}

/** title */
export interface CreateImageRetryAuditTaskBody {
  /**
   * 失败图片 ID，您可通过调用[获取审核任务结果](https://www.volcengine.com/docs/508/1160410)查看待更新状态的图片条目 ID。
   * @example "65324fe0ac**1d9ce651054"
   */
  Entry: string;
  /**
   * 任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1160409) 获取所需的任务 ID。
   * @example "98172790****918301"
   */
  TaskId: string;
}

export interface CreateImageRetryAuditTaskRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /** @example "" */
    Result: string;
  };
}

/** CreateImageServiceReq */
export interface CreateImageServiceBody {
  /**
   * 创建服务时需要绑定的域名列表，最多支持一次绑定 10 个域名。
   * 创建服务时绑定的域名列表
   * @example "-"
   */
  Domains: {
    /**
     * 待绑定的证书 ID。
     * 证书ID
     * @example "109jo**027y3"
     */
    CertID?: string;
    /**
     * 待绑定的已备案域名。
     * 域名
     * @example "a.test.com"
     */
    Domain: string;
  }[];
  /**
   * 服务绑定的项目，默认值为 `default`。项目是在火山引擎访问控制中资源分组的概念，您需要将服务加入某一个项目中。您可以在火山引擎控制台[项目管理](https://console.volcengine.com/iam/projcetmanage/)页面中获取项目名称。
   * 服务绑定的项目。仅对ToB账号请求生效，默认default
   * @example "default"
   */
  ProjectName?: string;
  /**
   * 服务绑定的标签，默认为空，表示不绑定标签。可用于通过标签将不同业务类别、用途的存储服务进行分类管理，也适用于标签制授权和标签分账等场景。您可以在火山引擎控制台[资源管理](https://console.volcengine.com/resourcemanager/tag/resource_tag)页面新建标签。
   * 服务绑定的标签。仅对ToB账号请求生效，默认空，不绑定标签。
   * @example "-"
   */
  ResourceTags?: {
    /**
     * 标签键
     * 标签键
     * @example "userkey"
     */
    Key: string;
    /**
     * 标签值
     * @example "uservalue"
     */
    Value: string;
  }[];
  /**
   * 服务名称，最多不超过 32 个字符。创建成功后，名称和区域不支持变更。建议您使用能够标识业务的服务名。
   * 服务名称，最多不超过32个字符
   * @example "图片处理"
   */
  ServiceName: string;
  /**
   * 服务地域，取值如下所示：
   * * `cn`：中国
   * * `sg`：新加坡
   * 服务所在区域，cn或va或sg
   * @example "cn"
   */
  ServiceRegion: string;
  /**
   * 服务类型，取值如下所示：
   * * `StaticRc`：素材托管服务，支持任意类型资源的存储和分发。
   * * `Image`：图片处理服务，除支持任意类型资源的存储和分发外，还支持对图片进行实时处理。
   * 取值为StaticRc时表示创建「静态资源托管服务」，取值为Image时表示创建「图片处理服务」。默认创建「图片处理服务」
   * @example "Image"
   */
  ServiceType?: string;
}

export interface CreateImageServiceRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    Error: {
      /**
       * 错误码
       * @example "{ErrorCode}"
       */
      Code: string;
      /**
       * 错误信息
       * @example "{ErrorMessage}"
       */
      Message: string;
    };
    /**
     * 请求的Region，例如：cn-north-1
     * @example "{Region}"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "{Service}"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result: {
    /**
     * 创建的服务 ID。
     * @example "d7b84a******4a"
     */
    ServiceId: string;
    /**
     * 服务的名称。
     * @example "Test"
     */
    ServiceName: string;
  };
}

export interface CreateImageSettingRuleBody {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "56**80"
   */
  AppId: string;
  /**
   * 规则内容
   * @example "-"
   */
  Rule: {
    /**
     * 匹配条件，仅当条件匹配后规则才会生效。
     * @example "-"
     */
    Cond?: {
      /**
       * 规则条件
       * @example "-"
       */
      Conds?: {
        /**
         * 过滤维度，取值请参考[规则配置条件](https://www.volcengine.com/docs/508/65940#%E8%A7%84%E5%88%99%E9%85%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6)。
         * @example "OS"
         */
        Key?: string;
        /**
         * 操作符。支持取值：==、!=、>、>=、<、<=、in
         * @example "=="
         */
        Op?: string;
        /**
         * 配置值。`Op`为`in`时，为 Array of String 类型，否则为 String 类型。
         * 类型由Op决定，此处类型是为了方便生成 SDK
         * @example "iOS"
         */
        Value?: Record<string, unknown>;
      }[];
      /**
       * 匹配条件，取值如下所示：
       * - `AND`：表示与
       * - `OR`：表示或
       * @example "AND"
       */
      Type?: string;
    };
    /**
     * 规则名称，仅支持字母、数字、下划线，最多输入 32 个字符。
     * @example "test"
     */
    Name: string;
    /**
     * 配置值。
     * 类型由对应配置项决定，此处是为了方便生成 SDK
     * @example "1"
     */
    Value: Record<string, unknown>;
  };
  /**
   * 配置项 ID，您可以通过[调用获取配置项列表](https://www.volcengine.com/docs/508/1324617)的方式获取所需的配置项 ID。
   * @example "Sd**bc"
   */
  SettingId: string;
}

export interface CreateImageSettingRuleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 规则 ID。
     * @example "Re**21"
     */
    RuleId: string;
  };
}

/**
 * 尺寸单位。即样式画布宽度/高度的像素单位，取值为`px`。
 * 当前仅支持取值px表示像素
 * @default "px"
 * @example "px"
 */
export enum CreateImageStyleBodyUnitEnum {
  Px = "px",
}

export interface CreateImageStyleBody {
  /**
   * 样式画布的高度，取值范围为[0,1000]。
   * @example 600
   */
  Height: number;
  /**
   * 样式名称，当前对字符长度及支持字符暂无限制。
   * @example "test"
   */
  Name: string;
  /**
   * 绑定的服务 ID，用于计量计费和样式渲染结果图的存储。
   * * 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "nnsl1jf0m*"
   */
  ServiceId: string;
  /**
   * 尺寸单位。即样式画布宽度/高度的像素单位，取值为`px`。
   * 当前仅支持取值px表示像素
   * @default "px"
   * @example "px"
   */
  Unit?: CreateImageStyleBodyUnitEnum;
  /**
   * 样式画布的宽度，取值范围为[0,1000]。
   * @example 400
   */
  Width: number;
}

export interface CreateImageStyleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "CreateImageStyle"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071512581601021219801626B46052"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 创建好的样式 ID。
     * @example "62d0f3e8a1520596600b786*"
     */
    StyleId: string;
  };
}

export interface CreateImageTemplateBody {
  /**
   * 指定图像自适应配置。
   * 图像格式自适应配置
   * @example "-"
   */
  AdaptiveFmt?: {
    /**
     * 动图自适应，具体实现说明参考[图像自适应压缩](https://www.volcengine.com/docs/508/75733)。取值如下所示：
     * 取值如下所示：
     * - `webp`：若 HTTP 请求头中 accept 头部包含 image/webp 的字符串匹配，则返回 webp 格式。否则返回 `OutputFormat` 指定格式。
     * - `heic`：若 HTTP 请求头中 accept 头部包含 image/heic 的字符串匹配，则返回 webp 格式。否则返回 `OutputFormat` 指定格式。
     * - `avif`：若 HTTP 请求头中 accept 头部包含 image/avif 的字符串匹配，则返回 webp 格式。否则返回 `OutputFormat` 指定格式。
     * - `dynamic`：智能模式，即根据请求头中 MIME 查找具体格式，查找成功，则返回该格式，否则返回 `OutputFormat` 指定格式。
     * 动图自适应，可选"webp"/"heic"/"avif"/"dynamic"
     * @example "webp"
     */
    Animated?: string;
    /**
     * 静图自适应，具体实现说明参考[图像自适应压缩](https://www.volcengine.com/docs/508/75733)。取值如下所示：
     * - `webp`：若 HTTP 请求头中 accept 头部包含 image/webp 的字符串匹配，则返回 webp 格式。否则返回 `OutputFormat` 指定格式。
     * - `heic`：若 HTTP 请求头中 accept 头部包含 image/heic 的字符串匹配，则返回 webp 格式。否则返回 `OutputFormat` 指定格式。
     * - `avif`：若 HTTP 请求头中 accept 头部包含 image/avif 的字符串匹配，则返回 webp 格式。否则返回 `OutputFormat` 指定格式。
     * - `dynamic`：智能模式，即根据请求头中 MIME 查找具体格式，查找成功，则返回该格式，否则返回 `OutputFormat` 指定格式。
     * 静图自适应，可选"webp"/"heic"/"avif"/"dynamic"
     * @example "webp"
     */
    Static?: string;
  };
  /**
   * 仅当指定输出格式为静图时，配置有效。
   * 动图截帧配置。
   * @example "-"
   */
  AnimExtract?: {
    /**
     * 动图截帧策略，取值如下所示：
     * - `0`：智能模式，从动图首帧开始逐帧检测当前帧亮度是否大于 80，并最终返回第一个亮度大于 80 的帧。
     * - `1`：全局最优，从动图首帧开始逐帧检测并返回亮度最大的一帧。
     * @example 0
     */
    Strategy?: number;
    /**
     * 动图异步处理超时时间，单位为 ms。默认为 1500，取值负数时表示无超时时间。若在指定时间范围内处理未完成则返回失败。
     * @example 1500
     */
    Timeout?: number;
  };
  /**
   * 仅当指定输出格式为动图时，配置有效。
   * 视频转动图配置。
   * 视频转动图配置
   * @example "-"
   */
  Animation?: {
    /**
     * 降级类型，取值如下所示：
     * - `image`：抽取一帧降级返回
     * - `video`：直接返回原视频降级
     * 降级类型：  image：抽取一帧降级返回 video：直接返回原视频降级
     * @example "vedio"
     */
    DemotionType: string;
    /**
     * 动图时长，单位为 ms。
     * 动图时长(ms)
     * @example 1000
     */
    Duration: number;
    /**
     * 帧率，1 秒 X 帧。仅当`SelectFrameMode`取值为`fps`时需要配置。
     * 帧率，1秒X帧
     * @example 10
     */
    FramePerSecond: number;
    /**
     * 秒数，X 秒 1 帧。仅当`SelectFrameMode`取值为`spf`时需要配置。
     * X秒1帧
     * @example 1
     */
    SecondPerFrame: number;
    /**
     * 抽帧策略，取值如下所示：
     * - `fps`：抽帧频率，1 秒 X 帧。
     * - `spf`：抽帧间隔，X 秒 1 帧。
     * - `key`：抽取关键帧。
     * 抽帧策略： fps：frame per second，1秒X帧 spf：second per frame，X秒1帧 key：抽取关键帧
     * @example "fps"
     */
    SelectFrameMode: string;
    /**
     * 动图起始时间戳，单位为 ms。
     * 动图起始时间戳(ms)
     * @example 6
     */
    StartTime: number;
    /**
     * 同步等待时长，单位为 s，超时未完成则根据`DemotionType`降级。
     * 同步等待时长(s)，超时未完成则根据DemotionType降级
     * @example 5
     */
    WaitTime: number;
  };
  /**
   * 模板计划使用的降级格式，仅对 heic 静图有效。取值如下所示：
   * - `webp`
   * - `jpeg`
   * 模板计划使用的降级格式，仅对heic静图有效
   * @example "jpeg"
   */
  DemotionFormat?: string;
  /**
   * 是否直接更新模板，取值如下所示：
   * * `true`：已有的线上模板会同步更新，该操作直接生效；
   * * `false`：新增一个模板，已有模板不受影响。
   * 是否直接更新模板。如果为true，已有的线上模板会同步更新，直接生效；如果为false，会新增一个模板，已有模板不受影响。
   * @example "false"
   */
  DoUpdate?: boolean;
  /**
   * 对结果图片执行的画质评估配置
   * @example "-"
   */
  Evals?: {
    /**
     * 评估名，画质评估固定取值为 `quality`。
     * @example "quality"
     */
    Name: string;
    /**
     * 画质评估参数配置内容，Key 为 参数名称，Value 为 参数配置。具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。
     * @example "{
     * 		"ratio":70,
     * 		"types":[
     * 				"vqscore",
     *         "aesthetic",
     *         "noise"
     *     ]
     * }"
     */
    Param: Record<string, Record<string, unknown>>;
  }[];
  /**
   * 仅当指定输出格式非动图时，配置有效。
   * 保留 EXIF 信息配置。
   * @example "-"
   */
  Exif?: {
    /**
     * 是否开启保留全部 EXIF 信息。取值如下所示：
     * - `true`：是
     * - `false`：否
     * @example "false"
     */
    AutoOrientOff?: boolean;
    /**
     * 是否开启保留全部 EXIF 信息，取值如下所示：
     * - `true`：是
     * - `false`：否
     * @example "true"
     */
    ExifReserve?: boolean;
    /**
     * 保留部分 EXIF 信息的具体内容，多个之间用`,`分隔。更多信息请参考[标准 EXIF 标签](https://exiv2.org/tags.html)。
     * @example "["Orientation", "DateTime"]"
     */
    ExifRetainNames?: string[];
  };
  /**
   * 对图片的编辑操作。
   * 对图片的编辑操作
   * @example "-"
   */
  Filters?: {
    /**
     * 操作名称，具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。
     * 编辑操作的名称
     * @example "bright"
     */
    Name: string;
    /**
     * 操作参数配置内容，Key 为 参数名称，Value 为 参数配置。具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。
     * 编辑操作的参数
     * @example "{ "bright":26 }"
     */
    Param: Record<string, Record<string, unknown>>;
  }[];
  /**
   * 对图片编码使用的质量参数，取值范围为 [1,100]，默认为 75。
   * 对图片编码使用的质量参数，默认为0
   * @example 75
   */
  OuputQuality?: number;
  /**
   * 用于图片服务输出时的图片编码自定义参数，键值均为 string。
   * * 取值`png.use_quant`表示是否开启 png quant 压缩，取值为`true`表示开启，取值为`false`表示关闭；
   * * 取值`heic.sync`表示使用 heic 同步编码，取值为`true`表示同步；
   * * 取值`heic.timeout`表示 heic 同步编码的超时时间，比如 20。
   * 用于图片服务输出时的图片编码
   * @example "-"
   */
  OutputExtra?: {
    "avif.demfmt"?: string;
    /**
     * 仅当OutputFormat取值为heic时配置有效
     * 是否带透明通道编码，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * 仅当`OutputFormat`取值为`heic`时配置有效
     * 是否带透明通道编码，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * @example "false"
     */
    "heic.alpha.reserve"?: string;
    /** @example "1" */
    "heic.aq.mode"?: string;
    "heic.demfmt"?: string;
    /**
     * 仅当OutputFormat取值为heic时配置有效
     * 色位深度，值越大则提供的图像色彩范围越多，使图像颜色变化的更细腻，但图像体积也会增大。取值如下所示：
     *
     * - `8`：8bit
     * - `10`：10bit
     * 仅当`OutputFormat`取值为`heic`时配置有效
     * 色位深度，值越大则提供的图像色彩范围越多，使图像颜色变化的更细腻，但图像体积也会增大。取值如下所示：
     *
     * - `8`：8bit
     * - `10`：10bit
     * @example "8"
     */
    "heic.encode.depth"?: string;
    "heic.jpeg.size.reserve"?: string;
    /** @example "1000000" */
    "heic.quality.adapt.pixlimit"?: string;
    /** @example "3" */
    "heic.quality.adapt.version"?: string;
    /**
     * 仅当OutputFormat取值为heic时配置有效
     * 是否开启 ROI 编码，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * 仅当`OutputFormat`取值为`heic`时配置有效
     * 是否开启 ROI 编码，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * @example "false"
     */
    "heic.roi"?: string;
    /**
     * 仅当OutputFormat取值为heic时配置有效
     * 缩略图比例。在原图基础上，编码缩小一定倍数的小分辨率图片，跟大图一起封装在同一张图片中，缩小倍数不建议过大，一般为 5~10 之间相对合理。
     * 仅当`OutputFormat`取值为`heic`时配置有效
     * 缩略图比例。在原图基础上，编码缩小一定倍数的小分辨率图片，跟大图一起封装在同一张图片中，缩小倍数不建议过大，一般为 5~10 之间相对合理。
     * @example "5"
     */
    "heic.thumb.ratio"?: string;
    /**
     * jpeg 的 alpha 图片是否降级为 png，指定为 `png` 时表示降级为 png 格式。缺省情况下默认为空，表示不降级。
     * @example "png"
     */
    "jpeg.alpha.demotion"?: string;
    /**
     * 是否采用 jpeg 渐进编码格式，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * 是否采用 jpeg 渐进编码格式，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * @example "false"
     */
    "jpeg.progressive"?: string;
    /** @example "1000000" */
    "jpeg.quality.adapt.pixlimit"?: string;
    /** @example "3" */
    "jpeg.quality.adapt.version"?: string;
    /**
     * 指定 jpeg 体积的输出大小，需同时设置 `jpeg.size.fixed.padding`，二者缺一不可。
     * 指定输出体积大小，单位为 Byte。
     * @example "10000"
     */
    "jpeg.size.fixed"?: string;
    /**
     * 指定 jpeg 体积的输出大小，需同时指定 `jpeg.size.fixed`，二者缺一不可。
     * 体积填充方式，取值固定为 `append`。
     * @example "append"
     */
    "jpeg.size.fixed.padding"?: string;
    "jpeg.size.recover"?: string;
    /**
     * 是否压缩颜色空间，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * 是否压缩颜色空间，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * @example "false"
     */
    "png.use_quant"?: string;
    "vvic.aq.mode"?: string;
    "vvic.quality.adapt.pixlimit"?: string;
    "vvic.quality.adapt.version"?: string;
    "vvic.roi"?: string;
    /** @example "1000000" */
    "webp.quality.adapt.pixlimit"?: string;
    /** @example "3" */
    "webp.quality.adapt.version"?: string;
  };
  /**
   * 该模板计划使用的输出格式。
   * * 取值为`image`，表示输出原格式。
   * * 支持输出的静图格式：`png`、`jpeg`、`heic`、`avif`、`webp`、`vvic`。
   * * 支持输出的动图格式：`awebp`、`heif`、`avis`。
   * 该模板计划使用的输出格式
   * @example "image"
   */
  OutputFormat?: string;
  /**
   * 图片模板使用的参数列表，URL 中下发参数的顺序需要跟列表中的保持一致。
   * 图片模板使用的参数列表，URL中下发参数的顺序需要跟列表中的保持一致
   * @example " ["snapshot_time"]"
   */
  Parameters?: string[];
  /**
   * 是否对图片结果缓存，默认为空。取值如下所示：
   * - `read_write`：对结果读写
   * - `read_only`：对结果只读
   * 处理结果持久化
   * @example "read_write"
   */
  Persistence?: string;
  /**
   * 压缩质量模型，默认为空，表示使用绝对质量。取值 `relative` 时，表示使用相对质量，原图为 JPEG 有效。
   * 绝对质量/相对质量
   * @example "relative"
   */
  QualityMode?: string;
  /**
   * URL 的失效期，为 Unix 时间戳，一般配置为在 URL 中通过模板参数动态下发。
   * URL的失效期，为Unix时间戳，一般配置为通过模板参数下发
   * @example "1636967882"
   */
  ReqDeadline?: string;
  /**
   * 仅当指定输出格式为静图时，配置有效。
   * 视频截帧配置。
   * 视频截帧配置
   * @example "-"
   */
  Snapshot?: {
    /**
     * 当 `Type` 为 `offset` 时，在`TimeOffsetMs` 和 `TimeOffsetMsStr` 之间二选一。
     * 指定截图时间，取值范围为[0,视频时长]，单位为 ms。默认为 0，表示返回首帧。若指定时间 > 视频长度，则返回视频最后一帧。
     * 截图的时间戳(ms)
     * @format int64
     * @example 0
     */
    TimeOffsetMs?: number;
    /**
     * 当 `Type` 为 `offset` 时，在`TimeOffsetMs` 和 `TimeOffsetMsStr` 之间二选一。
     * 指定截图时间为使用模板参数动态下发的方式，取值固定为`${snapshot_time}`。
     * @example "${snapshot_time}"
     */
    TimeOffsetMsStr?: string;
    /**
     * 视频截帧类型，取值如下所示：
     * - `default`：智能模式，从视频首帧开始逐帧地检测当前帧是否为黑屏，并最终返回第一个非黑屏的帧。
     * - `offset`：指定时间戳模式，返回指定截帧时间的那一帧。可在 `TimeOffsetMs` 和 `TimeOffsetMsStr` 之间二选一。
     * 截图类型，可选"default"/"offset"，智能截图和指定时间戳截图
     * @example "default"
     */
    Type: string;
  };
  /**
   * 是否同步处理，仅对 heic 静图有效。取值如下所示：
   * - `true`：是
   * - `false`：否
   * 是否同步处理，仅对heic图有效
   * @example "true"
   */
  Sync?: boolean;
  /**
   * 模板名称，必须使用该服务的图片模板固定前缀。模板名称能包含的字符正则集合为[a-zA-Z0-9_-]。
   * :::tip
   * 您可以通过调用[获取单个服务信息](https://www.volcengine.com/docs/508/9358)接口的查看返回参数`TemplatePrefix`的值。
   * :::
   * 模板名称，必须使用该服务的图片模板固定前缀，具体参考GetImageService接口的返回参数TemplatePrefix。模板名称能包含的字符正则集合为[a-zA-Z0-9_-]
   * @example "tplv-e4**c0-test"
   */
  TemplateName: string;
  /**
   * 是否为临时使用，取值如下所示：
   * - `true`：是
   * - `false`：否
   * @example "true"
   */
  Temporary?: boolean;
  /**
   * 是否开启鉴权，取值如下所示：
   * * `true`：开启鉴权。
   * * `false`：（默认）关闭鉴权。
   * :::tip
   * 一般当通过模板参数下发敏感信息时，比如文字水印内容、URL 失效期，需要对图片 URL 鉴权保护，防止内容被篡改。
   * :::
   * 是否开启鉴权，一般当通过模板参数下发敏感信息时，比如文字水印内容、URL失效期，需要对图片URL鉴权保护，防止内容被篡改
   * @example "false"
   */
  WithSig?: boolean;
}

export interface CreateImageTemplateQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface CreateImageTemplateRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 模板的创建时间。
     * 模板的创建时间
     * @example "2023-11-15 10:50:46"
     */
    CreateAt: string;
    /**
     * 服务 ID。
     * 服务id
     * @example "e4**c0"
     */
    ServiceId: string;
    /**
     * 创建的模板名称。如果基于原模板做模板名称的更新，则会生成一个新模板。
     * 创建的模板名称，如果基于原模板更新，则会生成一个新模板
     * @example "tplv-e4**c0-test-v1"
     */
    TemplateName: string;
    /**
     * 不支持的 filter 处理参数。
     * 不支持的filter参数
     * @example "-"
     */
    Unsupported: {
      /**
       * 操作名称
       * filter名称
       * @example "bright"
       */
      Name: string;
      /**
       * 参数对象
       * 参数对象
       * @example "{
       * 	"bright":26.30910
       * }"
       */
      Param: Record<string, Record<string, unknown>>;
    }[];
  };
}

/** title */
export interface CreateImageTemplatesByImportBody {
  /**
   * 模板名称冲突时是否重命名（增加版本号）。
   * - `true`：是，有重名模板时，将对其增加版本号后再导入。
   * - `false`：（默认）否。将忽略重名模板，不执行导入。
   * 模板名称冲突时是否重命名(增加版本号)。默认否，忽略重名模板，不做导入
   * @example "false"
   */
  Rename?: boolean;
  /**
   * 模板导入的目标服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * 模板导入目标服务id
   * @example "n8**e0"
   */
  ServiceId: string;
  /**
   * 待导入的模板 JSON 内容列表。
   * 待导入的模板JSON内容列表
   * @example "["{\"name\":\"tplv-n8**e0-13\",\"output\":{\"quality\":30,\"format\":\"jpeg\",\"extra\":{\"heic.alpha.reserve\":\"true\"},\"exif\":{\"auto_orient_off\":true}},\"input\":{},\"max_age\":2592000,\"filters\":[]}"]"
   */
  Templates: string[];
}

export interface CreateImageTemplatesByImportRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "CreateImageTemplatesByImport"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "202208251904550102081211031FE743B0"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 导入结果
     * 导入结果
     * @example "-"
     */
    ImportResults: {
      /**
       * 导入后模板名称。当`Success`取值为`true`时有值。
       * 导入后模版名称。Success=true时有值
       * @example "tplv-l7**px-17"
       */
      ImportedName: string;
      /**
       * 导入失败原因。当`Success`取值为`false`时有值。
       * 导入失败原因。Success=false时有值
       * @example "duplicate template name tplv-n8**e0-13"
       */
      Msg: string;
      /**
       * 导入是否成功，取值如下所示：
       * - `true`：导入成功
       * - `false`：导入失败
       * 导入是否成功
       * @example "true"
       */
      Success: boolean;
      /**
       * 源模板名称。
       * 源模板名称
       * @example "tplv-n8**e0-13"
       */
      TemplateName: string;
    }[];
  };
}

export interface CreateImageTranscodeCallbackBody {
  /**
   * 任务条目 ID
   * @example "649a9332***0e9cc0a0ed"
   */
  EntryId: string;
  /**
   * 地域。
   * @example "cn"
   */
  Region?: string;
}

export interface CreateImageTranscodeCallbackRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

/** title */
export interface CreateImageTranscodeQueueBody {
  /**
   * 队列回调设置
   * @example "-"
   */
  CallbackConf?: {
    /**
     * 业务自定义回调参数，将在回调消息的`callback_args`中透传出去。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/1104726#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
     * @example "product id"
     */
    Args?: string;
    /**
     * 回调数据格式。取值如下所示：
     *
     * - `XML`
     * - `JSON`（默认）
     * @example "JSON"
     */
    DataFormat?: string;
    /**
     * 回调 HTTP 请求地址，用于接收转码结果详情。支持使用 https 和 http 协议。
     * 若配置CallbackConf则不为空
     * @example "https://demo.com"
     */
    Endpoint: string;
    /**
     * 回调方式。仅支持取值`HTTP`。
     * 若配置CallbackConf则不为空
     * @example "HTTP"
     */
    Method: string;
  };
  /**
   * 自定义任务队列描述，可用于备注该队列的用途。
   * @example "离线转码"
   */
  Desc?: string;
  /**
   * 是否启动队列，开始执行离线转码操作。取值如下所示：
   * - `true`：启动
   * - `false`：不启动
   * @example "false"
   */
  IsStart: boolean;
  /**
   * 自定义任务队列名称
   * @example "offline"
   */
  Name: string;
  /**
   * 队列区域。默认当前区域。ToB支持取值：cn、va、sg。
   * @example "cn"
   */
  Region?: string;
}

export interface CreateImageTranscodeQueueRes {
  ResponseMetadata: {
    /** @example "CreateImageTranscodeQueue" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务 ID
     * @example "649a9dbc32**064d44cf5b0"
     */
    QueueId: string;
  };
}

/** title */
export interface CreateImageTranscodeTaskBody {
  /**
   * 任务回调配置。缺省情况下默认使用队列回调配置。
   * @example "-"
   */
  CallbackConf?: {
    /**
     * 业务自定义回调参数，将在回调消息的`callback_args`中透传出去。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/1104726#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
     * @example "product id"
     */
    Args?: string;
    /**
     * 回调数据格式。取值如下所示：
     *
     * - `XML`
     * - `JSON`（默认）
     * @example "JSON"
     */
    DataFormat?: string;
    /**
     * 回调 HTTP 请求地址，用于接收转码结果详情。支持使用 https 和 http 协议。
     * Method=MQ时取值rmq:{topic}/{cluster}
     * @example "https://demo.com"
     */
    Endpoint: string;
    /**
     * 回调方式。仅支持取值`HTTP`。
     * 还支持取值 MQ
     * @example "HTTP"
     */
    Method: string;
    /**
     * 回调的维度类型，缺省情况下按照条目级别进行回调。取值如下所示：
     * - `task`：将按照任务级别进行回调。可分批回调，一个批次内最多一次性可回调 5000 条图片转码条目执行信息。
     * - `entry`：将按照条目级别进行回调。当该条目执行完毕，将立即产生回调。
     * 参数类型。
     * @example "task"
     */
    Type?: string;
  };
  /**
   * `DataList`和`Filelist`二选一必填，同时配置时，`DataList`优先生效。
   *
   * 待转码的图片 uri 或 url 列表，建议最多不超过 10 万条。
   *
   * - 若`DataType`取值`uri`，此处请传入指定 ServiceId 下的存储 URI。
   * - 若`DataType`取值`url`，此处请传入公网可访问的 URL。
   * 数据列表。
   * @example "["http://demo.com/example.png"]"
   */
  DataList?: string[];
  /**
   * 数据类型，取值如下所示：
   *
   * - `uri`：指定 ServiceId 下存储 URI。
   * - `url`：公网可访问的 URL。
   * @example "uri"
   */
  DataType: string;
  /**
   * 转码是否保留 exif。取值如下所示：
   *
   * - `true`：保留
   * - `false`：（默认）不保留
   * @example "false"
   */
  EnableExif?: boolean;
  /**
   * `DataList`和`Filelist`二选一必填，同时配置时，`DataList`优先生效。
   *
   * 待转码的图片 uri 或 url 文件列表。具体使用方式如下：
   *
   * 1. 在 txt、csv 文件内填写指定数据类型的待转码图片地址，每行填写一个，建议最多不超过 10 万条。
   * 2. 将该文件上传至指定服务后，获取其存储 URI。
   * 3. 将该存储 URI，传入 `FileList`。
   * 文件列表。
   * @example "["tos-cn-i-5s***fo/a.txt","tos-cn-i-5s***fo/uridemo.txt"]"
   */
  FileList?: string[];
  /**
   * 任务队列名称 ID。缺省情况下提交至账号默认任务队列。您可通过调用[GetImageTranscodeQueues](https://www.volcengine.com/docs/508/1160404)获取该账号下全部任务队列 ID。
   * @example "649a9dbc3***64d44cf5b0"
   */
  QueueId?: string;
  /**
   * 转码产物的存储 Key 列表，仅当 `DataList` 不为空时有效，长度需与`DataList`长度一致。不传时默认使用固定规则生成产物的存储 Key。
   *
   * 存储 Key 详细命名规范请参看 [veImageX 存储 Key 通用字符规则](https://www.volcengine.com/docs/508/1458331)。
   * @example "["name1","name2"]"
   */
  ResKeyList?: string[];
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "5s****fo"
   */
  ServiceId: string;
  /**
   * 转码模板。您可通过调用 [GetAllImageTemplates](https://www.volcengine.com/docs/508/9386) 获取指定服务下全部模版信息。
   * @example "tplv-5s****fo-33.jpeg"
   */
  Template: string;
}

export interface CreateImageTranscodeTaskRes {
  ResponseMetadata: {
    /** @example "CreateImageTranscodeTask" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务 ID
     * @example "649b9d3****5537684010a7"
     */
    TaskId: string;
  };
}

export interface CreateTemplatesFromBinBody {
  /**
   * 待恢复模板的名称。您可以通过调用[获取回收站中所有模板](https://www.volcengine.com/docs/508/132241)获取所需的模板名称。
   * @example "["tplv-xyz-xxx@2022-08-23T20:25:26+08:00"]"
   */
  TemplateNames: string[];
}

export interface CreateTemplatesFromBinQuery {
  /**
   * 待恢复模板对应的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface CreateTemplatesFromBinRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "CreateTemplatesFromBin"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 返回各模板恢复的结果。
     * @example "-"
     */
    Results: {
      /**
       * 回收站中的模板名。
       * @example "tplv-xyz-xxx@2022-08-23T20:25:26+08:00"
       */
      BinName: string;
      /**
       * 恢复后的模板名。
       * @example "tplv-xyz-xxx"
       */
      NewName: string;
      /**
       * 是否恢复成功，取值如下所示：
       * - `true`：恢复成功
       * - `false`：恢复不成功
       * @example true
       */
      Success: boolean;
    }[];
  };
}

/** 描述 */
export interface DelDomainBody {
  /**
   * 待删除的域名，您可以通过 [获取服务下全部域名](https://www.volcengine.com/docs/508/9379) 获取服务下域名信息。
   * @example "test.imagex.com"
   */
  Domain: string;
}

export interface DelDomainQuery {
  /**
   * 待删除域名的服务 ID。
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "sedf**sdf"
   */
  ServiceId: string;
}

export interface DelDomainRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

/** title */
export interface DeleteImageAnalyzeTaskBody {
  /**
   * 待删除的任务 ID，您可以通过调用 [GetImageAnalyzeTasks](https://www.volcengine.com/docs/508/1160417) 获取指定地区全部离线评估任务 ID。
   * @example "987390***018230"
   */
  TaskId: string;
}

export interface DeleteImageAnalyzeTaskRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface DeleteImageAnalyzeTaskRunBody {
  /**
   * 执行 ID，您可以通过调用 [GetImageAnalyzeResult](https://www.volcengine.com/docs/508/1160419) 获取该任务全部的执行记录查看执行 ID。
   * @example "653a1770f**8b3ec116baa48"
   */
  RunId: string;
  /**
   * 待删除执行记录的任务 ID，您可以通过调用 [GetImageAnalyzeTasks](https://www.volcengine.com/docs/508/1160417) 获取指定地区全部离线评估任务 ID。
   * @example "6503f977**ee077722be798e"
   */
  TaskId: string;
}

export interface DeleteImageAnalyzeTaskRunRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface DeleteImageAuditResultBody {
  /**
   * 审核结果 ID，您可通过调用[获取审核任务结果](https://www.volcengine.com/docs/508/1160410)查看待更新状态的图片条目 ID。
   * @example "65324fe0ac**1d9ce651054"
   */
  EntryId: string;
  /**
   * 任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1160409) 获取所需的任务 ID。
   * @example "65324fe0ac**d9ce65104e"
   */
  TaskId: string;
}

export interface DeleteImageAuditResultRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface DeleteImageBackgroundColorsBody {
  /**
   * 待删除的颜色列表
   * @example "["#EE5C3D","#E55D8F","#bddcbe","#00000000","#C9CDD4","#FFA841"]"
   */
  Colors: string[];
}

export interface DeleteImageBackgroundColorsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "DeleteImageBackgroundColors"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071513305401021204519717A8DFCF"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 删除失败的颜色列表。若全部删除失败，则接口将返回失败。
     * 若全部删除失败，则接口将返回失败
     * @example "["#EE5C3D","#E55D8F","#bddcbe","#00000000","#C9CDD4","#FFA841"]"
     */
    FailedList: string[];
  };
}

/**
 * 要素类型，取值如下所示：
 * * image：图片要素；
 * * background：背景要素；
 * * mask：蒙版要素。
 * 取值image表示图片要素，background表示背景要素
 * @example "background"
 */
export enum DeleteImageElementsBodyTypeEnum {
  Image = "image",
  Background = "background",
}

/** title */
export interface DeleteImageElementsBody {
  /**
   * 待删除的 StoreUri 列表。
   * @example "["tos-cn-i-nnsl1jf0*m/mofang/16e5f3**be5bcbece.png"]"
   */
  ImageList: string[];
  /**
   * 要素类型，取值如下所示：
   * * image：图片要素；
   * * background：背景要素；
   * * mask：蒙版要素。
   * 取值image表示图片要素，background表示背景要素
   * @example "background"
   */
  Type: DeleteImageElementsBodyTypeEnum;
}

export interface DeleteImageElementsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "DeleteImageElements"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "202207181437480102121020921AF04658"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 删除失败的 StoreUri 列表。若全部删除失败，则接口将返回失败。
     * 若全部删除失败，则接口将返回失败
     * @example "["tos-cn-i-nnsl1jf0*m/mofang/16e5f3**be5bcbece.png"]"
     */
    FailedList: string[];
  };
}

export interface DeleteImageMigrateTaskQuery {
  /**
   * 任务地区（即任务目标服务的地区），默认空，返回国内任务。
   *
   * - `cn`：国内
   * - `sg`：新加坡
   * @example "cn"
   */
  Region?: string;
  /**
   * 仅当任务状态为非`Running`时生效。
   * 任务 ID，请参考 [GetImageMigrateTasks](https://www.volcengine.com/docs/508/1108670)获取返回的任务 ID。
   * @example "648c15f764f3c4abd95ad044"
   */
  TaskId: string;
}

export interface DeleteImageMigrateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface DeleteImageMonitorRecordsBody {
  /**
   * 待删除的报警记录 Marker 列表，您可通过调用 [GetImageAlertRecords](https://www.volcengine.com/docs/508/1112187) 获取所需值。
   * @example "["9279208***9021"]"
   */
  Markers: string[];
}

export interface DeleteImageMonitorRecordsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 成功删除的报警记录列表
     * @example "["9279208***9021"]"
     */
    DeletedRecords: string[];
  };
}

export interface DeleteImageMonitorRulesBody {
  /**
   * 待删除的告警规则 ID 列表，您可以调用 [GetImageMonitorRules](https://www.volcengine.com/docs/508/1112186)获取所需的告警规则 ID。
   * @example "["193910***193791"]"
   */
  RuleIds: string[];
}

export interface DeleteImageMonitorRulesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 成功删除的告警规则 ID 列表
     * @example "["193910***193791"]"
     */
    DeletedRules: string[];
  };
}

export interface DeleteImageServiceQuery {
  /**
   * 待删除的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "g9y**8hu"
   */
  ServiceId: string;
}

export interface DeleteImageServiceRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface DeleteImageSettingRuleBody {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "89**12"
   */
  AppId: string;
  /**
   * 待删除的规则 ID，您可以通过调用[获取规则列表](https://www.volcengine.com/docs/508/1324618)的方式获取所需的规则 ID。
   * @example "Re**ef"
   */
  RuleId: string;
  /**
   * 配置项 ID，您可以通过[调用获取配置项列表](https://www.volcengine.com/docs/508/1324617)的方式获取所需的配置项 ID。
   * @example "S8**ks"
   */
  SettingId: string;
}

export interface DeleteImageSettingRuleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: Record<string, unknown>;
}

/** title */
export interface DeleteImageStyleBody {
  /**
   * 待删除的样式 ID。
   * @example "62d0f3e8a1520596600b786*"
   */
  StyleId: string;
}

export interface DeleteImageStyleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "DeleteImageStyle"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "202207151702260102120720960FB7D133"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: Record<string, unknown>;
}

/** title */
export interface DeleteImageTemplateBody {
  /**
   * 待删除模板名称，最大限制为 100。您可以通过调用[获取服务下所有图片模板](https://www.volcengine.com/docs/508/9386)获取所需的模板名称。
   * 待删除模板名称，不能超过100个。模板需要从属于参数中的service。
   * @example "["TemplateName1", "TemplateName2"]"
   */
  TemplateNames: string[];
}

export interface DeleteImageTemplateQuery {
  /**
   * 待删除模板对应的服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface DeleteImageTemplateRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 成功删除的模板名称。
     * * 如果仅指定删除单个模板，若删除失败直接返回错误。
     * * 如果指定删除多个模板，若全部删除失败则返回错误；否则将返回成功删除的模板名称。
     * 成功删除的模板名称。如果入参为单个模板，删除失败直接返回错误。如果为多个模板，全部删除失败，返回错误；否则返回成功删除的模板。
     * @example "["TemplateName1"]"
     */
    TemplateNames: string[];
  };
}

export interface DeleteImageTranscodeDetailBody {
  /**
   * 待删除的任务条目 ID 列表，您可通过调用[GetImageTranscodeDetails](https://www.volcengine.com/docs/508/1107749)获取该账号下全部执行任务条目 ID。
   * 待删除的entry ID列表
   * @example "6486g82***82s73h01a"
   */
  Entries?: string[];
  /**
   * 待删除的任务条目 ID，您可通过调用[GetImageTranscodeDetails](https://www.volcengine.com/docs/508/1107749)获取该账号下全部执行任务条目 ID。
   * 待删除的entry ID
   * @example "649a9332***80e9cc0a0ec"
   */
  EntryId?: string;
}

export interface DeleteImageTranscodeDetailRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface DeleteImageTranscodeQueueBody {
  /**
   * 待删除的队列 ID，您可通过调用[GetImageTranscodeQueues](https://www.volcengine.com/docs/508/1107341)获取该账号下全部任务队列 ID。
   * 账号内置默认任务队列不允许被删除。
   * @example "649a9dbc32**64d44cf5b0"
   */
  QueueId: string;
}

export interface DeleteImageTranscodeQueueRes {
  ResponseMetadata: {
    /** @example "DeleteImageTranscodeQueue" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

export interface DeleteImageUploadFilesBody {
  /**
   * 待删除文件的存储 URI 列表，最多传 1000 个。您可以通过调用[获取服务下的上传文件](https://www.volcengine.com/docs/508/9392)来获取所需的文件 URI。
   * @example "["tos-cn-i-36m*6tf/demo.png"]"
   */
  StoreUris: string[];
  /**
   * 待删除文件的存储版本 ID。传值时需要和 `StoreUris` 一一对应。您可在 veImageX 控制台资源管理查看文件版本号，或调用 [GetImageStorageVersionFiles](https://www.volcengine.com/docs/508/1359366) 查询服务下所有文件的版本信息。
   *
   * :::warning
   * 当删除文件未指定 StoreVersions，那么删除逻辑将根据版本控制的状态产生以下差异。
   * - 若此时版本控制为未开启，则 StoreUris 对应文件将被永久删除，不可恢复。
   * - 若此时版本控制为开启，则 StoreUris 对应文件未被真正删除，该文件可以被恢复，同时将增加一个[删除标记](https://www.volcengine.com/docs/508/1359410)用于标识该文件为删除状态。
   * - 若此时版本控制为暂停，则根据版本 ID 是否为 null 而有以下差异：
   * 	- 若文件的版本 ID 为 null，则 StoreUris 对应文件被真正删除，不可恢复，同时将增加一个[删除标记](https://www.volcengine.com/docs/508/1359410)用于标识该文件为删除状态。
   * 	- 若文件的版本 ID 不为 null，则 StoreUris 对应文件未被真正删除，而是转换为历史版本保留。该文件可以被恢复，同时将增加一个[删除标记](https://www.volcengine.com/docs/508/1359410)。
   * :::
   * @example "["56DE530B6D7AAD3DA1F0"]"
   */
  StoreVersions?: string[];
}

export interface DeleteImageUploadFilesQuery {
  /**
   * 待删除文件所在的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "ui**jh"
   */
  ServiceId: string;
}

export interface DeleteImageUploadFilesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 文件成功删除的 URI 列表
     * @example "["tos-cn-i-36m*6tf/demo.png"]"
     */
    DeletedFiles: string[];
    /**
     * 已删除文件的版本列表。
     * @example "["56DE530B6D7AAD3DA1F0"]"
     */
    DeletedFilesVersion?: string[];
    /**
     * 文件不存在的无效 URI 列表
     * @example "["uri2"]"
     */
    InvaildFiles: string[];
    /**
     * 无效文件版本列表。
     * @example "["56DE530B6D7AAD3DA1F0"]"
     */
    InvaildFilesVersion?: string[];
  };
}

export interface DeleteTemplatesFromBinBody {
  /**
   * 待删除模板名称。您可以通过调用[获取回收站中所有模板](https://www.volcengine.com/docs/508/132241)获取所需的模板名称。
   * @example "["tplv-xyz-xxx@2022-08-23T20:25:26+08:00"]"
   */
  TemplateNames: string[];
}

export interface DeleteTemplatesFromBinQuery {
  /**
   * 待删除模板对应的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface DeleteTemplatesFromBinRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "DeleteTemplatesFromBin"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 成功删除的模板名称。
     * * 如果指定为单个模板，删除失败直接返回错误。
     * * 如果指定多个模板，如果全部删除失败则返回错误；否则返回成功删除的模板。
     * @example "["tplv-xyz-xxx@2022-08-23T20:25:26+08:00"]"
     */
    TemplateNames: string[];
  };
}

/** title */
export interface DescribeImageVolcCdnAccessLogBody {
  /** 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。 */
  Domain: string;
  /**
   * 查询日志结束时间戳，Unix 时间，单位为秒。
   * 例如：指定结束时间为`1641953589`，代表 2022-01-12 10:13:09 UTC。在查询返回的日志列表中，最后一个统计在内的日志包名称是 domain_20220112100000_20220112110000.gz。该日志包中包含该域名在 10:00:00 和 10:59:59 之间的访问日志。
   * StartTime 和 EndTime 之间的时间范围不能大于 30 天。
   * 指定一个结束时间对日志进行过滤，时间格式是 Unix 时间戳。  例子1：您指定 EndTime 为 1641953589，代表 2022-01-12 10:13:09 UTC。在查询返回的日志列表中，最后一个统计在内的日志包名称是 domain_20220112100000_20220112110000.gz。该日志包中包含该域名在 10:00:00 和 10:59:59 之间的访问日志。
   * @format int64
   */
  EndTime: number;
  /**
   * 指定的页码，系统只返回该页面上的日志包数据。起始值为 `1`，如果指定页码不存在，则返回空值。
   * :::tip
   * 建议第一次提交查询时指定页码为 1。您可以根据响应正文中的`TotalCount`和`PageSize`参数的值计算结果页数。之后在查询中指定`PageNum`来获取该页面上日志包。
   * :::
   * 指定一个页码。系统只返回该页面上的那些日志包。  默认值为 1。如果指定的页码不存在，则返回空值。建议第一次提交查询时使用默认值。您可以根据响应正文中的 TotalCount 和 PageSize 参数的值计算结果页数。然后再查询中指定一个 PageNum 来获取该页面上的那些日志包。
   */
  PageNum: number;
  /**
   * 指定查询结果中每页包含的日志包数量。取值范围为 [10, 100]。
   * 指定查询结果中每页包含的日志包数量。  默认值是 10，最大值是 100。
   */
  PageSize: number;
  /**
   * 地域。支持以下取值：
   * - chinese_mainland：中国大陆，返回的日志包的名称不包含 outsideChineseMainland；
   * - global：全球；
   * - outside_chinese_mainland：全球（除中国大陆），返回的日志包的名称包含 outsideChineseMainland。
   * :::tip
   * - 该参数仅当您启用了中国大陆外加速区域时，配置才会生效，否则仅返回国内日志数据。
   * - 您可以登录 [veImageX 控制台](https://console.volcengine.com/imagex/overview/)参考[域名配置 > 高级配置](https://www.volcengine.com/docs/508/127680#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE)开启全球加速，两个工作日左右全球加速启用生效。
   * - 全球加速功能为 veImageX 计费项，具体计费详情请参考[后付费-按量计费](https://www.volcengine.com/docs/508/65935)。
   * :::
   * 指定一个加速区域对日志进行过滤。该参数仅当您通过提交工单启用了 中国大陆 以外的加速区域时才有效。  该参数有以下取值： chinese_mainland：表示获取访问请求是来自 中国大陆 的日志。查询返回的日志包的名称不包含 outsideChineseMainland。 global：表示获取访问请求是来自 全球 的日志。 outside_chinese_mainland：表示获取访问请求是来自 全球（除中国大陆） 的日志。查询返回的日志包的名称包含 outsideChineseMainland。 该参数的默认值是 global
   */
  Region: string;
  /**
   * 查询日志开始时间戳，Unix 时间，单位为秒。
   * 例如：指定起始时间为`1641844915`，代表 2022-01-11 04:01:55 UTC。 在查询返回的日志列表中，第一个统计在内的日志包名称是domain\_20220111050000\_20220111060000.gz。该日志包中包含该域名在 05:00:00 和 05:59:59 之间的访问日志。
   * StartTime 和 EndTime 之间的时间范围不能大于 30 天。
   * 指定一个开始时间对日志进行过滤，时间格式是 Unix 时间戳。  例子1：您指定 StartTime 为 1641844915，代表 2022-01-11 04:01:55 UTC。在查询返回的日志列表中，第一个统计在内的日志包名称是domain_20220111050000_20220111060000.gz。该日志包中包含该域名在 05:00:00 和 05:59:59 之间的访问日志。  StartTime 和 EndTime 之间的时间范围不能大于 30 天。
   * @format int64
   */
  StartTime: number;
}

export interface DescribeImageVolcCdnAccessLogQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "yl**yn"
   */
  ServiceId: string;
}

export interface DescribeImageVolcCdnAccessLogRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "DescribeImageVolcCdnAccessLog"
     */
    Action: string;
    Error: {
      /**
       * 错误码
       * @example "{ErrorCode}"
       */
      Code: string;
      /**
       * 错误信息
       * @example "{ErrorMessage}"
       */
      Message: string;
    };
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result: {
    /**
     * 加速域名。
     * @example "a8****x8"
     */
    Domain: string;
    /** 查询的日志数据。 */
    Logs: {
      /**
       * 日志结束时间。
       * @format int64
       */
      EndTime: number;
      /** 日志包名称。 */
      LogName: string;
      /**
       * 日志包下载地址，下载链接有效时间为 10 分钟。
       * @example "http://test.com"
       */
      LogPath: string;
      /**
       * 日志包大小，单位为 byte。
       * @format int64
       * @example 937
       */
      LogSize: number;
      /**
       * 日志起始时间。
       * @format int64
       * @example 1672963200
       */
      StartTime: number;
    }[];
    /**
     * 指定的页码数。
     * @example 690
     */
    PageNum: number;
    /**
     * 指定的每页日志包数量。
     * @example 645
     */
    PageSize: number;
    /**
     * 日志包总数。
     * @format int64
     * @example 486
     */
    TotalCount: number;
  };
}

export interface DescribeImageXAIRequestCntUsageQuery {
  /**
   * 组件名称。支持查询多个组件，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有组件。您可通过调用 [GetImageAddOnConf](https://www.volcengine.com/docs/508/66145) 查看`Key`返回值。
   * @example "a1,a2"
   */
  AdvFeats?: string;
  /**
   * 是否叠加计费倍率。默认为false。
   * @example "true"
   */
  EnableBillingRate?: boolean;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 维度拆分的维度值。不传表示不拆分维度，只能传入单个参数。支持取值如下：
   * - `ServiceId`：服务
   * - `AdvFeat`：组件
   * @example "AdvFeat"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 图片处理模板。支持查询多个模板，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有模板。您可通过调用 [GetAllImageTemplates](https://www.volcengine.com/docs/508/9386) 获取服务下全部模版信息。
   * @example "t1,t2"
   */
  Templates?: string;
}

export interface DescribeImageXAIRequestCntUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 请求次数据。
     * @example "-"
     */
    RequestCntData: {
      /**
       * 附加组件类型，`GroupBy`包含`AdvFeat`时有返回值。如：enhance，smartcut。取值为`total`，表示包含所选`AdvFeat`总请求次数。
       * 附加组件类型，`GroupBy`包含`AdvFeat`时有返回值。如：enhance，smartcut。取值为`total`，表示包含所选`AdvFeat`总请求次数。
       * @example "enhance"
       */
      AdvFeat?: string;
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求次
         * 请求次
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXBaseOpUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数，当前仅支持取值 `ServiceId`，表示按服务 ID 进行分组。
   * @example "ServiceId"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXBaseOpUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 计量数据列表
     * @example "-"
     */
    BaseOpData: {
      /**
       * 计量数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 基础处理量，单位为 Byte。
         * 基础处理量，单位Byte
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 服务 ID。当 `GroupBy` 中包含 `ServiceId` 时，有返回值。
       * 当GroupBy中包含ServiceId时出现
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXBillingRequestCntUsageQuery {
  /**
   * 组件名称。支持查询多个组件，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有组件。您可通过调用 [GetImageAddOnConf](https://www.volcengine.com/docs/508/66145) 查看`Key`返回值。
   * @example "a1,a2"
   */
  AdvFeats?: string;
  /**
   * 获取数据结束时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 固定值，仅支持`AdvFeat`即附加组件。
   * @example "AdvFeat"
   */
  GroupBy: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。支持取值如下：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXBillingRequestCntUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 附加组件通用请求次数据。
     * @example "-"
     */
    RequestCntData: {
      /**
       * 附加组件类型，如：enhance，smartcut。
       * 取值为`total`，表示包含所选`AdvFeat`请求次数相加。
       * 附加组件类型，如：enhance，smartcut。
       * 取值为`total`，表示包含所选`AdvFeat`请求次数相加。
       * @example "enhance"
       */
      AdvFeat: string;
      /**
       * 时序数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求次。
         * 请求次
         * @example 875
         */
        Value: number;
      }[];
    }[];
  };
}

export interface DescribeImageXBucketRetrievalUsageQuery {
  /**
   * Bucket 名称。支持同时查询多个 BucketName，不同的 BucketNmae 使用逗号分隔。
   * 您可以通过调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 获取所需的 Bucket 名称。
   * @example "b1,b2"
   */
  BucketNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数，多个数据用逗号分隔。支持取值如下：
   *
   * - `ServiceId`：服务 ID
   * - `BucketName`：Bucket 名称
   * - `StorageType`：存储类型
   * @example "ServiceId,BucketName,StorageType"
   */
  GroupBy?: string;
  /**
   * 服务 ID。为空时表示不筛选，支持查询多个服务，使用逗号分隔不同的服务。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考 [GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXBucketRetrievalUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /** 计量数据列表 */
    StorageData: {
      /**
       * Bucket 名称，`GroupBy`包含`BucketName`时有返回值。
       * @example "b1"
       */
      BucketName?: string;
      /** 具体数据 */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：格式为：YYYY-MM-DDThh:mm:ss±hh:mm
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 单位：Byte
         * 单位：Byte
         * @format float
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * @example "s1"
       */
      ServiceId?: string;
      /**
       * 存储类型，`GroupBy`包含`StorageType`时有返回值。取值：
       * - `STANDARD`：标准存储
       * - `IA`：低频存储
       * - `ARCHIVE`：归档存储
       * - `COLD_ARCHIVE`：冷归档存储
       * @example "STANDARD"
       */
      StorageType?: string;
    }[];
  };
}

export interface DescribeImageXBucketUsageQuery {
  /**
   * Bucket 名称。支持同时查询多个 BucketName，不同的 BucketNmae 使用逗号分隔。
   * 您可以通过调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 获取所需的 Bucket 名称。
   * @example "b1,b2"
   */
  BucketNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数，多个数据用逗号分隔。支持取值如下：
   *
   * - `ServiceId`：服务 ID
   * - `BucketName`：Bucket 名称
   * @example "ServiceId,BucketName"
   */
  GroupBy?: string;
  /**
   * 服务 ID。为空时表示不筛选，支持查询多个服务，使用逗号分隔不同的服务。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考 [GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXBucketUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 计量数据列表
     * 计量数据列表
     */
    StorageData: {
      /**
       * Bucket 名称，`GroupBy`包含`BucketName`时有返回值。
       * 当GroupBy中包含BucketName时出现
       * @example "b1"
       */
      BucketName?: string;
      /** 具体数据 */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：格式为：YYYY-MM-DDThh:mm:ss±hh:mm
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 单位：Byte
         * 单位：Byte
         * @format float
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * 当GroupBy中包含ServiceId时出现
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXCDNTopRequestDataQuery {
  /**
   * 数据访问区域。仅在`KeyType`取值为`Region`或`Isp`时生效，取值如下所示：
   *
   * - `China`：中国。
   * - `Other`：中国境外的区域。
   * @example "China"
   */
  Country?: string;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取所需的域名。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如 2019-06-02T00:00:00+08:00。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 网络协议。缺省情况下则表示不限制网络协议，取值如下所示：
   *
   * - `IPv4`
   * - `IPv6`
   *
   * :::tip
   * `KeyType`取值为`Domain`时，`IPVersion`的取值无效。
   * :::
   * @example "IPv4"
   */
  IPVersion?: string;
  /**
   * 排序依据，取值如下所示：
   *
   * - `URL`：生成的图片访问 URL
   * - `UserAgent`：用户代理
   * - `Refer`：请求 Refer
   * - `ClientIP`：客户端 IP
   * - `Region`：访问区域
   * - `Domain`：域名
   * - `Isp`：运营商
   * @example "URL"
   */
  KeyType: string;
  /**
   * 每页查询数据量，默认为`0`，即返回所有数据。
   * @example "10"
   */
  Limit?: string;
  /**
   * 分页偏移量，默认取值为`0` 。取值为`10`时，表示跳过前 10 条数据，从第 11 条数据开始取值。
   * @example "1"
   */
  Offset?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如 2019-06-02T00:00:00+08:00。
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 排序依据，即获取按`ValueType`值排序的`KeyType`列表。取值如下所示：
   *
   * - `Traffic`：按流量排序
   * - `RequestCnt`：按请求次数排序
   *
   * :::tip
   * 当`KeyType`取值为`Domain`时，仅支持将`ValueType`取值为`Traffic`，即按照流量排序获取域名列表。
   * :::
   * @example "Traffic"
   */
  ValueType: string;
}

export interface DescribeImageXCDNTopRequestDataRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 可展示的数据总数量。
     * 可展示的数据总数量。
     * @example 1000
     */
    Count: number;
    /**
     * 数据列表，按`Value`降序排列。
     * 数据列表，按Value降序排列。
     * @uniqueItems true
     * @example "-"
     */
    TopValue: {
      /**
       * 对应于参数`KeyType`的取值数据。
       * 对应于参数KeyType，维度。
       * @example "u1"
       */
      Key: string;
      /**
       * 指标值。取值如下所示：
       *
       * - 当`ValueType`取值为`Traffic`，表示流量，单位为 Byte；
       * - 当`ValueType`取值为`RequestCnt`，表示请求次数，单位为次。
       * Traffic/RequestCnt，指标值。Traffic单位：Byte。RequestCnt单位：次。
       * @example 123
       */
      Value: number;
    }[];
    /**
     * 总流量或总请求次数，取值如下所示：
     *
     * - 当`ValueType`取值为`Traffic`，表示总流量，单位为 Byte；
     * - 当`ValueType`取值为`RequestCnt`，表示总请求次数，单位为次。
     * 全量Traffic/RequestCnt的总量，用于计算占比。Traffic单位：Byte。RequestCnt单位：次。
     * @example 123
     */
    TotalValue: number;
  };
}

export interface DescribeImageXCdnDurationAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度。取值如下所示：
   * * `Domain`：域名；
   * * `Region`：地区；
   * * `Isp`：运营商。
   * 聚合维度。
   * Domain：域名；
   * Region：地区；
   * Isp：运营商。
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * 排序依据。取值如下所示：
   * * `Duration`：按耗时排序。
   * * `Count`：（默认）按上报量排序。
   * 排序依据。
   * Duration：按耗时排序。
   * Count：（默认）按上报量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnDurationAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 网络耗时数据。
     * 网络耗时数据。
     * @example "-"
     */
    DurationData: {
      /**
       * 上报数据量。
       * 上报数据量。
       * @example 438
       */
      Count: number;
      /**
       * 当`GroupBy`取值`Domain`时出现，则表示域名信息。
       * 当GroupBy取值Domain时出现，则表示域名信息。
       * @example "a.imagex.cn"
       */
      Domain?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，则表示运营商信息。
       * 当GroupBy取值Isp时出现，则表示运营商信息。
       * @example "教育网"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "北京"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * `Country`表示国家。
       * * `Province`表示省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * Country表示国家。
       * Province表示省份。
       * @example "Province"
       */
      RegionType?: string;
      /**
       * 网络耗时，单位为毫秒。
       * 网络耗时，单位毫秒
       * @format float
       * @example 294
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXCdnDurationDetailByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，标识不拆分。支持取值：
   * * `Duration`：表示拆分网络耗时分位数据
   * - `Phase`：表示拆分网络耗时分布数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：Duration（拆分网络耗时分位数据）、Phase（拆分网络耗时分布数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 指定查询特定阶段的耗时数据。默认空，返回总耗时数据。
   * * `dns`： DNS 耗时，即网络阶段的 DNS 平均耗时。
   * * `ssl`： SSL 耗时，即网络阶段的 SSL 握手平均耗时。
   * * `connect`：连接耗时，即网络阶段的 TCP 建立连接平均耗时。
   * * `send`：发送耗时，即网络阶段的发送数据平均耗时。
   * * `wait`：等待耗时，即网络阶段发送完数据后等待首个回包字节的耗时。
   * * `receive`：接收耗时，即网络阶段的接收数据耗时。
   * * `proxy`：代理耗时，即网络阶段的建立代理连接的耗时。
   * 指定查询特定阶段的耗时数据。默认空，返回总耗时数据。
   * dns： DNS 耗时，即网络阶段的 DNS 平均耗时。
   * ssl： SSL 耗时，即网络阶段的 SSL 握手平均耗时。
   * connect：连接耗时，即网络阶段的 TCP 建立连接平均耗时。
   * send：发送耗时，即网络阶段的发送数据平均耗时。
   * wait：等待耗时，即网络阶段发送完数据后等待首个回包字节的耗时。
   * receive：接收耗时，即网络阶段的接收数据耗时。
   * proxy：代理耗时，即网络阶段的建立代理连接的耗时。
   * @example "send"
   */
  Phase?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnDurationDetailByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 网络耗时数据。
     * 网络耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 数据上报总量。
       * 数据上报量
       * @example 333
       */
      Count: number;
      /**
       * 对应的网络耗时数据列表。
       * 对应的网络耗时数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据上报量。
         * 数据上报量
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。
         * * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 平均耗时，单位毫秒。
         * 平均耗时，单位毫秒
         * @format float
         * @example 333
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - 当`GroupBy`取值为空时，取值为：Total
       * - 当`GroupBy`取值为`Duration`时，取值为：pct25、pct50、pct90、pct99、avg
       * - 当`GroupBy`取值为`Phase`时，取值为：dns、ssl、connect、send、wait、receive、proxy
       * - 除上述外取值为指定拆分维度的各个值
       * 数据类型。
       * 当GroupBy为空时，取值为：Total。
       * 当GroupBy为Duration时，取值为：pct25、pct50、pct90、pct99、avg。
       * 当GroupBy为Phase时，取值为：dns、ssl、connect、send、wait、receive、proxy。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXCdnErrorCodeAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度。取值如下所示：
   * * `Domain`：域名；
   * * `ErrorCode`：错误码；
   * * `Region`：地区；
   * * `Isp`：运营商。
   * 聚合维度。
   * Domain：域名；
   * ErrorCode：错误码；
   * Region：地区；
   * Isp：运营商。
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * 目前仅支持传入`Count`按错误码数量排序。不传或者传空默认按错误码数量排序。
   * 目前仅支持传入Count按错误码数量排序。不传或者传空默认按错误码数量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnErrorCodeAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 错误码数据。
     * 错误码数据
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 当`GroupBy`取值**非**`ErrorCode`时出现，表示错误码详细信息。
       * 当GroupBy取值非ErrorCode时出现，表示错误码详细信息。
       * @example "-"
       */
      Details?: {
        /**
         * 错误码内容。
         * 错误码内容
         * @example "-10"
         */
        ErrorCode: string;
        /**
         * 错误码的描述信息。
         * 错误码的描述信息
         * @example "xxx"
         */
        ErrorCodeDesc: string;
        /**
         * 错误码数量。
         * 错误码数量
         * @example 517
         */
        Value: number;
      }[];
      /**
       * 当`GroupBy`取值`Domain`时出现，则表示域名信息。
       * 当GroupBy取值Domain时出现，则表示域名信息。
       * @example "a.imagex.cn"
       */
      Domain?: string;
      /**
       * 当`GroupBy`取值`ErrorCode`时出现，表示错误码内容。
       * 当GroupBy取值ErrorCode时出现，表示错误码内容。
       * @example "-5"
       */
      ErrorCode?: string;
      /**
       * 当`GroupBy`取值`ErrorCode`时出现，表示错误码的描述信息。
       * 当GroupBy取值ErrorCode时出现，表示错误码的描述信息。
       * @example "Unknown"
       */
      ErrorCodeDesc?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，则表示运营商信息。
       * 当GroupBy取值Isp时出现，则表示运营商信息。
       * @example "电信"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "北京"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * 取值`Country`时，表示国家；
       * * 取值`Province`时，表示省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * 取值Country时，表示国家；
       * 取值Province时，表示省份。
       * @example "Province"
       */
      RegionType?: string;
      /**
       * 错误码数量。
       * 错误码数量
       * @example 517
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXCdnErrorCodeByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnErrorCodeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 所有错误码数据。
     * 所有错误码数据。
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 错误码总量。
       * 错误码数量
       * @example 1
       */
      Count: number;
      /**
       * 错误码对应的时序数据。
       * 错误码对应的时序数据。
       * @example "-"
       */
      Data: {
        /**
         * 错误码数量。
         * 错误码数量
         * @example 1
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 错误码数量。
         * 错误码数量
         * @example 1
         */
        Value: number;
      }[];
      /**
       * 错误码。
       * 错误码
       * @example "-138"
       */
      ErrorCode: string;
    }[];
  };
}

export interface DescribeImageXCdnProtocolRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnProtocolRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 各协议占比数据。
     * 各协议占比数据
     * @example "-"
     */
    ProtocolRateData: {
      /**
       * 上报数据总量。
       * 数据上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的协议占比数据列表。
       * 对应的协议占比数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 上报数据量。
         * 数据上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 网络协议占比。
         * 网络协议占比
         * @format float
         * @example "0.7574129949188799"
         */
        Value: number;
      }[];
      /**
       * 网络协议类型。
       * 取值为：http、https
       * 网络协议类型。
       * 取值为：http、https
       * @example "http"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXCdnReuseRateAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度，取值如下所示：
   * - `Domain`：域名；
   * - `Region`：地区；
   * - `Isp`：运营商。
   * 聚合维度
   * Domain：域名；
   * Region：地区；
   * Isp：运营商。
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * 维度区分，不传或者传空默认按上报量排序。取值如下所示：
   * * `ReuseRate`：按连接复用率排序；
   * * `Count`：按上报量排序。
   * 维度区分，不传或者传空默认按上报量排序。
   * ReuseRate：按连接复用率排序；
   * Count：按上报量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnReuseRateAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 连接复用率数据。
     * 连接复用率数据。
     * @example "-"
     */
    ReuseRateData: {
      /**
       * 上报数据量。
       * 上报数据量。
       * @example 230443
       */
      Count: number;
      /**
       * 当`GroupBy`取值`Domain`时出现，表示域名信息。
       * 当GroupBy取值Domain时出现，表示域名信息。
       * @example "a.imagex.cn"
       */
      Domain?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，表示运营商信息。
       * 当GroupBy取值Isp时出现，表示运营商信息。
       * @example "其他"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "北京"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * 取值`Country`，表示国家。
       * * 取值`Province`，表示省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * 取值Country，表示国家。
       * 取值Province，表示省份。
       * @example "Province"
       */
      RegionType?: string;
      /**
       * 连接复用率。
       * 连接复用率。
       * @format float
       * @example "0.5499841609421853"
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXCdnReuseRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnReuseRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 连接复用率数据。
     * 连接复用率数据
     * @example "-"
     */
    ReuseRateData: {
      /**
       * 上报数据总量。
       * 数据上报量
       * @example 3
       */
      Count: number;
      /**
       * 对应的连接复用率数据列表。
       * 对应的连接复用率数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 上报数据量。
         * 数据上报量
         * @example 3
         */
        Count: number;
        /**
         * 数据对应时间点。
         * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 网络连接复用率。
         * 网络连接复用率。
         * @format float
         * @example "0.5544718758435826"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时取值`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXCdnSuccessRateAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0.1"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度。取值如下所示：
   * * `Domain`：域名；
   * * `Region`：地区；
   * * `Isp`：运营商。
   * 聚合维度。
   * Domain：域名；
   * Region：地区；
   * Isp：运营商。
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有非 WEB 端的系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * * 取值为`SuccessRate`时，表示按网络成功率排序；
   * * 取值为`Count`时，表示按上报量排序；
   * * 不传或者传空默认按上报量排序。
   * 取值为SuccessRate时，表示按网络成功率排序；
   * 取值为Count时，表示按上报量排序；
   * 不传或者传空默认按上报量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.34.1"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnSuccessRateAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 网络成功率数据。
     * 网络成功率数据。
     * @example "-"
     */
    SuccessRateData: {
      /**
       * 上报数据量。
       * 上报数据量。
       * @example 259728
       */
      Count: number;
      /**
       * 当`GroupBy`取值`Domain`时出现，则表示域名信息。
       * 当GroupBy取值Domain时出现，则表示域名信息。
       * @example "a.imagex.cn"
       */
      Domain?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，则表示运营商信息。
       * 当GroupBy取值Isp时出现，则表示运营商信息。
       * @example "电信"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "北京"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * 取值`Country`，表示国家；
       * * 取值`Province`，表示省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * 取值Country，表示国家；
       * 取值Province，表示省份。
       * @example "Province"
       */
      RegionType?: string;
      /**
       * 网络成功率。
       * 网络成功率
       * @format float
       * @example "0.9932852830653607"
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXCdnSuccessRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCdnSuccessRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 网络成功率数据
     * 网络成功率数据
     * @example "-"
     */
    SuccessRateData: {
      /**
       * 该数据类型对应的总上报量
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 具体数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点，按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 网络成功率
         * 网络成功率
         * @format float
         * @example "0.992"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为 Total，拆分时为具体的维度值
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientCountByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientCountByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 客户端上报量数据。
     * 客户端上报量数据。
     * @example "-"
     */
    ClientCountData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的客户端上报量数据列表。
       * 对应的客户端上报量数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 上报量数据
         * 上报量数据
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上报量数据
         * 上报量数据
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientDecodeDurationByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientDecodeDurationByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 解码耗时数据。
     * 解码耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的解码耗时数据列表。
       * 对应的解码耗时数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 平均耗时，单位毫秒。
         * 平均耗时，单位毫秒
         * @format float
         * @example 18
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * 当`GroupBy`为空或`Duration`时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * 数据类型。当GroupBy为空或Duration时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * @example "avg"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientDecodeSuccessRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientDecodeSuccessRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 解码成功率数据。
     * 解码成功率数据
     * @example "-"
     */
    SuccessRateData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的解码成功率数据列表。
       * 对应的解码成功率数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。
         * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 解码成功率。
         * 解码成功率
         * @format float
         * @example "0.98"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientDemotionRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 降级类型。取值如下所示：
   *
   * - `heic`：查询 heic 降级率
   * - `heif`：查询 heif 降级率
   * - `avif`：查询 avif 降级率
   * 降级类型。取值如下所示：
   * heic：查询 heic 降级率
   * heif：查询 heif 降级率
   * avif：查询 avif 降级率
   * @example "heic"
   */
  DemotionType: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientDemotionRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 降级率数据
     * 降级率数据
     * @example "-"
     */
    DemotionRateData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 具体数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点，按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 降级率
         * 降级率
         * @format float
         * @example "0.56515"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientErrorCodeAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度。取值如下所示：
   * * `Domain`：域名；
   * * `ErrorCode`：错误码；
   * * `Region`：地区；
   * * `Isp`：运营商。
   * 聚合维度。
   * Domain：域名；
   * ErrorCode：错误码；
   * Region：地区；
   * Isp：运营商。
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * 目前仅支持传入`Count`按错误码数量排序。不传或者传空默认按错误码数量排序。
   * 目前仅支持传入Count按错误码数量排序。不传或者传空默认按错误码数量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientErrorCodeAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 错误码数据。
     * 错误码数据
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 当`GroupBy`取值**非**`ErrorCode`时出现，表示错误码详细信息。
       * 当GroupBy取值非ErrorCode时出现，表示错误码详细信息。
       * @example "-"
       */
      Details?: {
        /**
         * 错误码内容。
         * 错误码内容
         * @example "-10"
         */
        ErrorCode: string;
        /**
         * 错误码的描述信息。
         * 错误码的描述信息
         * @example "xxx"
         */
        ErrorCodeDesc: string;
        /**
         * 错误码数量。
         * 错误码数量
         * @example 2
         */
        Value: number;
      }[];
      /**
       * 当`GroupBy`取值`Domain`时出现，则表示域名信息。
       * 当GroupBy取值Domain时出现，则表示域名信息。
       * @example "a.imagex.com"
       */
      Domain?: string;
      /**
       * 当`GroupBy`取值`ErrorCode`时出现，表示错误码内容。
       * 当GroupBy取值ErrorCode时出现，表示错误码内容。
       * @example "5001"
       */
      ErrorCode?: string;
      /**
       * 当`GroupBy`取值`ErrorCode`时出现，表示错误码的描述信息。
       * 当GroupBy取值ErrorCode时出现，表示错误码的描述信息。
       * @example "xxx"
       */
      ErrorCodeDesc?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，则表示运营商信息。
       * 当GroupBy取值Isp时出现，则表示运营商信息。
       * @example "铁通"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "北京"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * 取值`Country`，表示国家。
       * * 取值`Province`，表示省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * 取值Country，表示国家。
       * 取值Province，表示省份。
       * @example "Province"
       */
      RegionType?: string;
      /**
       * 错误码数量。
       * 错误码数量
       * @example 2
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXClientErrorCodeByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientErrorCodeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 所有错误码数据。
     * 所有错误码数据
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 错误码总量。
       * 错误码数量
       * @example 3
       */
      Count: number;
      /**
       * 错误码对应的时序数据。
       * 错误码对应的时序数据。
       * @example "-"
       */
      Data: {
        /**
         * 错误码数量。
         * 错误码数量
         * @example 3
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 错误码数量。
         * 错误码数量
         * @example 3
         */
        Value: number;
      }[];
      /**
       * 错误码。
       * 错误码
       * @example "-999"
       */
      ErrorCode: string;
    }[];
  };
}

export interface DescribeImageXClientFailureRateBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientFailureRateRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 用户感知失败率数据。
     * 用户感知失败率数据
     * @example "-"
     */
    FailureRateData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的用户感知失败率数据列表。
       * 对应的用户感知失败率数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 用户感知失败率。
         * 用户感知失败率
         * @format float
         * @example "0.0026494674302842158"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientFileSizeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientFileSizeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 客户端文件大小分布数据。
     * 客户端文件大小分布数据
     * @example "-"
     */
    FSizeData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 3
       */
      Count: number;
      /**
       * 对应的文件大小数据列表。
       * 对应的文件大小数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 23
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 文件大小，单位为 byte。
         * 文件大小，单位byte
         * @format float
         * @example 3672400
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * 当`GroupBy`为空或`Duration`时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * 数据类型。
       * 当GroupBy为空或Duration时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * @example "avg"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientLoadDurationAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度，取值如下所示：
   * - `Domain`：域名
   * - `Region`：地区
   * - `Isp`：运营商
   * 聚合维度。
   * Domain：域名
   * Region：地区
   * Isp：运营商
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * 排序依据，取值如下所示：
   * * `Duration`：按耗时排序。
   * * `Count`：（默认）按上报量排序。
   * 目前仅支持传入Count按错误码数量排序。不传或者传空默认按错误码数量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientLoadDurationAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 网络耗时数据。
     * 网络耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 上报数据量。
       * 上报数据量
       * @example 12335
       */
      Count: number;
      /**
       * 当`GroupBy`取值`Domain`时出现，则表示域名信息。
       * 当GroupBy取值Domain时出现，则表示域名信息。
       * @example "a.imagex.com"
       */
      Domain?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，则表示运营商信息。
       * 当GroupBy取值Isp时出现，则表示运营商信息。
       * @example "铁通"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "北京"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * `Country`：国家。
       * * `Province`：省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * Country：国家。
       * Province：省份。
       * @example "Province"
       */
      RegionType?: string;
      /**
       * 加载耗时，单位为毫秒。
       * 加载耗时，单位为毫秒
       * @format float
       * @example 391
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXClientLoadDurationBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientLoadDurationRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 加载耗时数据。
     * 加载耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的加载耗时数据列表。
       * 对应的加载耗时数据列表
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 平均耗时，单位为毫秒。
         * 平均耗时，单位毫秒
         * @format float
         * @example 5142
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * 当`GroupBy`为空或`Duration`时，取值avg/pct25/pct50/pct75/pct90/pct95/pct99/min/max，否则取值为指定拆分维度的各个值。
       * 数据类型。当GroupBy为空或Duration时，取值avg/pct25/pct50/pct75/pct90/pct95/pct99/min/max，否则取值为指定拆分维度的各个值。
       * @example "avg"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientQualityRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 质量类型。取值如下所示：
   *
   * - `white_suspected`：查询白屏率
   * - `black_suspected`：查询黑屏率
   * - `transparent_suspected`：查询透明图率
   * 质量类型。取值如下所示：
   * white_suspected：查询白屏率
   * black_suspected：查询黑屏率
   * transparent_suspected：查询透明图率
   * @example "transparent_suspected"
   */
  QualityType: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientQualityRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 黑白屏率数据
     * 黑白屏率数据
     * @example "-"
     */
    QualityRateData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 具体数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点，按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 黑白屏率
         * 黑白屏率
         * @format float
         * @example "60.47"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientQueueDurationByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientQueueDurationByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 排队耗时数据。
     * 排队耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的排队耗时数据列表。
       * 对应的排队耗时数据列表
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 平均耗时，单位毫秒。
         * 平均耗时，单位毫秒
         * @format float
         * @example 70
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * 当`GroupBy`为空或`Duration`时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * 数据类型。
       * 当GroupBy为空或Duration时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * @example "avg"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientScoreByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 打分类型。取值如下所示：
   *
   * - `vq`：查询 vqscore 指标
   * - `aes`：查询美学指标
   * - `noi`：查询噪声指标
   * - `psnr`：查询 psnr 指标
   * - `ssim`：查询 ssim 指标
   * - `vmaf`：查询 vmaf 指标
   * 打分类型。取值如下所示：
   * vq：查询vqscore指标
   * aes：查询美学指标
   * noi：查询噪声指标
   * psnr：查询psnr指标
   * ssim：查询ssim指标
   * vmaf：查询vmaf指标
   * @example "vq"
   */
  ScoreType: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientScoreByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 画质打分数据
     * @example "-"
     */
    ScoreData: {
      /**
       * 该数据类型对应的总上报量
       * @example 123
       */
      Count: number;
      /**
       * 具体上报数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点，按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 画质评估在该图片维度的分值
         * 画质打分
         * @example 89
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXClientSdkVerByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 需要匹配的域名，不传则匹配所有域名。
   * 需要匹配的域名，不传则匹配所有域名
   * @example "["d1"]"
   */
  Domain?: string[];
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXClientSdkVerByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * SDK 版本数据。
     * SDK版本数据
     * @example "-"
     */
    SdkVerData: {
      /**
       * 该 SDK 版本对应的总上报量。
       * 该 SDK 版本对应的总上报量。
       * @example 123
       */
      Count: number;
      /**
       * 对应的版本数据列表。
       * 对应的版本数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 版本数量。
         * 版本数量。
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 版本数量。
         * 版本数量。
         * @example 123
         */
        Value: number;
      }[];
      /**
       * SDK 版本号。
       * SDK版本号
       * @example "1.0.1"
       */
      SdkVer: string;
    }[];
  };
}

export interface DescribeImageXClientTopDemotionURLBody {
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 降级类型。取值如下所示：
   *
   * - `heic`：HEIC 降级
   * - `heif`：HEIF 降级
   * - `avif`：AVIF 降级
   * 降级类型。取值如下所示：
   * heic：HEIC 降级
   * heif：HEIF 降级
   * avif：AVIF 降级
   * @example "heic"
   */
  DemotionType: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2023-01-01T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "iOS"
   */
  OS?: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2023-01-01T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为[0,1000]，默认值为 1000。
   * 查询 Top URL 条数，取值范围为 [0,1000]，默认 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXClientTopDemotionURLRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * Top URL 数据
     * Top URL数据
     * @example "-"
     */
    TopUrlData: {
      /**
       * 上报数据量
       * 上报数据量
       * @example 96
       */
      Count: number;
      /**
       * 文件 URL
       * 文件URL
       * @example "http://xxx.xxx"
       */
      Url: string;
    }[];
  };
}

export interface DescribeImageXClientTopFileSizeBody {
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2020-11-30T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "iOS"
   */
  OS?: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2020-11-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为[0,1000]，默认值为 1000。
   *
   * 查询 Top URL 条数，取值范围为[0,1000]，默认值为 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXClientTopFileSizeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * Top URL 数据
     * Top URL数据
     * @example "-"
     */
    TopUrlData: {
      /**
       * 上报数据量
       * 上报数据量
       * @example 1
       */
      Count: number;
      /**
       * 文件 URL
       * 文件URL
       * @example "http://xxx.byteimg.com/xxxx~tplv-shrink:480:600.awebp"
       */
      Url: string;
      /**
       * 文件大小，单位为 byte
       * 文件大小，单位byte
       * @example 129984549
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXClientTopQualityURLBody {
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 起始时间与结束时间间隔小于等于 93 天。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2023-01-01T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`、`Domain`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp,Domain,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "iOS"
   */
  OS?: string;
  /**
   * 类型。取值如下所示：
   *
   * - `transparent_suspected`：透明图
   * - `white_suspected`：白屏
   * - `black_suspected`：黑屏
   * 类型。取值如下所示：
   * transparent_suspected：透明图
   * white_suspected：白屏
   * black_suspected：黑屏
   * @example "black_suspected"
   */
  QualityType: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 起始时间与结束时间间隔小于等于 93 天。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2023-01-01T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为 [0,1000]，默认值为 1000。
   * 查询 Top URL 条数，取值范围为 [0,1000]，默认 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXClientTopQualityURLRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * Top URL数据
     * Top URL数据
     * @example "-"
     */
    TopUrlData: {
      /**
       * 上报数据量
       * 上报数据量
       * @example 98
       */
      Count: number;
      /**
       * 文件URL
       * 文件URL
       * @example "http://xxx.xxx"
       */
      Url: string;
    }[];
  };
}

export interface DescribeImageXCompressUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数，当前仅支持取值 `ServiceId`，表示按服务 ID 进行分组。
   * @example "ServiceId"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCompressUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 压缩量数据
     * @example "-"
     */
    CompressData: {
      /**
       * 压缩前大小，单位为 byte。
       * @example "-"
       */
      InSize: {
        /**
         * 数据对应时间点，时间片开始时刻。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 压缩前大小或压缩后大小，单位为 byte。
         * 压缩前大小，单位Byte
         * @example 234
         */
        Value: number;
      }[];
      /**
       * 压缩后大小，单位为 byte。
       * @example "-"
       */
      OutSize: {
        /**
         * 数据对应时间点，时间片开始时刻。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 压缩前大小或压缩后大小，单位为 byte。
         * 压缩后大小，单位Byte
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 服务 ID。当 `GroupBy` 中包含 `ServiceId` 时，有返回值。
       * 当GroupBy中包含ServiceId时出现
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXCubeUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXCubeUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 创意魔方用量
     * 创意魔方数据。
     * @example "-"
     */
    CubeData: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 统计时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 创意魔方请求次数
         * @example 123
         */
        Value: number;
      }[];
    }[];
  };
}

export interface DescribeImageXDomainBandwidthDataQuery {
  /**
   * 计费区域。支持查询多个区域，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `CHN`：中国内地
   * - `AP1`：亚太一区
   * - `AP2`：亚太二区
   * - `AP3`：亚太三区
   * - `EU`：欧洲
   * - `ME`：中东和非洲
   * - `SA`：南美
   * - `NA`：北美
   * - `OTHER`：其他
   * @example "CHN,AP1"
   */
  BillingRegion?: string;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数。不传表示不拆分维度，传入多个用英文逗号分隔。取值如下所示：
   *
   * - `ServiceId`：服务 ID
   * - `DomainName` ：域名
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example 300
   */
  Interval?: number;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXDomainBandwidthDataRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 计量数据列表
     * 计量数据列表
     * @example "-"
     */
    BpsData: {
      /**
       * 具体数据。
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如 `2019-06-02T00:00:00+08:00`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 带宽用量，单位为 bps。
         * 带宽单位：bps
         * @format float
         * @example "123.4"
         */
        Value: number;
      }[];
      /**
       * 域名，`GroupBy`包含`DomainName`时有返回值。
       * 当GroupBy中包含DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
      /**
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * 当GroupBy中包含ServiceId时出现
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXDomainBandwidthNinetyFiveDataQuery {
  /**
   * 计费区域。支持查询多个区域，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `CHN`：中国内地
   * - `AP1`：亚太一区
   * - `AP2`：亚太二区
   * - `AP3`：亚太三区
   * - `EU`：欧洲
   * - `ME`：中东和非洲
   * - `SA`：南美
   * - `NA`：北美
   * - `OTHER`：其他
   * @example "CHN,AP1"
   */
  BillingRegion?: string;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXDomainBandwidthNinetyFiveDataRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 带宽 95 值，单位为 bps。
     * 带宽95值，单位bps
     * @example "123.1"
     */
    BpsData: number;
    /**
     * 统计时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
     * 统计时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
     * @example "2023-01-01T00:00:00+08:00"
     */
    TimeStamp: string;
  };
}

export interface DescribeImageXDomainTrafficDataQuery {
  /**
   * 计费区域。支持查询多个区域，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `CHN`：中国内地
   * - `AP1`：亚太一区
   * - `AP2`：亚太二区
   * - `AP3`：亚太三区
   * - `EU`：欧洲
   * - `ME`：中东和非洲
   * - `SA`：南美
   * - `NA`：北美
   * - `OTHER`：其他
   * @example "CHN,AP1"
   */
  BillingRegion?: string;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数。不传表示不拆分维度，传入多个用英文逗号分隔。取值如下所示：
   *
   * - `ServiceId`：服务 ID
   * - `DomainName` ：域名
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省时表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXDomainTrafficDataRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 计量数据列表
     * @example "-"
     */
    TrafficData: {
      /**
       * 具体数据。
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如 `2019-06-02T00:00:00+08:00`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 流量用量，单位为 Byte。
         * 流量单位：Byte。
         * @format float
         * @example "123.4"
         */
        Value: number;
      }[];
      /**
       * 域名，`GroupBy`包含`DomainName`时有返回值。
       * 当GroupBy中包含DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
      /**
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * 当GroupBy中包含ServiceId时出现
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXEdgeRequestBandwidthQuery {
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 分组依据，取值仅支持`DomainName`。
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 过滤运营商。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `电信`
   * - `联通`
   * - `移动`
   * - `鹏博士`
   * - `教育网`
   * - `广电网`
   * - `其它`
   * @example "移动,联通"
   */
  Isp?: string;
  /**
   * 过滤网络协议。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `HTTP`
   * - `HTTPS`
   * @example "HTTP,HTTPS"
   */
  Protocols?: string;
  /**
   * 计费区域。支持查询多个区域，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `中国大陆`
   * - `亚太一区`
   * - `亚太二区`
   * - `亚太三区`
   * - `欧洲区`
   * - `北美区`
   * - `南美区`
   * - `中东区`
   * @example "中国大陆"
   */
  Regions?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 客户端国家。传入多个时用英文逗号作为分割符，缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端国家。取值如下所示：
   *
   * - `海外`，除中国外全部国家。
   * - 具体国家取值，如`中国`、`美国`。
   * @example "中国"
   */
  UserCountry?: string;
  /**
   * 客户端省份。传入多个用英文逗号分割，缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端省份。
   * @example "北京"
   */
  UserProvince?: string;
}

export interface DescribeImageXEdgeRequestBandwidthRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 带宽数据。
     * @example "-"
     */
    BpsData: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 带宽用量，单位为 bps。
         * @format float
         * @example "12.3"
         */
        Value: number;
      }[];
      /**
       * 域名，仅当`GroupBy`取值为`DomainName`时返回该参数。
       * 当GroupBy带有DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXEdgeRequestQuery {
  /**
   * 状态码，传入多个时用英文逗号分隔。取值如下所示：
   *
   * - `req_cnt`：返回所有状态码数据
   * - `2xx`：返回 2xx 状态码汇总数据
   * - `3xx`：返回 3xx 状态码汇总数据
   * - `4xx`：返回 4xx 状态码汇总数据
   * - `5xx`：返回 5xx 状态码汇总数据。
   * @example "req_cnt,2xx,3xx"
   */
  DataTypes: string;
  /**
   * 是否拆分状态码，取值如下所示：
   *
   * - `true`：拆分
   * - `false`：（默认）不拆分
   * @example "true"
   */
  DetailedCode?: boolean;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数，传入多个用英文逗号分割。取值如下所示：
   *
   * - `DomainName`：域名
   * - `DataType`：状态码
   * @example "DomainName,DataType"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 过滤运营商。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `电信`
   * - `联通`
   * - `移动`
   * - `鹏博士`
   * - `教育网`
   * - `广电网`
   * - `其它`
   * @example "移动,联通"
   */
  Isp?: string;
  /**
   * 过滤网络协议。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `HTTP`
   * - `HTTPS`
   * @example "HTTP,HTTPS"
   */
  Protocols?: string;
  /**
   * 计费区域。支持查询多个区域，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `中国大陆`
   * - `亚太一区`
   * - `亚太二区`
   * - `亚太三区`
   * - `欧洲区`
   * - `北美区`
   * - `南美区`
   * - `中东区`
   * @example "中国大陆,北美区"
   */
  Regions?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 客户端国家。支持查询多个国家，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有国家。您可通过调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端国家。取值如下所示：
   *
   * - `海外`，除中国外全部国家。
   * - 具体国家取值，如`中国`、`美国`。
   * @example "中国"
   */
  UserCountry?: string;
  /**
   * 客户端省份。支持查询多个省份，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有省份。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端省份。
   * @example "北京"
   */
  UserProvince?: string;
}

export interface DescribeImageXEdgeRequestRegionsQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。<br>起始时间与结束时间间隔小于等于 90 天。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。<br>起始时间与结束时间间隔小于等于 90 天。
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXEdgeRequestRegionsRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 客户端国家
     * @example "["中国"]"
     */
    UserCountry: string[];
    /**
     * 客户端省份
     * @example "["北京"]"
     */
    UserProvince: string[];
  };
}

export interface DescribeImageXEdgeRequestRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 数据列表
     *
     * @example "-"
     */
    RequestCnt: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求次数，单位为次。
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 数据类型，当`GroupBy`指定了`DataType`时有返回值。
       * 当GroupBy带有DataType时出现
       * @example "200"
       */
      DataType?: string;
      /**
       * 域名，当`GroupBy`指定了`DomainName`时有返回值。
       * 当GroupBy带有DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXEdgeRequestTrafficQuery {
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 分组依据，取值仅支持`DomainName`。
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 过滤运营商。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `电信`
   * - `联通`
   * - `移动`
   * - `鹏博士`
   * - `教育网`
   * - `广电网`
   * - `其它`
   * @example "移动,联通"
   */
  Isp?: string;
  /**
   * 过滤网络协议。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `HTTP`
   * - `HTTPS`
   * @example "HTTP,HTTPS"
   */
  Protocols?: string;
  /**
   * 区域。支持查询多个区域，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `中国大陆`
   * - `亚太一区`
   * - `亚太二区`
   * - `亚太三区`
   * - `欧洲区`
   * - `北美区`
   * - `南美区`
   * - `中东区`
   * @example "中国大陆"
   */
  Regions?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 客户端国家。传入多个时用英文逗号作为分割符，缺省情况下表示不过滤。您可以通过调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端国家。取值如下所示：
   *
   * - `海外`，除中国外全部国家。
   * - 具体国家取值，如`中国`、`美国`。
   * @example "中国"
   */
  UserCountry?: string;
  /**
   * 客户端省份。传入多个用英文逗号分割，缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端省份。
   * @example "北京"
   */
  UserProvince?: string;
}

export interface DescribeImageXEdgeRequestTrafficRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 查询数据
     * @example "-"
     */
    TrafficData: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 流量，单位为 byte。
         * @format float
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 域名，仅当`GroupBy`取值为`DomainName`时返回该参数。
       * 当GroupBy带有DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXExceedCountByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。您可以通过调用[查询应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[查询自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[查询自定义维度值](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度，取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用[查询自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXExceedCountByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 大图样本量上报数据。
     * 上报量数据。
     * @example "-"
     */
    ExceedCountData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的上报量
       * @example 123
       */
      Count: number;
      /**
       * 对应的客户端上报量数据列表。
       * 对应的客户端上报量数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 上报量数据
         * 上报量数据
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上报量数据
         * 上报量数据
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXExceedFileSizeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度，取值如下所示：
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`Country`、`Province`、`Isp`、`Domain`
   * - 自定义维度：您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,Country,Province,Isp,Domain），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXExceedFileSizeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 客户端文件体积大小分布数据。
     * 文件大小分布数据
     * @example "-"
     */
    FSizeData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 3
       */
      Count: number;
      /**
       * 对应的文件大小数据列表。
       * 对应的文件大小数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 23
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 文件大小，单位为 byte。
         * 文件大小，单位byte
         * @format float
         * @example 3672400
         */
        Value: number;
      }[];
      /**
       * 数据类型。当`GroupBy`为空或`Duration`时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * 数据类型。
       * 当GroupBy为空或Duration时，取值avg/pct25/pct50/pct90/pct99/min/max，否则取值为指定拆分维度的各个值。
       * @example "avg"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXExceedResolutionRatioAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "WEB"
   */
  OS?: string;
  /**
   * 是否升序排序，取值如下所示：
   *
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "false"
   */
  OrderAsc?: string;
  /**
   * 排序依据，不传或者传空默认按上报量排序。取值如下所示：
   * - `Count`：按上报量排序
   * - `WidthRatio`：按宽比排序
   * - `HeightRatio`：按高比排序
   * - 不传或者传空或者取值为`Count`时，表示按上报量排序。
   * - 取值为`WidthRatio`时，表示按宽比排序。
   * - 取值为`HeightRatio`时，表示按高比排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本.
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXExceedResolutionRatioAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 客户端大图分辨率分布数据。
     * 文件大小分布数据
     * @example "-"
     */
    ResolutionRatioData: {
      /**
       * 大图样本量
       * @format int64
       * @example 100
       */
      Count: number;
      /**
       * 高比，为图片高/view 高的整数值。
       * 高比，即为图片高/view高取整
       * @format int32
       * @example 4
       */
      HeightRatio: number;
      /**
       * 比率，格式为：宽比-高比。
       * 格式为：宽比-高比
       * @example "5-4"
       */
      Ratio: string;
      /**
       * 宽比，为图片宽/view 宽的整数值。
       * 宽比，即为图片宽/view宽取整
       * @format int32
       * @example 5
       */
      WidthRatio: number;
    }[];
  };
}

export interface DescribeImageXHeifEncodeDurationByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "has_alpha"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，标识不拆分。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * @example "["0-360p(含)"]"
   */
  ImageResolution?: string[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","data_type"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * iOS
   * Android
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHeifEncodeDurationByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 网络耗时数据。
     * 编码耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 数据上报总量。
       * 数据上报量
       * @example 333
       */
      Count: number;
      /**
       * 对应的网络耗时数据列表。
       * 对应的编码耗时数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据上报量。
         * 数据上报量
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 平均耗时，单位为毫秒。
         * 平均耗时，单位毫秒
         * @format float
         * @example 333
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - 当`GroupBy`取值为空时，取值为：Total
       * - 当`GroupBy`取值为`Duration`时，取值为：avg、min、max、pct25、pct50、pct90、pct99
       * - 除上述外取值为指定拆分维度的各个值
       * 数据类型。
       * 当GroupBy为空时，取值为：Total。
       * 当GroupBy为Duration时，取值为：min、max、pct25、pct50、pct90、pct99、avg。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXHeifEncodeErrorCodeByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "has_alpha"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * @example "["0-360p(含)"]"
   */
  ImageResolution?: string[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * iOS
   * Android
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHeifEncodeErrorCodeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 编码错误码数据。
     * 编码错误码数据。
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 错误码总量。
       * 错误码总量。
       * @example 333
       */
      Count: number;
      /**
       * 错误码对应的时序数据。
       * 错误码对应的时序数据。
       * @example "-"
       */
      Data: {
        /**
         * 错误码数量。
         * 错误码数量。
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 错误码数量。
         * 错误码数量。
         * @example 333
         */
        Value: number;
      }[];
      /**
       * 错误码。
       * 错误码。
       * @example "-999"
       */
      ErrorCode: string;
    }[];
  };
}

export interface DescribeImageXHeifEncodeFileInSizeByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "has_alpha"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，标识不拆分。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * @example "["0-360p(含)"]"
   */
  ImageResolution?: string[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","data_type"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * iOS
   * Android
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHeifEncodeFileInSizeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 文件大小数据
     * 文件大小数据
     * @example "-"
     */
    FileSizeData: {
      /**
       * 数据上报总量。
       * 数据上报量
       * @example 333
       */
      Count: number;
      /**
       * 对应的文件大小数据列表。
       * 对应的文件大小数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据上报量。
         * 数据上报量
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 文件大小，单位为 byte。
         * 文件大小，单位byte
         * @format float
         * @example 333
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - 当`GroupBy`取值为空时，取值为：Total
       * - 当`GroupBy`取值为`Duration`时，取值为：avg、min、max、pct25、pct50、pct90、pct99
       * - 除上述外取值为指定拆分维度的各个值
       * 数据类型。
       * 当GroupBy为空时，取值为：Total。
       * 当GroupBy为Duration时，取值为：min、max、pct25、pct50、pct90、pct99、avg。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXHeifEncodeFileOutSizeByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "has_alpha"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，标识不拆分。支持取值：
   * - `Duration`：表示拆分分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：Duration（拆分分位数据）、公共维度（Appid,OS,AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "Duration"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * @example "["0-360p(含)"]"
   */
  ImageResolution?: string[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","data_type"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * iOS
   * Android
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHeifEncodeFileOutSizeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 文件大小数据
     * 文件大小数据
     * @example "-"
     */
    FileSizeData: {
      /**
       * 数据上报总量。
       * 数据上报量
       * @example 333
       */
      Count: number;
      /**
       * 对应的文件大小数据列表。
       * 对应的文件大小数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据上报量。
         * 数据上报量
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 文件大小，单位为 byte。
         * 文件大小，单位byte
         * @format float
         * @example 333
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - 当`GroupBy`取值为空时，取值为：Total
       * - 当`GroupBy`取值为`Duration`时，取值为：avg、min、max、pct25、pct50、pct90、pct99
       * - 除上述外取值为指定拆分维度的各个值
       * 数据类型。
       * 当GroupBy为空时，取值为：Total。
       * 当GroupBy为Duration时，取值为：avg、min、max、pct25、pct50、pct90、pct99。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXHeifEncodeSuccessCountByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "has_alpha"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，标识不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * @example "["0-360p(含)"]"
   */
  ImageResolution?: string[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","data_type"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * iOS
   * Android
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHeifEncodeSuccessCountByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 编码成功次数数据。
     * 编码成功次数数据
     * @example "-"
     */
    SuccessCountData: {
      /**
       * 编码成功次数。
       * 编码成功次数
       * @example 333
       */
      Count: number;
      /**
       * 对应的编码成功次数数据列表。
       * 对应的编码成功次数数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 编码成功次数。
         * 编码成功次数
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 编码成功次数。
         * 编码成功次数
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - 当`GroupBy`取值为空时，取值为：Total
       * - 除上述外取值为指定拆分维度的各个值
       * 数据类型。
       * 当GroupBy为空时，取值为：Total。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXHeifEncodeSuccessRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.2.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项 。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "has_alpha"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。
   * * `5m`：5 分钟；
   * * `1h`：1 小时；
   * * `1d`：1 天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，标识不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`、`ImageResolution`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType,ImageResolution），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片分辨率，不传则匹配所有图片分辨率。
   * @example "["0-360p(含)"]"
   */
  ImageResolution?: string[];
  /**
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * 需要匹配的系统类型，不传则匹配所有系统。取值如下所示：
   * iOS
   * Android
   * @example "WEB"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.2.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHeifEncodeSuccessRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 编码成功率数据。
     * 编码成功率数据
     * @example "-"
     */
    SuccessRateData: {
      /**
       * 数据上报总量。
       * 数据上报次数。
       * @example 333
       */
      Count: number;
      /**
       * 对应的编码成功率数据列表。
       * 对应的编码成功次数数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据上报量。
         * 数据上报次数。
         * @example 333
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 编码成功率。
         * 编码成功率。
         * @format float
         * @example "0.95"
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - 当`GroupBy`取值为空时，取值为：Total
       * - 除上述外取值为指定拆分维度的各个值
       * 数据类型。
       * 当GroupBy为空时，取值为：Total。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXHitRateRequestDataQuery {
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数。取值仅支持`DomainName`。
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度，单位为秒。缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHitRateRequestDataRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 命中率数据
     * @example "-"
     */
    HitRateData: {
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求命中率
         * @format float
         * @example "0.2"
         */
        Value: number;
      }[];
      /**
       * 域名，当`GroupBy`指定了`DomainName`时有返回值。
       * 当GroupBy=DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXHitRateTrafficDataQuery {
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数。取值仅支持`DomainName`。
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度，单位为秒。缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXHitRateTrafficDataRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 命中率数据
     * @example "-"
     */
    HitRateData: {
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 流量命中率。
         * @format float
         * @example "0.2"
         */
        Value: number;
      }[];
      /**
       * 域名，当`GroupBy`指定了`DomainName`时有返回值。
       * 当GroupBy=DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXMirrorRequestBandwidthBody {
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * 限制查询的域名，传入多个用英文逗号分割。不传为不限制。
   * @example "["d1","d2"]"
   */
  DomainNames?: string[];
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "60"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * 限制查询的服务id，传入多个用英文逗号分割。不传为不限制。
   * @example "["s1","s2"]"
   */
  ServiceIds?: string[];
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXMirrorRequestBandwidthRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 时序数据
     * @example "-"
     */
    Data: {
      /**
       * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
       * @example "2023-01-01T00:00:00+08:00"
       */
      TimeStamp: string;
      /**
       * 带宽，单位为 bps。
       * 带宽，单位bps
       * @example "12.3"
       */
      Value: number;
    }[];
  };
}

/** 描述 */
export interface DescribeImageXMirrorRequestHttpCodeByTimeBody {
  /**
   * 状态码是否聚合，取值如下所示：
   *
   * - `true`：聚合
   * - `false`：（默认）不聚合
   * 状态码是否聚合。取值：true/false。默认为false
   * @example "true"
   */
  AggregateCode?: string;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * 限制查询的域名，传入多个用英文逗号分割。不传为不限制。
   * @example "["d1"]"
   */
  DomainNames?: string[];
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度，单位为秒。缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "60"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * 限制查询的服务id，传入多个用英文逗号分割。不传为不限制。
   * @example "["s1"]"
   */
  ServiceIds?: string[];
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXMirrorRequestHttpCodeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 数据列表
     * @example "-"
     */
    Data: {
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求次数，单位为次。
         * 请求次数
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 状态码
       * @example "2xx"
       */
      HttpCode: string;
    }[];
  };
}

/** 描述 */
export interface DescribeImageXMirrorRequestHttpCodeOverviewBody {
  /**
   * 状态码是否聚合，取值如下所示：
   *
   * - `true`：聚合
   * - `false`：（默认）不聚合
   * 状态码是否聚合。取值：true/false。默认为false
   * @example "true"
   */
  AggregateCode?: string;
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * 限制查询的域名，传入多个用英文逗号分割。不传为不限制。
   * @example "["d1"]"
   */
  DomainNames?: string[];
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * 限制查询的服务id，传入多个用英文逗号分割。不传为不限制。
   * @example "["s1"]"
   */
  ServiceIds?: string[];
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXMirrorRequestHttpCodeOverviewRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 具体数据
     * @example "-"
     */
    Data: {
      /**
       * 总请求次数，单位为次。
       * 总请求次数
       * @example 123
       */
      Count: number;
      /**
       * 详细数据
       * @example "-"
       */
      Details: {
        /**
         * Http 状态码
         * @example "2xx"
         */
        HttpCode: string;
        /**
         * Http 状态码对应的请求次数，单位为次。
         * http状态码对应的请求次数
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 域名
       * 域名
       * @example "d1"
       */
      Domain: string;
    }[];
  };
}

/** 描述 */
export interface DescribeImageXMirrorRequestTrafficBody {
  /**
   * 域名。支持查询多个域名，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * 限制查询的域名，传入多个用英文逗号分割。不传为不限制。
   * @example "["d1"]"
   */
  DomainNames?: string[];
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "60"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * 限制查询的服务id，传入多个用英文逗号分割。不传为不限制。
   * @example "["s1"]"
   */
  ServiceIds?: string[];
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。例如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXMirrorRequestTrafficRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 数据列表
     * @example "-"
     */
    Data: {
      /**
       * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
       * @example "2023-01-01T00:00:00+08:00"
       */
      TimeStamp: string;
      /**
       * 流量，单位为 byte。
       * 流量，单位byte
       * @example 123
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXMultiCompressUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXMultiCompressUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 多文件压缩用量数据
     * @example "-"
     */
    CompressData: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 压缩量，单位为 Byte。
         * 压缩量，单位Byte。
         * @example 1234
         */
        Value: number;
      }[];
    }[];
  };
}

export interface DescribeImageXRequestCntUsageQuery {
  /**
   * 组件名称。支持查询多个组件，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有组件。您可通过调用 [GetImageAddOnConf](https://www.volcengine.com/docs/508/66145) 查看`Key`返回值。
   * @example "a1,a2"
   */
  AdvFeats?: string;
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 维度拆分的维度值。不传表示不拆分维度，只能传入单个参数。支持取值如下：
   * - `ServiceId`：服务
   * - `AdvFeat`：组件
   * @example "AdvFeat"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 图片处理模板。支持查询多个模板，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有模板。您可通过调用 [GetAllImageTemplates](https://www.volcengine.com/docs/508/9386) 获取服务下全部模版信息。
   * @example "t1,t2"
   */
  Templates?: string;
}

export interface DescribeImageXRequestCntUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 请求次数据。
     * @example "-"
     */
    RequestCntData: {
      /**
       * 附加组件类型，`GroupBy`包含`AdvFeat`时有返回值。如：enhance，smartcut。取值为`total`，表示包含所选`AdvFeat`实际请求次数。
       * 附加组件类型，`GroupBy`包含`AdvFeat`时有返回值。如：enhance，smartcut。取值为`total`，表示包含所选`AdvFeat`实际请求次数。
       * @example "total"
       */
      AdvFeat?: string;
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻。按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 统计时间点，时间片结束时刻。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求次
         * 请求次
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * 服务 ID，`GroupBy`包含`ServiceId`时有返回值。
       * @example "s1"
       */
      ServiceId?: string;
    }[];
  };
}

export interface DescribeImageXScreenshotUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXScreenshotUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 截帧用量
     * @example "-"
     */
    ScreenshotData: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 统计时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 截帧使用次数
         * @example 123
         */
        Value: number;
      }[];
    }[];
  };
}

export interface DescribeImageXSensibleCacheHitRateByTimeBody {
  /**
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * @example "["1.0.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID，缺省情况下匹配账号下所有 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，例如`2019-06-02T00:00:00+08:00`。
   * 起始时间与结束时间间隔小于等于 90 天。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-03T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "country"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["中国"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度，支持以下取值：
   * - `5m`：5分钟；
   * - `1h`：1小时；
   * - `1d`：1天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "5m"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，缺省情况下则匹配所有图片类型。支持以下取值：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，缺省情况下匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "Android"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，缺省情况下则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.0.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，例如`2019-06-02T00:00:00+08:00`。
   * 起始时间与结束时间间隔小于等于 90 天。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 缓存类型。支持以下取值：
   * - `1`：查询内存命中率数据；
   * - `2`：查询磁盘命中率数据。
   * 缓存类型。支持以下取值：
   * 1：查询内存命中率数据；
   * 2：查询磁盘命中率数据。
   * @example "1"
   */
  Type: string;
}

export interface DescribeImageXSensibleCacheHitRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 命中率数据
     * 命中率数据
     * @example "-"
     */
    CacheHitData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 3
       */
      Count: number;
      /**
       * 具体数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 数据对应的上报量。
         * 数据对应的上报量
         * @example 3
         */
        Count: number;
        /**
         * 数据对应时间点，按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 内存/磁盘命中率。
         * 内存/磁盘命中率
         * @format float
         * @example "0.11297"
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXSensibleCountByTimeBody {
  /**
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * @example "["1.0.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID，缺省情况下匹配账号下所有 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，例如`2019-06-02T00:00:00+08:00`。
   * 起始时间与结束时间间隔小于等于 90 天。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-03T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "country"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["中国"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度，取值如下所示：
   * - `5m`：5分钟；
   * - `1h`：1小时；
   * - `1d`：1天。
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "5m"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的图片类型，缺省情况下则匹配所有图片类型。取值如下所示：
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，缺省情况下匹配非 WEB 端的所有系统。取值如下所示：
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "Android"
   */
  OS?: string;
  /**
   * 需要匹配的 SDK 版本，缺省情况下则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.0.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，例如`2019-06-02T00:00:00+08:00`。
   * 起始时间与结束时间间隔小于等于 90 天。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXSensibleCountByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 采集样本量数据
     * 采集样本量数据
     * @example "-"
     */
    SensibleCountData: {
      /**
       * 该数据类型对应的总上报量。
       * 该数据类型对应的总上报量
       * @example 2
       */
      Count: number;
      /**
       * 具体数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 上报量数据。
         * 上报量数据
         * @example 2
         */
        Count: number;
        /**
         * 数据对应时间点，按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上报量数据，与`Count`数值相同。
         * 上报量数据，与Count数值相同。
         * @example 2
         */
        Value: number;
      }[];
      /**
       * 数据类型，不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXSensibleTopRamURLBody {
  /**
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * @example "["1.0.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，缺省情况下匹配账号下的所有的 App ID。您可以通过调用[GetImageXQueryApps](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-03T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "biz_tag"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 需要匹配的图片类型，缺省情况下则匹配所有图片类型。支持以下取值：
   *
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，缺省情况下匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "Android"
   */
  OS?: string;
  /**
   * 支持以下取值：
   * - `1`：按上报次数降序排序；
   * - `2`：按内存大小降序排序。
   * 支持以下取值：
   * 1：按上报次数排序；
   * 2：按内存大小排序。
   * @example 1
   */
  OrderByIdx: number;
  /**
   * 需要匹配的 SDK 版本，缺省情况下匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.0.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXSensibleTopRamURLRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * Top URL 数据
     * Top URL 数据
     * @example "-"
     */
    TopUrlData: {
      /**
       * Activity+View 树，控件信息。
       * Activity+View 树，控件信息。
       * @example "Controller/View"
       */
      ActivityViewTree: string;
      /**
       * 业务标识
       * 业务标识
       * @example "xxxx"
       */
      BizTag: string;
      /**
       * 上报次数
       * 上报次数
       * @example 128
       */
      Count: number;
      /**
       * 图片内存大小
       * 图片内存大小
       * @example 9860
       */
      RamSize: number;
      /**
       * 图片 URL
       * 图片URL
       * @example "http://xxx.image"
       */
      URL: string;
    }[];
  };
}

export interface DescribeImageXSensibleTopResolutionURLBody {
  /**
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * @example "["1.0.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，缺省情况下匹配账号下的所有的 App ID。您可以通过调用[GetImageXQueryApps](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-03T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "biz_tag"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 需要匹配的图片类型，缺省情况下则匹配所有图片类型。支持以下取值：
   *
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，缺省情况下匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "Android"
   */
  OS?: string;
  /**
   * 支持以下取值：
   * - `1`：按上报次数排序；
   * - `2`：按图片分辨率排序；
   * - `3`：按 view 分辨率排序。
   * 支持以下取值：
   * 1：按上报次数排序；
   * 2：按图片分辨率排序；
   * 3：按 view 分辨率排序。
   * @example 1
   */
  OrderByIdx: number;
  /**
   * 需要匹配的 SDK 版本，缺省情况下匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.0.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXSensibleTopResolutionURLRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 具体数据
     * 具体数据
     * @example "-"
     */
    TopUrlData: {
      /**
       * Activity+View 树，控件信息
       * Activity+View 树，控件信息。
       * @example "Controller/View"
       */
      ActivityViewTree: string;
      /**
       * 业务标识
       * 业务标识
       * @example "xxxx"
       */
      BizTag: string;
      /**
       * 上报次数
       * 上报次数
       * @example 124
       */
      Count: number;
      /**
       * 图片高
       * 图片高
       * @example 833
       */
      ImageHeight: number;
      /**
       * 图片宽
       * 图片宽
       * @example 481
       */
      ImageWidth: number;
      /**
       * 图片 URL
       * 图片URL
       * @example "http://xxx.image"
       */
      URL: string;
      /**
       * 图片展示背景 view 高
       * 图片展示背景 view 高。
       * @example 800
       */
      ViewHeight: number;
      /**
       * 图片展示背景 view 宽
       * 图片展示背景 view 宽。
       * @example 500
       */
      ViewWidth: number;
    }[];
  };
}

export interface DescribeImageXSensibleTopSizeURLBody {
  /**
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * @example "["1.0.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，缺省情况下则匹配账号下的所有的 App ID。您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-03T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "biz_tag"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 需要匹配的图片类型，缺省情况下则匹配所有图片类型。支持以下取值：
   *
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，缺省情况下则匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "Android"
   */
  OS?: string;
  /**
   * 支持以下取值：
   * - `1`：按上报次数降序排序；
   * - `2`：按文件体积降序排序。
   * 支持以下取值：
   * 1：按上报次数排序；
   * 2：按文件体积排序。
   * @example 1
   */
  OrderByIdx: number;
  /**
   * 需要匹配的 SDK 版本，缺省情况下则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.0.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXSensibleTopSizeURLRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * Top URL数据
     * Top URL数据
     * @example "-"
     */
    TopUrlData: {
      /**
       * Activity+View 树，控件信息。
       * Activity+View 树，控件信息。
       * @example "Controller/View"
       */
      ActivityViewTree: string;
      /**
       * 业务标识
       * 业务标识
       * @example "xxxx"
       */
      BizTag: string;
      /**
       * 上报次数
       * 上报次数
       * @example 123
       */
      Count: number;
      /**
       * 文件URL
       * 文件URL
       * @example "http://xxx.image"
       */
      URL: string;
      /**
       * 文件体积
       * 文件体积
       * @example 6590
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXSensibleTopUnknownURLBody {
  /**
   * 需要匹配 App 版本，缺省情况下匹配 App 的所有版本。
   * 需要匹配 App 版本，缺省情况下则匹配 App 的所有版本。
   * @example "["1.0.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，缺省情况下匹配账号下的所有的 App ID。您可以通过调用[GetImageXQueryApps](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-03T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "biz_tag"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["xxx"]"
     */
    Vals: string[];
  }[];
  /**
   * 需要匹配的图片类型，缺省情况下则匹配所有图片类型。支持以下取值：
   *
   * - `GIF`
   * - `PNG`
   * - `JPEG`
   * - `HEIF`
   * - `HEIC`
   * - `WEBP`
   * - `AWEBP`
   * - `VVIC`
   * - `AVIF`
   * - `AVIS`
   * - `其他`
   * 需要匹配的图片类型，不传则匹配所有图片类型。
   * GIF
   * PNG
   * JPEG
   * HEIF
   * HEIC
   * WEBP
   * AWEBP
   * VVIC
   * 其他
   * @example "["PNG","JPEG"]"
   */
  ImageType?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`ImageType`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,ImageType），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型，缺省情况下匹配非 WEB 端的所有系统。取值如下所示：
   *
   * - `iOS`
   * - `Android`
   * - `WEB`
   * 需要匹配的系统类型，不传则匹配非WEB端所有系统。取值如下所示：
   * iOS
   * Android
   * WEB
   * @example "Android"
   */
  OS?: string;
  /**
   * 支持以下取值：
   * - `1`：按上报量排序
   * - `2`：按内存大小排序
   * - `3`：按文件大小排序
   * - `4`：按图片分辨率排序
   * - `5`：按 view 分辨率排序
   * 支持以下取值：
   * 1：按上报量排序
   * 2：按内存大小排序
   * 3：按文件大小排序
   * 4：按图片分辨率排序
   * 5：按 view 分辨率排序
   * @example 2
   */
  OrderByIdx: number;
  /**
   * 需要匹配的 SDK 版本，缺省情况下匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.3.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 查询 Top URL 条数，取值范围为(0,1000]。默认值为 1000。
   * 查询 Top URL 条数，取值范围为(0,1000]。缺省情况下默认为 1000。
   * @example 1000
   */
  Top?: number;
}

export interface DescribeImageXSensibleTopUnknownURLRes {
  ResponseMetadata: {
    /** @example "DescribeImageXSensibleTopUnknownURL" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "202306041104200100100232280022D31" */
    RequestId: string;
    /** @example "ImageX" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * Top URL 详情
     * @example "-"
     */
    TopUrlData: {
      /**
       * Activity+View 树，控件信息
       * @example "Controller/View"
       */
      ActivityViewTree?: string;
      /**
       * 业务标识
       * @example "xxxx"
       */
      BizTag?: string;
      /**
       * 上报次数
       * @example 73
       */
      Count?: number;
      /**
       * 文件大小
       * @example 60
       */
      FileSize?: number;
      /**
       * 图片高
       * @example 591
       */
      ImageHeight?: number;
      /**
       * 图片宽
       * @example 400
       */
      ImageWidth?: number;
      /**
       * 图片内存大小
       * @example 90
       */
      RamSize?: number;
      /**
       * 图片 URL
       * @example "http://xxx.image"
       */
      URL?: string;
      /**
       * 展示 view 高
       * @example 700
       */
      ViewHeight?: number;
      /**
       * 展示 view 宽
       * @example 500
       */
      ViewWidth?: number;
    }[];
  };
}

export interface DescribeImageXServerQPSUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `1`: 单次查询最大时间跨度为 6 小时
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXServerQPSUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * QPS 用量
     * @example "-"
     */
    QPSData: {
      /**
       * 时序数据。
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * QPS 用量的值。单位为 "次/秒"，表示每秒处理的请求数量。
         * @example 12
         */
        Value: number;
      }[];
      /**
       * QPS 类型，取值如下所示：
       * - `Request`：专有图像处理和高效压缩
       * - `Mirror`：资源下载与镜像代理
       * @example "Request"
       */
      QPSType: string;
    }[];
  };
}

export interface DescribeImageXServiceQualityQuery {
  /**
   * 获取指定地区的数据。默认为空，表示获取国内数据。
   * * `cn`：国内。
   * * `sg`：新加坡。
   * @example "cn"
   */
  Region?: string;
}

export interface DescribeImageXServiceQualityRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * 下行概览数据，为当日 0 点至今整体数据。
     * 下行概览数据，为当日 0 点至今整体数据。
     * @example "-"
     */
    CdnData: {
      /**
       * 网络平均耗时，单位为 ms。
       * 网络平均耗时，单位为 ms。
       * @format float
       * @example 356
       */
      AvgDuration: number;
      /**
       * 网络成功率
       * :::tip
       * 网络成功率 = 1 - 下载失败次数 / 下载总数
       * :::
       * 网络成功率
       * @format float
       * @example "0.9927386619504328"
       */
      SuccessRate: number;
      /**
       * 下行总上报数据量。
       * 下行总上报数据量。
       * @example 90281
       */
      TotalCount: number;
    };
    /**
     * 客户端概览数据，为当日 0 点查询时间的整体数据。
     * 客户端概览数据，为当日 0 点查询时间的整体数据。
     * @example "-"
     */
    ClientData: {
      /**
       * 平均解码耗时，单位为 ms。
       * 平均解码耗时，单位为 ms。
       * @format float
       * @example 11
       */
      AvgDecodeDuration: number;
      /**
       * 平均加载耗时，单位为 ms。
       * 平均加载耗时，单位为 ms。
       * @format float
       * @example 752
       */
      AvgLoadDuration: number;
      /**
       * 平均排队耗时，单位为 ms。
       * 平均排队耗时，单位为 ms。
       * @format float
       * @example 370
       */
      AvgQueueDuration: number;
      /**
       * 解码成功率
       * :::tip
       * 解码成功率 = 1 - 解码失败次数 / 解码总次数
       * :::
       * 解码成功率
       * @format float
       * @example "0.9996384232001669"
       */
      SuccessRate: number;
      /**
       * 客户端总上报数据量。
       * 客户端总上报数据量。
       * @example 92781
       */
      TotalCount: number;
    };
    /**
     * 用户感知失败率，为当日 0 点至查询时间的整体数据。
     * 用户感知失败率，为当日 0 点至查询时间的整体数据。
     * @format float
     * @example "0.006693045490108962"
     */
    FailureRate: number;
    /**
     * 上传概览数据，为当日 0 点查询时间的整体数据。
     * 上传概览数据，为当日 0 点查询时间的整体数据。
     * @example "-"
     */
    UploadData: {
      /**
       * 上传平均耗时，单位为 ms。
       * 上传平均耗时，单位为 ms。
       * @format float
       * @example 2428
       */
      AvgDuration: number;
      /**
       * 上传文件平均大小，单位为字节。
       * 上传文件平均大小，单位字节。
       * @format float
       * @example 377649
       */
      AvgSize: number;
      /**
       * 上传成功率。
       * :::tip
       * 上传成功率 = 上传成功次数 / 上传总有效次数
       * :::
       * 上传成功率
       * @format float
       * @example "0.9975451872358082"
       */
      SuccessRate: number;
      /**
       * 上传总上报数据量。
       * 上传总上报数据量。
       * @example 3919
       */
      TotalCount: number;
      /**
       * 上传有效次数。
       * 上传有效次数
       * @example 7189143
       */
      UploadCount: number;
    };
  };
}

export interface DescribeImageXSourceRequestBandwidthQuery {
  /**
   * 域名。为空时表示不筛选，支持查询多个域名，不同的域名使用逗号分隔。
   * 您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 分组依据，仅支持取值`DomainName`。
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 过滤运营商。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `电信`
   * - `联通`
   * - `移动`
   * - `鹏博士`
   * - `教育网`
   * - `广电网`
   * - `其它`
   * @example "移动,联通"
   */
  Isp?: string;
  /**
   * 过滤网络协议。传入多个用英文逗号分割。缺省情况下表示不过滤。取值如下所示：
   *
   * - `HTTP`
   * - `HTTPS`
   * @example "HTTP,HTTPS"
   */
  Protocols?: string;
  /**
   * 区域。传入多个时用英文逗号作为分割符，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `中国大陆`
   * - `亚太一区`
   * - `亚太二区`
   * - `亚太三区`
   * - `欧洲区`
   * - `北美区`
   * - `南美区`
   * - `中东区`
   * @example "中国大陆"
   */
  Regions?: string;
  /**
   * 服务 ID。为空时表示不筛选，支持查询多个服务，使用逗号分隔不同的服务。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考 [GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 客户端国家。传入多个时用英文逗号作为分割符，缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端国家。取值如下所示：
   *
   * - `海外`，除中国外全部国家。
   * - 具体国家取值，如`中国`、`美国`。
   * @example "中国"
   */
  UserCountry?: string;
  /**
   * 客户端省份。传入多个用英文逗号分割。缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端省份。
   * @example "北京"
   */
  UserProvince?: string;
}

export interface DescribeImageXSourceRequestBandwidthRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 带宽数据。
     * @example "-"
     */
    BpsData: {
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 带宽，单位为 bps。
         * @format float
         * @example "12.3"
         */
        Value: number;
      }[];
      /**
       * 域名，仅当`GroupBy`取值为`DomainName`时返回该参数。
       * 当GroupBy带有DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXSourceRequestQuery {
  /**
   * 状态码。传入多个时用英文逗号分隔。支持以下取值：
   *
   * - `req_cnt`：返回所有状态码数据
   * - `2xx`：返回 2xx 状态码汇总数据
   * - `3xx`：返回 3xx 状态码汇总数据
   * - `4xx`：返回 4xx 状态码汇总数据
   * - `5xx`：返回 5xx 状态码汇总数据。
   * @example "req_cnt,2xx,3xx"
   */
  DataTypes: string;
  /**
   * 是否拆分状态码。取值如下所示：
   *
   * - `true`：拆分
   * - `false`：（默认）不拆分
   * @example "true"
   */
  DetailedCode?: boolean;
  /**
   * 域名。为空时表示不筛选，支持查询多个域名，不同的域名使用逗号分隔。
   * 您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要分组查询的参数。传入多个用英文逗号分割。支持以下取值：
   *
   * - `DomainName`：域名
   * - `DataType`：状态码
   * @example "DomainName,DataType"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 过滤运营商。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `电信`
   * - `联通`
   * - `移动`
   * - `鹏博士`
   * - `教育网`
   * - `广电网`
   * - `其它`
   * @example "移动,联通"
   */
  Isp?: string;
  /**
   * 过滤网络协议。传入多个用英文逗号分割。缺省情况下表示不过滤。取值如下所示：
   *
   * - `HTTP`
   * - `HTTPS`
   * @example "HTTP,HTTPS"
   */
  Protocols?: string;
  /**
   * 区域。传入多个时用英文逗号作为分割符，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `中国大陆`
   * - `亚太一区`
   * - `亚太二区`
   * - `亚太三区`
   * - `欧洲区`
   * - `北美区`
   * - `南美区`
   * - `中东区`
   * @example "中国大陆,北美区"
   */
  Regions?: string;
  /**
   * 服务 ID。为空时表示不筛选，支持查询多个服务，使用逗号分隔不同的服务。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考 [GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 客户端国家。传入多个时用英文逗号作为分割符，缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端国家。取值如下所示：
   *
   * - `海外`，除中国外全部国家。
   * - 具体国家取值，如`中国`、`美国`。
   * @example "中国"
   */
  UserCountry?: string;
  /**
   * 客户端省份。传入多个用英文逗号分割。缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端省份。
   * @example "北京"
   */
  UserProvince?: string;
}

export interface DescribeImageXSourceRequestRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 数据列表
     * :::tip
     * * 若未设置`Interval`，则上报一条`StartTime`与`EndTime`时间段内查询的全部请求次数据；
     * * 若设置了`Interval`，则按`Interval`粒度分段上报查询的时间粒度内请求次数据；
     * :::
     * @example "-"
     */
    RequestCnt: {
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 请求次数，单位为次。
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 数据类型，当`GroupBy`指定了`DataType`时有返回值。
       * 当GroupBy带有DataType时出现
       * @example "200"
       */
      DataType?: string;
      /**
       * 域名，当`GroupBy`指定了`DomainName`时有返回值。
       * 当GroupBy带有DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXSourceRequestTrafficQuery {
  /**
   * 域名。为空时表示不筛选，支持查询多个域名，不同的域名使用逗号分隔。
   * 您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取服务下所有域名信息。
   * @example "d1,d2"
   */
  DomainNames?: string;
  /**
   * 获取数据结束时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 分组依据，仅支持取值`DomainName`。
   * @example "DomainName"
   */
  GroupBy?: string;
  /**
   * 查询数据的时间粒度。单位为秒，缺省时查询`StartTime`和`EndTime`时间段全部数据，此时单次查询最大时间跨度为 93 天。支持以下取值：
   *
   * - `60`：单次查询最大时间跨度为 6 小时
   * - `120`：单次查询最大时间跨度为 6 小时
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 过滤运营商。传入多个用英文逗号分割，缺省情况下表示不过滤。取值如下所示：
   *
   * - `电信`
   * - `联通`
   * - `移动`
   * - `鹏博士`
   * - `教育网`
   * - `广电网`
   * - `其它`
   * @example "移动,联通"
   */
  Isp?: string;
  /**
   * 过滤网络协议。传入多个用英文逗号分割。缺省情况下表示不过滤。取值如下所示：
   *
   * - `HTTP`
   * - `HTTPS`
   * @example "HTTP,HTTPS"
   */
  Protocols?: string;
  /**
   * 区域。传入多个时用英文逗号作为分割符，缺省情况下表示查询所有区域。取值如下所示：
   *
   * - `中国大陆`
   * - `亚太一区`
   * - `亚太二区`
   * - `亚太三区`
   * - `欧洲区`
   * - `北美区`
   * - `南美区`
   * - `中东区`
   * @example "中国大陆"
   */
  Regions?: string;
  /**
   * 服务 ID。为空时表示不筛选，支持查询多个服务，使用逗号分隔不同的服务。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考 [GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 93 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
  /**
   * 客户端国家。传入多个时用英文逗号作为分割符，缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端国家。取值如下所示：
   *
   * - `海外`，除中国外全部国家。
   * - 具体国家取值，如`中国`、`美国`。
   * @example "中国"
   */
  UserCountry?: string;
  /**
   * 客户端省份。传入多个用英文逗号分割。缺省情况下表示不过滤。可调用 [DescribeImageXEdgeRequestRegions](https://www.volcengine.com/docs/508/1209574) 获取 IP 解析后的客户端省份。
   * @example "北京"
   */
  UserProvince?: string;
}

export interface DescribeImageXSourceRequestTrafficRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 查询数据
     * @example "-"
     */
    TrafficData: {
      /**
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 统计时间点，时间片开始时刻，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 流量，单位为 byte。
         * @format float
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 域名，仅当`GroupBy`取值为`DomainName`时返回该参数。
       * 当GroupBy带有DomainName时出现
       * @example "d1"
       */
      DomainName?: string;
    }[];
  };
}

export interface DescribeImageXSummaryQuery {
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 数据查询时间段，即`Timestamp`所在月份的 1 日 0 时起至传入时间`Timestamp`的时间范围。
   * 格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  Timestamp: string;
}

export interface DescribeImageXSummaryRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 当月图像处理量
     * @example "-"
     */
    BaseOpData: {
      /**
       * 当月图像处理量，单位为：Byte。
       * 当月图像处理量，单位为：Byte
       * @format int64
       * @example 0
       */
      Value: number;
    };
    /**
     * 当月带宽用量
     * @example "-"
     */
    CdnBandwidthData: {
      /**
       * 当月带宽用量，单位为：bps。
       * 当月带宽用量，单位为：bps
       * @format float
       * @example 0
       */
      Value: number;
    };
    /**
     * 当月流量用量
     * @example "-"
     */
    CdnTrafficData: {
      /**
       * 当月流量用量，单位为：Byte。
       * 当月流量用量，单位为：Byte
       * @format int64
       * @example 0
       */
      Value: number;
    };
    /**
     * 当月源站请求次数
     * @example "-"
     */
    RequestCntData: {
      /**
       * 当月源站请求次数，单位为：次。
       * 当月源站请求次数，单位为：次
       * @example 0
       */
      Value: number;
    };
    /**
     * 当月资源占用量
     * @example "-"
     */
    StorageData: {
      /**
       * 当月最新一日资源占用量，单位为：Byte。
       * 当月最新一日资源占用量，单位为：Byte
       * @format float
       * @example 0
       */
      Value: number;
    };
  };
}

export interface DescribeImageXUploadCountByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度，取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。  支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","access"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadCountByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上传有效次数数据。
     * 上传有效次数数据。
     * @example "-"
     */
    UploadCountData: {
      /**
       * 对应的总上传有效次数。
       * 对应的总上传有效次数。
       * @example 123
       */
      Count: number;
      /**
       * 对应的上传有效次数数据列表。
       * 对应的上传有效次数数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 上传有效次数。
         * 上传有效次数
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上传有效次数。
         * 上传有效次数
         * @example 123
         */
        Value: number;
      }[];
      /**
       * 数据类型。不拆分时值为`Total`，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXUploadDurationBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 App ID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度，取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，获取拆分分位数据。支持取值：
   * * `Duration`：表示为分位数据
   * - `Phase`：表示分阶段数据，仅当`UploadType`取值为`2`时支持取值。
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（分位数据）、Phase（分阶段数据，只有当UploadType=2时才能取该值）、公共维度（Appid,OS,AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadDurationRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上传耗时数据
     * 上传耗时数据
     * @example "-"
     */
    DurationData: {
      /**
       * 对应的总次数。
       * 对应的总次数。
       * @example 123
       */
      Count: number;
      /**
       * 上传耗时数据列表。
       * 上传耗时数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应上传次数。
         * 数据对应上传次数。
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上传耗时，单位为 ms。
         * 上传耗时，单位为 ms。
         * @format float
         * @example 656
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * * 当`GroupBy`为空或`Duration`时，取值为：pct25、pct50、pct90、pct99、avg。
       * * 当`GroupBy`取值为`Phase`时，取值为：1001、1002、1003、1004、1005。
       * * 除上述外取值为指定拆分维度的各个值。
       * 数据类型。
       * 当GroupBy为空或Duration时，取值为：pct25、pct50、pct90、pct99、avg。
       * 当GroupBy取值为Phase时，取值为：1001、1002、1003、1004、1005。
       * 除上述外取值为指定拆分维度的各个值。
       * @example "pct25"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXUploadErrorCodeAllBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 聚合维度。取值如下所示：
   * * `ErrorCode`：错误码
   * * `Region`：地区
   * * `Isp`：运营商
   * 聚合维度。
   * ErrorCode：错误码
   * Region：地区
   * Isp：运营商
   * @example "Isp"
   */
  GroupBy: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 是否升序排序。取值如下所示：
   * - `true`：是，表示升序排序。
   * - `false`：（默认）否，表示降序排序。
   * 是否升序排序。不传则默认降序排序。
   * @example "true"
   */
  OrderAsc?: boolean;
  /**
   * 目前仅支持传入`Count`按错误码数量排序。不传或者传空默认按错误码数量排序。
   * 目前仅支持传入Count按错误码数量排序。不传或者传空默认按错误码数量排序。
   * @example "Count"
   */
  OrderBy?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadErrorCodeAllRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 错误码数据。
     * 错误码数据。
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 当`GroupBy`取值**非**`ErrorCode`时出现，表示错误码详细信息。
       * 当GroupBy取值非ErrorCode时出现，表示错误码详细信息。
       * @example "-"
       */
      Details?: {
        /**
         * 错误码内容。
         * 错误码内容
         * @example "-32"
         */
        ErrorCode: string;
        /**
         * 错误码的描述信息。
         * 错误码的描述信息
         * @example "Unknown"
         */
        ErrorCodeDesc: string;
        /**
         * 错误码数量。
         * 错误码数量
         * @example 1
         */
        Value: number;
      }[];
      /**
       * 当`GroupBy`取值`ErrorCode`时出现，表示错误码内容。
       * 当GroupBy取值ErrorCode时出现，表示错误码内容。
       * @example "-5"
       */
      ErrorCode?: string;
      /**
       * 当`GroupBy`取值`ErrorCode`时出现，表示错误码的描述信息。
       * 当GroupBy取值ErrorCode时出现，表示错误码的描述信息。
       * @example "Unknown"
       */
      ErrorCodeDesc?: string;
      /**
       * 当`GroupBy`取值`Isp`时出现，则表示运营商信息。
       * 当GroupBy取值Isp时出现，则表示运营商信息。
       * @example "电信"
       */
      Isp?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区信息。
       * 当GroupBy取值Region时出现，表示地区信息。
       * @example "中国"
       */
      Region?: string;
      /**
       * 当`GroupBy`取值`Region`时出现，表示地区类型。
       * * `Country`：国家；
       * * `Province`：省份。
       * 当GroupBy取值Region时出现，表示地区类型。
       * Country：国家；
       * Province：省份。
       * @example "Country"
       */
      RegionType?: string;
      /**
       * 错误码数量。
       * 错误码数量。
       * @example 2
       */
      Value: number;
    }[];
  };
}

export interface DescribeImageXUploadErrorCodeByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","access"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadErrorCodeByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 所有错误码数据。
     * @example "-"
     */
    ErrorCodeData: {
      /**
       * 错误码数量。
       * @example 3
       */
      Count: number;
      /**
       * 错误码对应的时序数据。
       * @example "-"
       */
      Data: {
        /**
         * 错误码数量。
         * @example 3
         */
        Count: number;
        /**
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 错误码数量。
         * @example 3
         */
        Value: number;
      }[];
      /**
       * 错误码。
       * @example "-110"
       */
      ErrorCode: string;
    }[];
  };
}

export interface DescribeImageXUploadFileSizeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：
   * - `Duration`：表示分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（分位数据）、公共维度（Appid,OS,AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","access"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadFileSizeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上传文件大小分布数据。
     * 上传文件大小分布数据。
     * @example "-"
     */
    FSizeData: {
      /**
       * 对应的总次数。
       * 对应的总次数。
       * @example 123
       */
      Count: number;
      /**
       * 对应的文件大小数据列表。
       * 对应的文件大小数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应次数。
         * 数据对应次数。
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 对应文件大小。
         * 对应文件大小。
         * @format float
         * @example 456
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * * `GroupBy`为空或`Druation`时，取值为：pct25、pct50、pct90、pct99、avg。
       * * `GroupBy`取值为其他时，则指定拆分维度的各个值。
       * :::tip
       * pct25 表示 25% 的用户上传文件大小分布数据。
       * :::
       * 数据类型。
       * GroupBy为空或Duration时，取值为：pct25、pct50、pct90、pct99、avg。
       * GroupBy取值为其他时，则指定拆分维度的各个值。
       * @example "avg"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXUploadSegmentSpeedByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。 支持取值：
   * - `Duration`：表示分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（分位数据）、公共维度（Appid,OS,AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，固定值传入`2`，表示上传 2.0 数据。
   * 上传类型，固定值传入2，表示上传 2.0 数据。
   * @example 2
   */
  UploadType: number;
}

export interface DescribeImageXUploadSegmentSpeedByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上传速度数据。
     * 上传速度数据
     * @example "-"
     */
    SpeedData: {
      /**
       * 总上传次数
       * 总上传次数
       * @example 123
       */
      Count: number;
      /**
       * 具体数据
       * 具体数据
       * @example "-"
       */
      Data: {
        /**
         * 上传次数
         * 上传次数
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上传分片速度，单位为 KB/s。
         * 上传分片速度，单位KB/s
         * @format float
         * @example "0.992"
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * - `GroupBy`为空或`Duration`时，取值为：pct25、pct50、pct90、pct99、avg
       * - `GroupBy`取值为其他时，表示指定拆分维度的各个值
       * 数据类型。
       * GroupBy为空或Duration时，取值为：pct25、pct50、pct90、pct99、avg。
       * GroupBy取值为其他时，则指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXUploadSpeedBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，表示拆分分位数据。 支持取值：
   * - `Duration`：表示分位数据
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标。
   * 拆分维度。默认为空，表示拆分分位数据。支持取值：Duration（分位数据）、公共维度（Appid,OS,AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadSpeedRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上传速度数据。
     * 上传速度数据
     * @example "-"
     */
    SpeedData: {
      /**
       * 对应的总次数。
       * 对应的总次数。
       * @example 123
       */
      Count: number;
      /**
       * 对应的上传速度数据列表。
       * 对应的上传速度数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应上传次数。
         * 数据对应上传次数。
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 平均速度，单位为 KB/s。
         * 平均速度，单位为 KB/s。
         * @format float
         * @example "456.7"
         */
        Value: number;
      }[];
      /**
       * 数据类型。
       * * 当`GroupBy`为空或`Duration`时，取值为：pct25、pct50、pct90、pct99、avg，表示各个分位的取值。
       * * 当`GroupBy`取值为其他值时，拆分时为具体的维度值。
       * 数据类型。
       * GroupBy为空或Duration时，取值为：pct25、pct50、pct90、pct99、avg。
       * GroupBy取值为其他时，则指定拆分维度的各个值。
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXUploadSuccessRateByTimeBody {
  /**
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * 需要匹配的 App 版本，不传则匹配 App 的所有版本。
   * @example "["1.0"]"
   */
  AppVer?: string[];
  /**
   * 应用 ID。默认为空，不传则匹配账号下的所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * 应用 ID。默认为空，匹配账号下的所有的App ID。
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的国家名称。
   * * 不传则匹配所有国家。
   * * 取值为`海外`时，匹配海外所有国家。
   * 需要匹配的国家名称。
   * 不传则匹配所有国家。
   * 取值为海外时，匹配海外所有国家。
   * @example "海外"
   */
  Country?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T15:00:00+08:00"
   */
  EndTime: string;
  /**
   * 需要匹配的自定义维度项。
   * 需要匹配的自定义维度项
   * @example "-"
   */
  ExtraDims?: {
    /**
     * 自定义维度名称。
     * :::tip
     * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)来获取。
     * :::
     * 自定义维度名称。
     * @example "access"
     */
    Dim: string;
    /**
     * 需要匹配的对应维度值。
     * :::tip
     * 您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/1213050)来获取。
     * :::
     * 需要匹配的对应维度值
     * @example "["4g"]"
     */
    Vals: string[];
  }[];
  /**
   * 返回数据的时间粒度。取值如下所示：
   * * `5m`： 5 分钟；
   * * `1h`： 1 小时；
   * * `1d`： 1 天；
   * 返回数据的时间粒度。
   * 5m：为 5 分钟；
   * 1h：为 1 小时；
   * 1d：为 1 天。
   * @example "1h"
   */
  Granularity: string;
  /**
   * 拆分维度。默认为空，不拆分。  支持取值：
   * - 公共维度：`Appid`、`OS`、`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 拆分维度。默认为空，不拆分。支持取值：公共维度（Appid,OS,AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "OS"
   */
  GroupBy?: string;
  /**
   * 需要匹配的运营商名称，不传则匹配所有运营商。取值如下所示：
   * - `电信`
   * - `联通`
   * - `移动`
   * - `铁通`
   * - `鹏博士`
   * - `教育网`
   * - `其他`
   * 需要匹配的运营商名称，不传则匹配所有运营商。支持取值如下：
   * 电信
   * 联通
   * 移动
   * 铁通
   * 鹏博士
   * 教育网
   * 其他
   * @example "["电信"]"
   */
  Isp?: string[];
  /**
   * 取值为不等于的维度（默认为等于）。支持取值：
   * - 公共维度：`AppVer`、`SdkVer`、`Country`、`Province`、`Isp`
   * - 自定义维度：您可以通过调用 [GetImageXQueryDims](https://www.volcengine.com/docs/508/1213048)接口获取自定义维度指标
   * 取值为不等于的维度（默认为等于）。支持取值：公共维度（AppVer,SdkVer,Country,Province,Isp），自定义维度（通过"获取自定义维度列表"接口获取）
   * @example "["SdkVer","access"]"
   */
  Not?: string[];
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web。
   * - `Imp`：小程序。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 需要匹配的省份名称，不传则匹配所有省份。
   * 需要匹配的省份名称，不传则匹配所有省份
   * @example "北京"
   */
  Province?: string;
  /**
   * 需要匹配的 SDK 版本，不传则匹配所有版本。
   * 需要匹配的SDK版本，不传则匹配所有版本
   * @example "["1.1.0"]"
   */
  SdkVer?: string[];
  /**
   * 获取数据起始时间点。
   * 日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
   * 获取数据起始时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00
   * @example "2019-06-27T13:00:00+08:00"
   */
  StartTime: string;
  /**
   * 上传类型，默认为空，返回上传 1.0 数据。取值如下所示：
   * * `1`：上传 1.0。
   * * `2`：上传 2.0。
   * 上传类型，默认为空，返回上传 1.0 数据。
   * 1：上传 1.0。
   * 2：上传 2.0。
   * @example 2
   */
  UploadType?: number;
}

export interface DescribeImageXUploadSuccessRateByTimeRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上传成功率数据。
     * 上传成功率数据。
     * @example "-"
     */
    SuccessRateData: {
      /**
       * 对应的总上传有效次数。
       * 对应的总上传有效次数。
       * @example 123
       */
      Count: number;
      /**
       * 对应的上传成功率数据列表。
       * 对应的上传成功率数据列表。
       * @example "-"
       */
      Data: {
        /**
         * 数据对应上传有效次数。
         * 数据对应上传有效次数。
         * @example 123
         */
        Count: number;
        /**
         * 数据对应时间点。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 数据对应时间点，按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm。
         * @example "2023-01-01T00:00:00+08:00"
         */
        Timestamp: string;
        /**
         * 上传成功率。
         * 上传成功率
         * @format float
         * @example "0.9997001679059726"
         */
        Value: number;
      }[];
      /**
       * 数据类型。不拆分时值为 Total，拆分时为具体的维度值。
       * 数据类型，不拆分时值为Total，拆分时为具体的维度值
       * @example "Total"
       */
      Type: string;
    }[];
  };
}

export interface DescribeImageXVideoClipDurationUsageQuery {
  /**
   * 获取数据结束时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T00:00:00+08:00"
   */
  EndTime: string;
  /**
   * 查询数据的时间粒度。单位为秒。缺省时查询 `StartTime` 和 `EndTime` 时间段全部数据，此时单次查询最大时间跨度为 93 天。取值如下所示：
   *
   * - `300`：单次查询最大时间跨度为 31 天
   * - `600`：单次查询最大时间跨度为 31 天
   * - `1200`：单次查询最大时间跨度为 31 天
   * - `1800`：单次查询最大时间跨度为 31 天
   * - `3600`：单次查询最大时间跨度为 93 天
   * - `86400`：单次查询最大时间跨度为 93 天
   * - `604800`：单次查询最大时间跨度为 93 天
   * @example "300"
   */
  Interval?: string;
  /**
   * 服务 ID。支持查询多个服务，传入多个时用英文逗号“,”分割，缺省情况下表示查询所有服务。您可以在 veImageX 控制台的[服务管理](https://console.volcengine.com/imagex/service_manage/)模块或者调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口获取服务 ID。
   * @example "s1,s2"
   */
  ServiceIds?: string;
  /**
   * 获取数据起始时间点。日期格式按照 ISO8601 表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如`2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近一年历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2010-11-21T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface DescribeImageXVideoClipDurationUsageRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 小视频转动图转换时长
     * @example "-"
     */
    VideoClipDurationData: {
      /**
       * 时序数据
       * @example "-"
       */
      Data: {
        /**
         * 数据对应时间点，时间片开始时刻。日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
         * 统计时间点。日期格式按照ISO8601表示法，格式为：YYYY-MM-DDThh:mm:ss±hh:mm，比如2019-06-02T00:00:00+08:00。
         * @example "2023-01-01T00:00:00+08:00"
         */
        TimeStamp: string;
        /**
         * 转换时长，单位为 ms。
         * 转换时长，单位ms
         * @example "12.3"
         */
        Value: number;
      }[];
    }[];
  };
}

export interface DownloadCertQuery {
  /**
   * 证书 ID，您可以通过调用 [获取账号下全部证书](https://www.volcengine.com/docs/508/66017) 获取账号下所有证书信息。
   * @example "q777 "
   */
  CertID: string;
}

export interface DownloadCertRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "DownloadCert"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 证书压缩数据，经 base64 编码后的字符串信息。
     * 证书压缩数据base64后的字符串
     * @example "UEsDBBQACAAIAAAAAAAAAAAAAAAAAAA*****AA=="
     */
    ZipData?: string;
    /**
     * 证书压缩文件名称
     * 证书zip压缩文件名
     * @example "*.imagex.com.zip"
     */
    ZipName?: string;
  };
}

export interface ExportFailedMigrateTaskQuery {
  /**
   * 任务地区（即任务目标服务的地区），默认空，返回国内任务。
   *
   * - `cn`：国内
   * - `sg`：新加坡
   * @example "cn"
   */
  Region: string;
  /**
   * 任务 ID，请参考[CreateImageMigrateTask](https://www.volcengine.com/docs/508/1009929)获取返回的任务 ID。
   * @example "648c15f764f3c4abd95ad044"
   */
  TaskId: string;
}

export interface ExportFailedMigrateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 迁移失败文件列表。仅当任务状态为`Partial`时有值。
     * @example "-"
     */
    Entries: {
      /**
       * 失败错误码
       * @example 613102
       */
      ErrCode: number;
      /**
       * 失败原因
       * @example "下载文件失败"
       */
      ErrMsg: string;
      /**
       * 文件地址
       * @example "http://test.com/mask4_3.png~tplv-yk**fd-222.png"
       */
      Key: string;
    }[];
  };
}

export interface FetchImageUrlBody {
  /**
   * 校验下载文件的 MD5，若校验不一致则停止文件的上传。
   * @example "9a8229123604d22d18b6dcfe44b4519e"
   */
  MD5?: string;
  /**
   * 是否采用异步，取值如下所示：
   *
   * - `true`：采用异步
   * - `false`：（默认）不采用异步
   *
   * :::tip
   * 若您的资源大小小于 5 G，但预估资源迁移超时时间超过 20 s，建议您选择异步处理。
   * :::
   * @example "false"
   */
  Async?: boolean;
  /**
   * 回调 URL，veImageX 以 Post 方式向业务服务器发送 JSON 格式回调数据。当`Async`取值为`true`，即采用异步处理时，为必填。
   * @example "https://info.com"
   */
  Callback?: string;
  /**
   *
   *
   * 透传给业务的回调内容，当`Callback`不为空时为必填，取值需要符合`CallbackBodyType`指定格式。
   * @example "{
   *   "param1": "value1",
   *   "param2": "value2"
   * }"
   */
  CallbackBody?: string;
  /**
   * 透传给业务的回调内容格式。当`CallbackBody`不为空时为必填。取值如下所示：
   *
   * - `application/json`
   * - `application/x-www-form-urlencoded`
   * @example "application/json"
   */
  CallbackBodyType?: string;
  /**
   * 回调时使用的 IP 地址
   * @example "ip:port"
   */
  CallbackHost?: string;
  /**
   * 是否仅迁移文件，取值如下所示：
   *
   * - `true`：仅将文件迁移至目标服务对应的存储。适用于文件快速迁移且无需获取图片元信息场景，例如对时间敏感度极高的文件传输任务。
   * - `false`：（默认）迁移文件的同时，对图片类文件进行解码处理。适用于需要获取图片元信息而对迁移时间要求不高的场景。解码图片资源后，您可在返回参数获取图片的元信息，包括图片宽高、图片类型、动图的时间和帧数等，便于后续的图片分析和管理。
   * @example "true"
   */
  FetchOnly?: boolean;
  /**
   * 迁移资源的 IP 地址
   * @example "ip:port"
   */
  Host?: string;
  /**
   * 服务存储中存在相同的存储 key 时，是否忽略本次迁移操作。取值如下所示：
   *
   * - `true`：忽略本次迁移操作。
   * - `false`：（默认）继续迁移并覆盖相同 key 的资源。
   * @example "false"
   */
  IgnoreSameKey?: boolean;
  /**
   * 请求 header
   * @example "{
   *     "X-Function-Id": ["test"]
   * }"
   */
  RequestHeader?: Record<string, string[]>;
  /**
   * 目标服务 ID，迁移后的文件将上传至该服务绑定的存储。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "jh**9k"
   */
  ServiceId: string;
  /**
   * 指定抓取成功后的文件存储 key，不包含 bucket 部分。默认使用随机生成的 key。
   * :::tip
   * 若指定 key 已存在，则会覆盖服务中 StoreKey 对应的已有文件，此时服务中保存文件的数量未发生变化。
   * :::
   * @example "FetchTest"
   */
  StoreKey?: string;
  /**
   * 资源下载超时时间。
   *
   * - 同步处理下最大超时为 20 秒；
   * - 异步处理下最大超时为 90 秒。
   * @example 10
   */
  TimeOut?: number;
  /**
   * 待抓取上传的文件 URL。
   * @example "https://test.org/con.jpg"
   */
  Url: string;
}

export interface FetchImageUrlRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 动图持续时间，在同步处理情况下、迁移至图像处理服务且为图片资源时有返回值。
     * @format int64
     * @example 5
     */
    Duration?: number;
    /**
     * 任务结束执行时间戳，UTC 时间，单位为 ns。
     * @format int64
     * @example 1689304215000000000
     */
    EndTime?: number;
    /**
     * 文件大小，单位为 byte。同步处理情况下有返回值。
     * @format int64
     * @example 9084
     */
    FSize?: number;
    /**
     * 图片帧数，在同步处理情况下、迁移至图像处理服务且为图片资源时有返回值。
     * @example 100
     */
    FrameCnt?: number;
    /**
     * 图片类型，在同步处理情况下、迁移至图像处理服务且为图片资源时有返回值。
     * @example "png"
     */
    ImageFormat?: string;
    /**
     * 图片高，在同步处理情况下、迁移至图像处理服务且为图片资源时有返回值。
     * @example 1100
     */
    ImageHeight?: number;
    /**
     * 图片宽，在同步处理情况下、迁移至图像处理服务且为图片资源时有返回值。
     * @example 2300
     */
    ImageWidth?: number;
    /**
     * 任务开始执行时间戳，UTC 时间，单位为 ns。
     * @format int64
     * @example 1692019200000000000
     */
    StartTime?: number;
    /**
     * 迁移后的文件 URI，包含 bucket/key 两部分。
     * @example "tos-boe-i-241**mp8/32f6b311fa*"
     */
    StoreUri?: string;
    /**
     * 异步任务 ID，仅当`Async`取值`true`，即采用异步时有返回值。
     * @example "92830H07WJS28370"
     */
    TaskId?: string;
    /**
     * 完成任务总耗时，单位为毫秒。
     * @format int64
     * @example 2714985000
     */
    TimeCost?: number;
    /**
     * 源文件 URL
     * @example "https://test.org/con.jpg"
     */
    Url: string;
  };
}

export interface GetAllCertsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetAllCerts"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 证书ID
     * @example "syq7*"
     */
    CertID: string;
    /**
     * 证书名
     * @example "*.imagex.com"
     */
    CertName: string;
    /**
     * 允许https使用的域名
     * @example "*.imagex.com"
     */
    CommonName: string;
    /**
     * 创建时间戳
     * @example 1603371088
     */
    CreateTime: number;
    /**
     * 签发机构
     * @example "TrustAsia TLS RSA CA"
     */
    Issuer: string;
    /**
     * 过期时间
     * @example 1619755200
     */
    NotAfter: number;
    San: string[];
  }[];
}

export interface GetAllImageServicesQuery {
  /**
   * 筛选服务的参数，当该值为空时返回所有服务，指定后返回服务名或者 ID 中包含该字符串的服务。
   * @example "test"
   */
  SearchPtn?: string;
}

export interface GetAllImageServicesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetAllImageServices"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022082920380201020803721701755F97"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 所有的服务信息。
     * @example "-"
     */
    Services: {
      /**
       * 服务的授权 Bucket 列表。
       * @example "["tos-cn-i-zh**1q"]"
       */
      AllowBkts: string[];
      /**
       * 是否允许配置其他镜像站类型，取值如下所示：
       *
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      AllowMirrorTypes: boolean;
      /**
       * 是否开启精简 URL，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      CompactURL: boolean;
      /**
       * 服务创建时间，即创建时当地服务器时间。
       * @example "2023-05-05 19:20:13"
       */
      CreateAt: string;
      /**
       * 绑定域名的相关信息。
       * @example "-"
       */
      DomainInfos: {
        /**
         * 域名解析到的 cname。
         * @example "*.test.imagex.cn.imagex.xxx.com"
         */
        CNAME: string;
        /**
         * 绑定的域名。
         * @example "*.test.imagex.cn"
         */
        DomainName: string;
        /**
         * 是否为默认域名，取值如下所示：
         * - `true`：是
         * - `false`：否
         * @example "false"
         */
        IsDefault: boolean;
        /**
         * 域名状态。
         * @example "正常"
         */
        Status: string;
        /**
         * 是否开启鉴权，取值如下所示：
         *
         * - `true`：开启
         * - `false`：关闭
         * 是否开启鉴权
         * @example "false"
         */
        UrlAuth: boolean;
      }[];
      /**
       * 事件通知配置
       * 事件通知规则
       * @example "-"
       */
      EventRules?: {
        /**
         * 事件触发时接收回调的回调 URL。
         * @example "https://a.callback.com"
         */
        CallbackUrl: string;
        /**
         * 规则启用状态，取值如下所示：
         *
         * - `true`：开启
         * - `false`：关闭
         * @example "true"
         */
        Enable: boolean;
        /**
         * 事件类型。取值如下所示：
         * - `Upload`：上传文件
         * - `Delete`：删除文件
         * - `Mirror`：镜像回源
         * - `Migrate`：数据迁移
         * - `OffTrans`：离线转码（仅图像处理服务可配置）
         * - `TplStore`：模板持久化存储（仅图像处理服务可配置）
         * @example "upload"
         */
        EventType: string[];
        /**
         * 规则 ID
         * @example "0180***12681"
         */
        Id: string;
        /**
         * 匹配规则的正则表达式。
         * @example "\test\.png\b"
         */
        MatchRule: string;
      }[];
      /**
       * 是否配置鉴权 key，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      HasSigkey: boolean;
      /** @example "true" */
      ImageY: boolean;
      /**
       * 自定义处理样式具体配置
       * @example "-"
       */
      ImageYAttribute: {
        /**
         * 是否开启原图保护，取值如下所示：
         *
         * - `true`：开启
         * - `false`：关闭
         * @example "true"
         */
        ImageProtect: boolean;
        /**
         * 样式分割符
         * 图像样式分隔符。
         * @example "["@"]"
         */
        ImageStyleSeparators: string[];
        QnCosPreference: string;
        QueryStyleCombine: boolean;
      };
      /**
       * 镜像回源配置。
       * @example "-"
       */
      Mirror: {
        /**
         * 镜像回源下载原图时，携带的 HTTP 头部，键值都为 String 类型。
         * @example "{ "name": "app1" }"
         */
        Headers: Record<string, string>;
        /**
         * 镜像回源域名。
         * @example "img.example.com"
         */
        Host: string;
        /**
         * 带权重回源域名，key 为 String 类型时，代表镜像回源域名；value 为 Integer 类型时，代表域名权重。
         * @example "{ "test.com": 100, "test1.com": 0 }"
         */
        Hosts: Record<string, number>;
        /**
         * 下载图片的协议，取值如下所示：
         * - `http`
         * - `https`
         * @example "http"
         */
        Schema: string;
        /**
         * 镜像源 URI，其中图片名用 %s 占位符替代，比如/obj/%s。
         * @example "/obj/%s"
         */
        Source: string;
      };
      /**
       * 是否开启源地址访问，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      ObjectAccess: boolean;
      /**
       * 主鉴权 Key。
       * @example "abcd****qrst"
       */
      PrimaryKey: string;
      /**
       * 服务绑定的项目
       * 仅tob账号有值
       * @example "default"
       */
      ProjectName: string;
      /**
       * 资源封禁配置
       * @example "-"
       */
      ResourceLimitedVisit: {
        /**
         * 域名白名单列表，封禁资源仅可被白名单的域名访问。
         * @example "["test.example.com"]"
         */
        AllowDomains: string[];
        /**
         * 资源封禁开关，取值如下所示：
         *
         * - `true`：开启
         * - `false`：关闭
         * @example "true"
         */
        Enable: boolean;
      };
      /**
       * 服务绑定的标签
       * 仅tob账号有值
       * @example "-"
       */
      ResourceTags: {
        /**
         * 标签键
         * @example "userKey"
         */
        Key: string;
        /**
         * 标签值
         * @example "userValue"
         */
        Value: string;
      }[];
      /**
       * 备鉴权 Key。
       * @example "9819***1bbc12"
       */
      SecondaryKey: string;
      /**
       * 服务 ID。
       * @example "zh**1q"
       */
      ServiceId: string;
      /**
       * 服务名称。
       * @example "test"
       */
      ServiceName: string;
      /**
       * 服务地域，取值如下所示：
       * * `cn`：中国
       * * `sg`：新加坡
       * @example "cn"
       */
      ServiceRegion: string;
      /**
       * 服务状态。状态分为未审核、审核未通过、正常、禁用。
       * :::tip
       * * 只有服务状态为正常时，该服务才可用。
       * * 如果是其他异常状态，请参考[服务管理](https://www.volcengine.com/docs/508/8086)进行处理。
       * :::
       * @example "正常"
       */
      ServiceStatus: string;
      /**
       * 服务类型，取值如下所示：
       * * `StaticRc`：素材托管服务
       * * `Image`：图片处理服务
       * @example "Image"
       */
      ServiceType: string;
      /**
       * 资源配置。
       * @example "-"
       */
      Storage: {
        /**
         * 是否支持任意文件格式上传，取值如下所示：
         *
         * - `true`：是
         * - `false`：否
         * @example "false"
         */
        AllTypes: boolean;
        /**
         * 存储 Bucket 名称。
         * @example "tos-cn-i-fc*****cf"
         */
        BktName: string;
        /**
         * 保存时间，单位为秒。
         * @format int64
         * @example 0
         */
        TTL: number;
      };
      /**
       * 降冷存储配置
       * @example "-"
       */
      StorageRules?: {
        /**
         * 策略命中后需要执行的操作，取值如下所示：
         * - `DELETE`：删除文件
         * - `IA`：文件转低频存储
         * - `ARCHIVE`：文件转归档存储
         * - `COLD_ARCHIVE`：文件转冷归档存储
         *
         * @example "IA"
         */
        Action?: string;
        /**
         * 策略天数，单位为天。按照 Event 事件 Day 天后执行 Action 事件，即当匹配文件的上传时间符合指定天数后，自动按照处理策略对资源进行处理。
         * @example 30
         */
        Day?: number;
        /**
         * 是否启用策略，取值如下所示：
         * - `true`：是
         * - `false`：否
         * @example "true"
         */
        Enable: boolean;
        /**
         * 策略类型，固定取值 `Upload`，表示按上传时间。
         * @example "upload"
         */
        Event: string;
        /**
         * 历史版本文件在策略命中后需要执行的操作
         * @example "IA"
         */
        NonCurrentAction?: string;
        /**
         * 历史版本文件的策略天数
         * @example 30
         */
        NonCurrentDay?: number;
        /**
         * 文件前缀。例如设置为 `prefix` 后，规则将只对名称以 `prefix` 开头的存储资源生效。
         * @example "prefix"
         */
        Prefix: string;
      }[];
      /**
       * 版本控制启用状态，取值如下所示：
       * - `0`：未开启
       * - `1`：已开启
       * - `2`：暂停
       * @example 0
       */
      StorageVersioning?: number;
      /**
       * 该服务的图片模板固定前缀。
       * @example "tplv-zh**1q-"
       */
      TemplatePrefix: string;
      /**
       * 是否开启覆盖上传，取值如下所示：
       *
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      UploadOverwrite: boolean;
      /**
       * 绑定点播空间配置
       * @example "-"
       */
      VodSpace: {
        /**
         * 点播空间存储桶名称
         * @example "tos-cn-v-7**1"
         */
        Bucket: string;
        /**
         * 空间所在地区
         * @example "cn-north-1"
         */
        Region: string;
        /**
         * 点播空间名
         * @example "test1"
         */
        SpaceName: string;
      };
    }[];
  };
}

export interface GetAllImageTemplatesQuery {
  /**
   * 是否按照模板创建时间升序查询，默认为`false`。
   * * 取值为`true`时，表示按升序查询。
   * * 取值为`false`时，表示降序查询。
   * @example "true"
   */
  Asc?: string;
  /**
   * 分页获取条数，默认 10。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移量，默认 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 服务ID
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
  /**
   * 支持的字符正则集合为[a-zA-Z0-9_-]。指定时返回模板名称包含该字符串的图片模板，不填或者为空则返回所有模板。
   * @example "pic"
   */
  TemplateNamePattern?: string;
}

export interface GetAllImageTemplatesRes {
  ResponseMetadata: {
    /** @example "GetAllImageTemplates" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "20240103171934F8FFA0F4C4A135290922" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /** @example "5sq5hm2ffo" */
    ServiceId: string;
    Templates: {
      Abstract: string[];
      AdaptiveFmt: Record<string, unknown>;
      AnimExtract: Record<string, unknown>;
      Animation: Record<string, unknown>;
      /** @example false */
      AutoQuality: boolean;
      /** @example "{"name":"tplv-5sq5hm2ffo-1700561409-v1","output":{"quality":0,"format":"image"},"input":{},"max_age":2592000}" */
      Content: string;
      /** @example "2023-11-21 18:10:09" */
      CreateAt: string;
      /** @example "" */
      Creator: string;
      /** @example "" */
      DemotionFormat: string;
      Evals: Record<string, unknown>[];
      Exif: Record<string, unknown>;
      Filters: {
        /** @example "blur" */
        Name: string;
        Param: Record<string, Record<string, unknown>>;
      }[];
      /** @example 0 */
      LoopCount: number;
      /** @example 2592000 */
      MaxAge: number;
      /** @example 0 */
      OuputQuality: number;
      OutputExtra: Record<string, string>;
      /** @example "image" */
      OutputFormat: string;
      OutputVideo: Record<string, unknown>;
      Parameters: string[];
      /** @example "" */
      Persistence: string;
      /** @example "" */
      QualityMode: string;
      /** @example "" */
      QualityStr: string;
      /** @example "" */
      ReqDeadline: string;
      /** @example "5sq5hm2ffo" */
      ServiceID: string;
      Snapshot: Record<string, unknown>;
      /** @example false */
      Sync: boolean;
      /** @example "tplv-5sq5hm2ffo-1700561409-v1" */
      TemplateName: string;
      /** @example "" */
      TemplateType: string;
      /** @example 0 */
      Timeout: number;
      /** @example "" */
      Updater: string;
      /** @example "~tplv-5sq5hm2ffo-1700561409-v1.image" */
      Usage: string;
      /** @example false */
      WithSig: boolean;
      /** @example false */
      encrypted: boolean;
    }[];
    /** @example 57 */
    Total: number;
  };
}

export interface GetAuditEntrysCountQuery {
  /**
   * 任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1160409) 获取所需的任务 ID。
   * @example "09809***901820"
   */
  TaskId?: string;
}

export interface GetAuditEntrysCountRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 异常审核的总次数，即审核失败、建议不通过和建议复审的审核次数之和。
     * @format int64
     * @example 427
     */
    AuditExceptionCount: number;
    /**
     * 审核失败的审核次数
     * @format int64
     * @example 0
     */
    AuditFailCount: number;
    /**
     * 建议不通过的审核次数
     * @format int64
     * @example 427
     */
    AuditNopassCount: number;
    /**
     * 建议复审的审核次数
     * @format int64
     * @example 0
     */
    AuditRecheckCount: number;
    /**
     * 审核成功的审核次数。
     * @format int64
     * @example 1442
     */
    AuditSuccessCount: number;
    /**
     * 该任务的审核总次数，为审核成功和审核失败的图片数量之和。
     * @format int64
     * @example 1442
     */
    AuditTotal: number;
    /**
     * 审核异常的图片数量，即审核失败、建议不通过和建议复审的图片数量之和。
     * @format int64
     * @example 61
     */
    ExceptionCount: number;
    /**
     * 审核失败的图片数量
     * @format int64
     * @example 0
     */
    FailedCount: number;
    /**
     * 建议不通过的图片数量
     * @format int64
     * @example 61
     */
    NopassCount: number;
    /**
     * 建议复审的图片数量
     * @format int64
     * @example 0
     */
    RecheckCount: number;
    /**
     * 审核成功的图片数量
     * @format int64
     * @example 206
     */
    SuccessCount: number;
    /**
     * 累计审核图片数量，为审核成功和审核失败的图片数量之和。
     * @format int64
     * @example 206
     */
    Total: number;
  };
}

export interface GetBatchProcessResultBody {
  /**
   * 待批量处理的资源链接信息
   * @example "-"
   */
  BatchingInfo: {
    /**
     * 批处理能力，取值如下所示：
     * - `meta`：获取资源元信息
     * - `preload`：源站图片预热
     * :::warning
     * 如需批量预热源站图片，请 [提交工单](https://console.volcengine.com/ticket/createTicketV2/?step=3&Service=rtc&FlowKey=NGnOHeWkbeCrEAkrNvjT)联系技术支持开启。
     * :::
     * @example "meta"
     */
    Action?: string;
    /**
     * 指定服务下待批处理资源的可访问 URL
     * @example "http://test.com/tos-cn-i-f0**5k/demo.png"
     */
    Url?: string;
  }[];
}

export interface GetBatchProcessResultQuery {
  /**
   * 指定同步批处理的服务 ID。
   * @example "f0**5k"
   */
  ServiceId: string;
}

export interface GetBatchProcessResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 批处理结果
     * 火车模式信息
     * @format list
     * @example "-"
     */
    Data: {
      /**
       * 该资源使用的批处理能力
       * @example "meta"
       */
      Action: string;
      /**
       * 该资源执行批处理操作时的错误描述
       * @example "fail to get url,err no useful response got"
       */
      Err?: string;
      /**
       * 该资源的文件大小，单位为 byte。
       * @example 230000
       */
      Size?: number;
      /**
       * 访问该资源时返回的 [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
       * @example 403
       */
      StatusCode?: number;
      /**
       * 资源 URL
       * @example "	http://test.com/tos-cn-i-f0**5k/demo.png"
       */
      Url: string;
    }[];
  };
}

export interface GetBatchTaskInfoQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "f0**5k"
   */
  ServiceId: string;
  /**
   * 异步任务 ID，传入 [CreateBatchProcessTask](https://www.volcengine.com/docs/508/1185525) 获取的异步任务 ID。
   * @example "92830H07WJS28370"
   */
  TaskId: string;
}

export interface GetBatchTaskInfoRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 传入的回调地址
     * @example "http://info.com	"
     */
    Callback?: string;
    /**
     * 传入的回调内容
     * @example "{
     *   "param1": "value1",
     *   "param2": "value2"
     * }"
     */
    CallbackBody?: string;
    /**
     * 传入的回调内容格式
     * @example "application/json	"
     */
    CallbackBodyType?: string;
    /**
     * 错误码。仅当`Status`取值`Failed`时，有返回值。
     * @example 644001
     */
    Code?: number;
    /**
     * 异步批处理任务详情
     * @format list
     * @example "-"
     */
    Data?: {
      /**
       * 该资源使用的批处理能力，取值如下所示：
       * - `meta`：获取资源元信息
       * - `preload`：源站图片预热
       * @example "meta"
       */
      Action: string;
      /**
       * 该资源执行批处理操作时的错误描述
       * @example "fail to get url,err no useful response got"
       */
      Err?: string;
      /**
       * 该资源对应的文件大小，单位为 byte。
       * @example 230000
       */
      Size?: number;
      /**
       * 访问该资源时返回的 [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
       * @example 0
       */
      StatusCode?: number;
      /**
       * 资源 URL
       * @example "	http://test.com/tos-cn-i-f0**5k/demo.png"
       */
      Url: string;
    }[];
    /**
     * 错误信息。仅当`Status`取值`Failed`时，有返回值。
     * @example "exist fail url"
     */
    Err?: string;
    /**
     * 任务状态，取值如下所示：
     * - `Running`：进行中
     * - `Pending`：排队中
     * - `Failed`：失败
     * - `Success`：成功
     * @example "Failed"
     */
    Status?: string;
    /**
     * 异步任务 ID
     * @example "92830H07WJS28370	"
     */
    TaskId: string;
  };
}

export interface GetCVAnimeGenerateImageBody {
  /**
   * 服务下绑定的域名，域名状态需正常可用。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取绑定的域名信息。
   * - 您也可以通过 OpenAPI 的方式获取域名，具体请参考[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)。
   * @example "test.example.com"
   */
  Domain: string;
  /**
   * [文生图系列模型](#使用说明)的接口 Action 名称。
   *
   * 例如，使用[动漫 1.3.X-文生图/图生图](https://www.volcengine.com/docs/6791/1213131)，则 `ModelAction` 需要取值为 `CVProcess`。
   * 模型操作action
   * @example "CVProcess"
   */
  ModelAction: string;
  /**
   * [文生图系列模型](#使用说明)的接口 Version 名称。
   *
   * 例如，使用[动漫 1.3.X-文生图/图生图](https://www.volcengine.com/docs/6791/1213131)，则 `ModelVersion` 需要取值为 `2022-08-31`。
   * 模型版本。
   * @example "2022-08-31"
   */
  ModelVersion: string;
  /**
   * 指定输出图片的文件名，输入限制如下所示：
   * - 数组长度为 1，若指定多个文件名，仅第一个取值生效。
   * - 不支持空格。
   * - 不支持以/开头或结尾，不支持/连续出现，最大长度限制为 180 个字节。
   * 输出结果。
   * @example "["AI/demo.png"]"
   */
  Outputs: string[];
  /**
   * 是否覆盖服务下同名文件，取值如下所示：
   * - `false`：（默认）不覆盖
   * - `true`：覆盖
   * :::tip
   * 请确保您已开启[重名覆盖上传](https://www.volcengine.com/docs/508/1119912)功能，否则，此处配置无效。
   * :::
   * 是否覆盖现有文件。
   * @example "true"
   */
  Overwrite?: boolean;
  /**
   * [文生图系列模型](#使用说明)的接口的请求 JSON 字符串。
   *
   * 例如，使用[动漫 1.3.X-文生图/图生图](https://www.volcengine.com/docs/6791/1213131)，则 `ReqJson` 需要取值为：
   * ```json
   * {
   *     "req_key": "high_aes",
   *     "prompt": "千军万马",
   *     "model_version": "anime_v1.3",
   *     "binary_data_base64": [""],
   *     "strength": 0.7,
   *     "seed": -1,
   *     "scale": 7,
   *     "ddim_steps": 20,
   *     "width": 1024,
   *     "height": 1024,
   *     "return_url": False,
   *     "logo_info": {
   *         "add_logo": False,
   *         "position": 0,
   *         "language": 0,
   *         "logo_text_content": "这里是明水印内容"
   *     }
   * }
   * ```
   * 请求的JSON数据。
   * @example "{
   *     "req_key": "high_aes",
   *     "prompt": "千军万马",
   *     "model_version": "anime_v1.3",
   *     "binary_data_base64": [""],
   *     "strength": 0.7,
   *     "seed": -1,
   *     "scale": 7,
   *     "ddim_steps": 20,
   *     "width": 1024,
   *     "height": 1024,
   *     "return_url": False,
   *     "logo_info": {
   *         "add_logo": False,
   *         "position": 0,
   *         "language": 0,
   *         "logo_text_content": "这里是明水印内容"
   *     }
   * }"
   */
  ReqJson: Record<string, Record<string, unknown>>;
  /**
   * 服务下创建的图片处理模板名称，指定后，将按照模板中的处理配置对豆包大模型生成的图片进行图片处理。
   *
   * 您可在 veImageX 控制台的处理配置页面，参考[新建模板](https://www.volcengine.com/docs/508/8087)配置模板并获取模版名称，例如 `tplv-f0****5k-test`。
   * @example "tplv-serviceid-test"
   */
  Template: string;
}

export interface GetCVAnimeGenerateImageQuery {
  /**
   * 指定存储结果图并计量计费的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid"
   */
  ServiceId: string;
}

export interface GetCVAnimeGenerateImageRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 最终上传至 veImageX 服务的结果图访问 URL，数量为 1。
     * 存储URI列表。
     * @example "["http://test.example.cn/tos-cn-i-serviceid/demo1~tplv-serviceid-image.image"]"
     */
    ImageUrls: string[];
    /**
     * 根据指定的文生图模型接口信息，接收的该接口响应的 JSON 数据。
     *
     * 例如，使用[动漫 1.3.X-文生图/图生图](https://www.volcengine.com/docs/6791/1213131)，则 RespJson 接收到的相应信息为：
     * ```json
     * {
     *     "code":10000,
     *     "data":{
     *         "binary_data_base64":["xxx"]
     *     },
     *     "message":"Success",
     *     "request_id":"20220926182941010212157201024017C6",
     *     "status":10000,
     *     "time_elapsed":"456.790505ms"
     * }
     * ```
     * 响应的JSON数据。
     * @example "{
     *     "code":10000,
     *     "data":{
     *         "binary_data_base64":["xxx"]
     *     },
     *     "message":"Success",
     *     "request_id":"20220926182941010212157201024017C6",
     *     "status":10000,
     *     "time_elapsed":"456.790505ms"
     * }"
     */
    RespJson: Record<string, Record<string, unknown>>;
    /** 存储URI。 */
    StoreUris: string[];
  };
}

export interface GetCVImageGenerateResultBody {
  /**
   * 服务下绑定的域名，域名状态需正常可用。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取绑定的域名信息。
   * - 您也可以通过 OpenAPI 的方式获取域名，具体请参考[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)。
   * @example "test.example.com"
   */
  Domain: string;
  /**
   * 基于该图片智能生图，支持传入该服务下的图片存储 URI 或公网访问 URL。图片输入限制如下所示：
   * 1. 图片格式：JPG(JPEG)、PNG、BMP 等常见格式，建议使用 JPG 格式。
   * 2. 图片要求：图片体积小于 5MB，分辨率小于 4096\*4096，宽高均尽可能在 1024 左右。宽高比例不建议过于极端，否则出图效果不佳，且延迟过长的概率也会显著增加。输出图片宽高与输入图一致。
   * :::tip
   * 指定 `ImageUrl` 后，`ReqJson` 中指定的图片地址无效。
   * :::
   * 图片URL
   * @example "http://app1.cpm/example.jpg"
   */
  ImageUrl?: string;
  /**
   * [通用 XL pro-图生图](https://www.volcengine.com/docs/6791/1330203)模型接口的 Action 名称，即 `Img2ImgXLSft`。
   * 模型操作action
   * @example "Img2ImgXLSft"
   */
  ModelAction: string;
  /**
   * [通用 XL pro-图生图](https://www.volcengine.com/docs/6791/1330203)模型接口的 Version 名称，即 `2022-08-31`。
   * 模型版本。
   * @example "2022-08-31"
   */
  ModelVersion: string;
  /**
   * 指定输出图片的文件名，输入限制如下所示：
   * - 数组长度为 1，若指定多个文件名，仅第一个取值生效。
   * - 不支持空格。
   * - 不支持以/开头或结尾，不支持/连续出现，最大长度限制为 180 个字节。
   * 输出结果。
   * @example "["AI/demo.png"]"
   */
  Outputs: string[];
  /**
   * 是否覆盖服务下同名文件，取值如下所示：
   * - `true`：覆盖
   * - `false`：（默认）不覆盖
   * :::tip
   * 请确保您已开启[重名覆盖上传](https://www.volcengine.com/docs/508/1119912)功能，否则，此处配置无效。
   * :::
   * 是否覆盖现有文件。
   * @example "true"
   */
  Overwrite?: boolean;
  /**
   * [通用 XL pro-图生图](https://www.volcengine.com/docs/6791/1330203)模型接口的请求 JSON 字符串。
   * 请求的JSON字符串。
   * @example "{
   *     "req_key": "i2i_xl_sft",
   *     "image_urls": [
   *         "https://xxx"
   *     ],
   *     "prompt": "美女",
   *     "seed": -1,
   *     "ddim_steps": 20,
   *     "scale": 7.0,
   *     "controlnet_args": [
   *         {
   *             "type": "canny",
   *             "strength": 0.4,
   *             "binary_data_index": 0
   *         }
   *     ],
   *     "style_reference_args": {
   *         "id_weight": 0.2,
   *         "style_weight": 0.0,
   *         "binary_data_index": 0
   *     },
   *     "etta_args": {
   *         "binary_data_index": 0
   *     },
   *     "return_url": true,
   *     "logo_info": {
   *         "add_logo": true,
   *         "position": 2,
   *         "language": 0,
   *         "logo_text_content": "这里是明水印内容"
   *     }
   * }"
   */
  ReqJson: Record<string, Record<string, unknown>>;
  /**
   * 服务下创建的图片处理模板名称，指定后，将按照模板中的处理配置对豆包大模型生成的图片进行图片处理。
   *
   * 您可在 veImageX 控制台的处理配置页面，参考[新建模板](https://www.volcengine.com/docs/508/8087)配置模板并获取模版名称，例如 `tplv-f0****5k-test`。
   * @example "tplv-serviceid-test"
   */
  Template: string;
}

export interface GetCVImageGenerateResultQuery {
  /**
   * 指定存储结果图并计量计费的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid"
   */
  ServiceId: string;
}

export interface GetCVImageGenerateResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 最终上传至 veImageX 服务的结果图访问 URL，数量为 1。
     * 图片URL列表。
     * @example "["http://test.example.cn/tos-cn-i-serviceid/demo1~tplv-serviceid-image.image"]"
     */
    ImageUrls: string[];
    /**
     * 根据指定的[通用 XL pro-图生图](https://www.volcengine.com/docs/6791/1330203)模型接口信息，接收的该接口响应的 JSON 数据。
     * 响应的JSON内容。
     * @example "{
     *     "code": 10000,
     *     "data": {
     *         "algorithm_base_resp": {
     *             "status_code": 0,
     *             "status_message": "Success"
     *         },
     *         "custom_prompt": "美女",
     *         "image_urls": [
     *             "https://xxx",
     *             "https://xxx"
     *         ],
     *         "multi_pipeline_select_key": "t2i",
     *         "prompt": "beautiful woman",
     *         "prompt_translated": "beautiful woman",
     *         ...
     * 		}
     *     "message": "Success",
     *     "request_id": "20240**5716A",
     *     "status": 10000,
     *     "time_elapsed": "12.696326169s"
     * }"
     */
    RespJson: Record<string, Record<string, unknown>>;
    /** 存储URI。 */
    StoreUris: string[];
  };
}

export interface GetCVImageGenerateTaskBody {
  /**
   * 创建文生图任务时，使用的[文生图系列模型](#使用说明)的接口 Action 名称。
   *
   * 例如，使用[查询通用 2.0L-文生图异步任务](https://www.volcengine.com/docs/6791/1359424#%E6%9F%A5%E8%AF%A2%E4%BB%BB%E5%8A%A1)，则 `ModelAction` 需要取值为 `CVSync2AsyncGetResult`。
   * 操作模型。
   * @example "CVSync2AsyncSubmitTask"
   */
  ModelAction: string;
  /**
   * 创建文生图任务时，使用的[文生图系列模型](#使用说明)的接口 Version 名称。
   *
   * 例如，使用[查询通用 2.0L-文生图异步任务](https://www.volcengine.com/docs/6791/1359424#%E6%9F%A5%E8%AF%A2%E4%BB%BB%E5%8A%A1)，则 `ModelVersion` 需要取值为 `2022-08-31`。
   * 模型版本。
   * @example "2022-08-31"
   */
  ModelVersion: string;
  /**
   * 创建文生图任务时，使用的[文生图系列模型](#使用说明)的接口的请求 JSON 字符串。
   *
   * 例如，使用[查询通用 2.0L-文生图异步任务](https://www.volcengine.com/docs/6791/1359424#%E6%9F%A5%E8%AF%A2%E4%BB%BB%E5%8A%A1)，则 `ReqJson` 需要按示例进行传值。
   *
   * 请求的JSON数据。
   * @example "{
   *     "req_key": "high_aes_general_v20_L",
   *     "task_id": "7418049665255653414",
   *     "req_json": "{
   * 	    "logo_info":{
   * 		    "add_logo":true,
   * 		    "position":0,
   * 		    "language":0,
   * 		    "logo_text_content":"这里是明水印内容"
   * 		    },
   * 		  "return_url":true
   * 		}"
   * }"
   */
  ReqJson: Record<string, Record<string, unknown>>;
  /**
   * 指定文生图异步任务的任务 ID。
   * @example "7418048504813240370"
   */
  TaskId: string;
}

export interface GetCVImageGenerateTaskQuery {
  /**
   * 指定要查询的服务 ID。
   * @example "serviceid"
   */
  ServiceId: string;
}

export interface GetCVImageGenerateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 最终上传至 veImageX 服务的结果图访问 URL，数量为 1。
     * @example "["http://test.example.cn/tos-cn-i-serviceid/demo1~tplv-serviceid-image.image"]"
     */
    ImageUrls: string[];
    /**
     * 根据指定的文生图模型接口信息，接收的该接口响应的 JSON 数据。
     * 响应的 JSON 数据。
     * @example "{
     *     "code": 10000,
     *     "data": {
     *         "binary_data_base64": [],
     *         "image_urls": [
     *             "https://xxx"
     *         ],
     *         "resp_data": "{
     * 	        "pe_result":"",
     * 	        "predict_tags_result":"",
     * 	        "rephraser_result":"壮观***草原。",
     * 	        "request_id":"ff**2"
     * 	        }",
     *         "status": "done"
     *     },
     *     "message": "Success",
     *     "request_id": "2024***BE5",
     *     "status": 10000,
     *     "time_elapsed": "1.616183051s"
     * }"
     */
    RespJson: Record<string, Record<string, unknown>>;
    /**
     * 任务状态，取值如下所示：
     * - `in_queue`：任务已提交
     * - `generating`：任务处理中
     * - `done`：任务处理完成
     * - `not_found`：任务未找到，可能原因是无此任务或任务已过期（12小时）
     * @example "done"
     */
    Status: string;
    /**
     * 结果图访问 URL，数量为 1。
     * 存储URI。
     * @example "http://test.example.cn/demo1~tplv-serviceid-image.image"
     */
    StoreUris: string[];
    /**
     * 任务 ID
     * @example "7418048504813240370"
     */
    TaskId: string;
  };
}

export interface GetCVTextGenerateImageBody {
  /**
   * 服务下绑定的域名，域名状态需正常可用。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取绑定的域名信息。
   * - 您也可以通过 OpenAPI 的方式获取域名，具体请参考[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)。
   * @example "test.example.com"
   */
  Domain: string;
  /**
   * 在[文生图系列模型](#使用说明)中选择一个本次调用的智能生图模型，并并传入该模型对应接口的 Action 名称。
   *
   * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 `ModelAction` 需要取值为 `CVSync2AsyncSubmitTask`。
   * 操作模型action
   * @example "CVProcess"
   */
  ModelAction: string;
  /**
   * 在[文生图系列模型](#使用说明)中选择一个本次调用的智能生图模型，并并传入该模型对应接口的 Version 名称。
   *
   * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 `ModelVersion` 需要取值为 `2022-08-31`。
   * 模型版本。
   * @example "2022-08-31"
   */
  ModelVersion: string;
  /**
   * 指定输出图片的文件名，输入限制如下所示：
   * - 数组长度为 1，若指定多个文件名，仅第一个取值生效。
   * - 不支持空格。
   * - 不支持以/开头或结尾，不支持/连续出现，最大长度限制为 180 个字节。
   * 输出结果。
   * @example "["AI/demo.png"]"
   */
  Outputs: string[];
  /**
   * 是否覆盖服务下同名文件，取值如下所示：
   * - `false`：（默认）不覆盖
   * - `true`：覆盖
   * :::tip
   * 请确保您已开启[重名覆盖上传](https://www.volcengine.com/docs/508/1119912)功能，否则，此处配置无效。
   * :::
   * 覆盖现有内容。
   * @example "true"
   */
  Overwrite?: boolean;
  /**
   * 在[文生图系列模型](#使用说明)中选择一个本次调用的智能生图模型，并并传入该模型对应接口的请求 JSON 字符串。
   *
   * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 `ReqJson` 需要取值为：
   * ```json
   * {
   *     "req_key":"high_aes_general_v20",
   *     "prompt":"千军万马",
   *     "model_version":"general_v2.0",
   *     "seed":-1,
   *     "scale":3.5,
   *     "ddim_steps":16,
   *     "width":512,
   *     "height":512,
   *     "use_sr":true
   * }
   * ```
   * 请求的JSON数据。
   * @example "{
   *     "req_key":"high_aes_general_v20",
   *     "prompt":"千军万马",
   *     "model_version":"general_v2.0",
   *     "seed":-1,
   *     "scale":3.5,
   *     "ddim_steps":16,
   *     "width":512,
   *     "height":512,
   *     "use_sr":true,
   *     "return_url":true,
   *     "logo_info": {
   *         "add_logo": false,
   *         "position": 0,
   *         "language": 0,
   *         "logo_text_content": "这里是明水印内容"
   *     }
   * }"
   */
  ReqJson: Record<string, Record<string, unknown>>;
  /**
   * 服务下创建的图片处理模板名称，指定后，将按照模板中的处理配置对豆包大模型生成的图片进行图片处理。
   *
   * 您可在 veImageX 控制台的处理配置页面，参考[新建模板](https://www.volcengine.com/docs/508/8087)配置模板并获取模版名称，例如 `tplv-f0****5k-test`。
   * @example "tplv-serviceid-test"
   */
  Template: string;
}

export interface GetCVTextGenerateImageQuery {
  /**
   * 指定存储结果图并计量计费的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid"
   */
  ServiceId: string;
}

export interface GetCVTextGenerateImageRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 最终上传至 veImageX 服务的结果图访问 URL，数量为 1。
     * 存储URI列表。
     * @example "["http://test.example.cn/tos-cn-i-serviceid/demo1~tplv-serviceid-image.image"]"
     */
    ImageUrls: string[];
    /**
     * 根据指定的文生图模型接口信息，接收的该接口响应的 JSON 数据。
     *
     * 例如，使用[通用 2.0S-文生图异步](https://www.volcengine.com/docs/6791/1347773)，则 RespJson 接收到的相应信息为：
     * ```json
     * {
     *     "code": 10000,
     *     "data": {
     *         "task_id": "7418048504813240370"
     *     },
     *     "message": "Success",
     *     "request_id": "2024092411365866C579D2A96A35DA62A9",
     *     "status": 10000,
     *     "time_elapsed": "23.099216ms"
     * }
     * ```
     * 响应的JSON字符串。
     * @example "{
     *     "code": 10000,
     *     "data": {
     *         "task_id": "7418048504813240370"
     *     },
     *     "message": "Success",
     *     "request_id": "2024092411365866C579D2A96A35DA62A9",
     *     "status": 10000,
     *     "time_elapsed": "23.099216ms"
     * }"
     */
    RespJson: Record<string, Record<string, unknown>>;
    /** 存储URI。 */
    StoreUris: string[];
  };
}

export interface GetCertInfoQuery {
  /**
   * 证书 ID，您可以通过调用[获取账号下全部证书](https://www.volcengine.com/docs/508/66017)获取账号下所有证书信息。
   * @example "a203434e6e794ddabea95826ffc045ba"
   */
  CertID: string;
}

export interface GetCertInfoRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetCertInfo"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /** 证书id */
    CertID: string;
    /** 证书名 */
    CertName: string;
    /** 允许https使用的域名 */
    CommonName: string;
    /** 创建时间戳 */
    CreateTime: number;
    /** 签发机构 */
    Issuer: string;
    /** 过期时间 */
    NotAfter: number;
    San: string[];
  };
}

export interface GetComprehensiveEnhanceImageBody {
  /**
   * 去压缩失真强度，取值范围为[0,1]。取值为`0`时表示不处理，取值越大去压缩失真强度越大。
   * @example "0.2"
   */
  ArStrength?: number;
  /**
   * `EnableConfig` 取值为 `true` 时，为必填。
   *
   * 亮度，取值范围为[90,100]。取值越小，亮度提升越明显。
   * @example 95
   */
  Brightness?: number;
  /**
   * 去模糊强度，取值范围为[0,1]。取值为`0`时表示不处理，取值越大去模糊强度越大。
   * @example "0.2"
   */
  DeblurStrength?: number;
  /**
   * 降噪强度，取值范围为[0,1]。取值为`0`时表示不降噪，取值越大降噪强度越大。
   * @example "0.2"
   */
  DenoiseStrength?: number;
  /**
   * 下采样模式，取值如下所示：
   * - `0`: 仅缩小，图片大于设置的“宽/高”时，将缩小图片
   * - `1`: 仅放大，图片小于设置的“宽/高”时，将放大图片
   * - `2`: 既缩小又放大，即按照自定义“宽/高”输出结果图，该操作可能导致图片变形
   * @example 1
   */
  DownsampleMode?: number;
  /**
   * 下采样输出图片高度，图片将适配对应大小。单位为 px。
   * @example 10
   */
  DownsampleOutHeight?: number;
  /**
   * 下采样输出图片宽度，图片将适配对应大小。单位为 px。
   * @example 10
   */
  DownsampleOutWidth?: number;
  /**
   * 是否启用高级配置，取值如下所示：
   * - `true`：开启。开启后，下述高级配置才会生效。
   * - `false`：（默认）关闭。
   * :::tip
   * 适用于 8000 x 8000 以分辨率图像的画质增强。
   * :::
   * @example "true"
   */
  EnableConfig?: boolean;
  /**
   * 是否开启下采样，即图片在执行增强效果的同时可自定义输出图片分辨率大小。取值如下所示：
   * - `true`：开启。仅当开启后，下述下采样配置才会生效。
   * - `false`：（默认）关闭。
   * :::tip
   * 适用于 8000 x 8000 以内分辨率图像的画质增强。
   * :::
   * @example "true"
   */
  EnableDownsample?: boolean;
  /**
   * 是否开启超分配置，仅满足图像输入边界的图像执行超分处理。取值如下所示：
   * - `true`：开启。仅当开启后，下述超分配置才会生效。
   * - `false`：（默认）关闭。
   * :::tip
   * 适用于 8000 x 8000 以内分辨率图像的画质增强。
   * :::
   * @example "true"
   */
  EnableSuperResolution?: boolean;
  /**
   * 是否使用文字增强，取值如下所示：
   * - `false`：（默认）不使用
   * - `true`：使用
   * 默认值为false
   * @example "false"
   */
  EnableTextEnhance?: boolean;
  /**
   * 待增强图片的存储 URI 或访问 URL（公网可访问）。您可在控制台资源管理获取图片的[存储 URI](https://www.volcengine.com/docs/508/1205057) 以及[访问 URL](https://www.volcengine.com/docs/508/1205054)。
   * @example "tos-example/7a7979974.jpeg"
   */
  ImageUri: string;
  /**
   * 执行超分处理的长边范围最大值，仅当满足图像边界输入的图像执行超分处理。单位为 px。
   * @example 800
   */
  LongMax?: number;
  /**
   * 执行超分处理的长边范围最小值，仅当满足图像边界输入的图像执行超分处理。单位为 px。
   * @example 300
   */
  LongMin?: number;
  /**
   * 优化策略，取值如下所示：
   * - `0`：通用画质提升
   * - `1`：显著画质提升
   * :::tip
   * 推荐优先使用通用方案，显著画质提升方案画质分提高 10% 左右，但体积会有一定浮动提升。以上幅度变化基于测试集总结，具体以使用场景为准。
   * :::
   * @example 0
   */
  Mode: number;
  /**
   * 超分倍率，仅支持 2 倍和 4 倍。
   * :::tip
   * 4 倍超分辨率只适用于 4000 x 4000 以内分辨率图像的画质增强。
   * :::
   * @example 2
   */
  Multiple?: number;
  /**
   * 饱和度，取值范围为[0,2]。取值大于 `1` 表示提升饱和度，取值小于 `1` 表示降低饱和度。
   * @example "1.5"
   */
  Saturation?: number;
  /**
   * 服务 ID。
   *
   *
   * @example "i2****hg"
   */
  ServiceId: string;
  /**
   * `EnableSuperResolution` 取值为 `true` 时，为必填。
   *
   * 执行超分处理的短边范围最大值，仅当满足图像边界输入的图像执行超分处理。单位为 px。
   * @example 700
   */
  ShortMax?: number;
  /**
   * `EnableSuperResolution` 取值为 `true` 时，为必填。
   *
   * 执行超分处理的短边范围最小值，仅当满足图像边界输入的图像执行超分处理。单位为 px。
   * @example 200
   */
  ShortMin?: number;
  /**
   * 文字增强强度，取值范围[0,1]，默认值为 0.5。取值越大文字增强效果越强，但也更容易出现白边、色偏、对比度增大、非 CG 文字与背景产生割裂感等问题。
   * 取值范围[0,1]
   * @format float
   * @example "0.5"
   */
  TextEnhanceStrength?: number;
}

export interface GetComprehensiveEnhanceImageRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 结果图 URI。您可使用结果图 URI（即 `ResUri`）[拼接完整访问 URL](https://www.volcengine.com/docs/508/105405#%E9%A2%84%E8%A7%88%E8%BF%94%E5%9B%9E%E7%9A%84%E7%BB%93%E6%9E%9C%E5%9B%BE) 后，在浏览器查看图像增强效果。
     * @example "tos-i-v0***bf/a957dcc7cb89b0a4e2889466f2fdc9d7"
     */
    ResUri: string;
  };
}

export interface GetCompressTaskInfoQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7j**6"
   */
  ServiceId: string;
  /**
   * 异步任务 ID
   * @example "82370***12102"
   */
  TaskId: string;
}

export interface GetCompressTaskInfoRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 错误码。仅当`Status`为`Failed`时，该值不为 0。
     * @example 604026
     */
    ErrCode?: number;
    /**
     * 错误信息。仅当`Status`为`Failed`时，该值不为空。
     * @example "压缩失败"
     */
    ErrMsg?: string;
    /**
     * 压缩文件包 StoreUri
     * @example "zip_file16**906"
     */
    OutputUri: string;
    /**
     * 任务处理进度，即已处理的文件数量。
     * @format int64
     * @example 4
     */
    ProcessCount?: number;
    ResUri?: string;
    /**
     * 异步任务状态，取值如下所示：
     *
     * - `Pending`：排队中
     *
     * - `Running`：进行中
     *
     * - `Failed`：执行失败
     *
     * - `Success`：执行成功
     * @example "Running"
     */
    Status: string;
    /**
     * 异步任务 ID
     * @example "82370***12102"
     */
    TaskId: string;
  };
}

export interface GetDedupTaskStatusQuery {
  /**
   * 任务 ID，您可以通过调用[使用图片去重获取结果值](https://www.volcengine.com/docs/508/138658)接口获取异步去重`TaskId`返回值。
   * @example "9108**10208"
   */
  TaskId: string;
}

export interface GetDedupTaskStatusRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /** 分组结果，若输入 2 个以上原图时，将按组返回内容相同的图片，每组的图片个数非固定值。 */
    Groups: Record<string, string[]>;
    /** 图片评分，仅在两张图片对比才返回 Score 字段。 */
    Score: string;
    /**
     * 异步任务状态，取值如下所示：
     * * 0：任务进行中
     * * 1：任务执行成功
     * * 2：任务执行失败
     * @example 1
     */
    Status: number;
    /**
     * 任务 ID。
     * @example "9108**10208"
     */
    TaskId: string;
  };
}

/** 描述 */
export interface GetDenoisingImageBody {
  /**
   * 是否支持降级，即发生错误时返回原图地址。
   * 传入 StoreUri 则返回 StoreUri，传入 ImageUrl 则返回 ImageUrl。
   * 取值如下所示：
   *
   * - true：支持降级
   * - false：不支持降级
   * @example "true"
   */
  CanDemotion: boolean;
  /**
   * 公网可访问的待降噪的原图 URL。
   * @example "http://test/tos-i-t3***nr/0866d.jpg~tplv-t3**nr-1.png"
   */
  ImageUrl?: string;
  /**
   * 降噪强度，取值范围为[0,1]。取值为0时表示不降噪，取值越大降噪强度越大。
   * @example "0.9"
   */
  Intensity: number;
  /**
   * 输出格式，支持格式有：png、jpeg、webp。
   * @example "webp"
   */
  OutFormat: string;
  /**
   * 待降噪的原图 URI。 若同时传入 StoreUri 和 ImageUrl，仅取值 StoreUri，ImageUrl 将会被忽略。
   * @example "tos-i-t3***nr/0866d.jpg"
   */
  StoreUri?: string;
}

export interface GetDenoisingImageQuery {
  /**
   * 服务 ID。
   *
   * 您可以在 veImageX 控制台 服务管理页面，在创建好的图片服务中获取服务 ID。
   * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考获取所有服务信息。
   * @example "8j**ji"
   */
  ServiceId: string;
}

export interface GetDenoisingImageRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 是否发生降级，取值如下所示：
     *
     * - true：降级
     * - false：未降级
     * @example "false"
     */
    Demotion: boolean;
    /**
     * 降噪后的图片地址，根据输入时的地址决定返回值。
     *
     * @example "tos-i-t3**nr/bedd9"
     */
    ResUri: string;
  };
}

export interface GetDomainConfigQuery {
  /**
   * 域名，您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 获取当前服务下所有域名。
   * @example "example.volcimagex.cn"
   */
  DomainName: string;
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "yl***yn"
   */
  ServiceId: string;
}

export interface GetDomainConfigRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 访问控制配置
     * @example "-"
     */
    access_control: {
      /**
       * IP 访问控制配置
       * @example "-"
       */
      ip_auth: {
        /**
         * 是否开启 IP 访问控制，取值如下所示：
         * * `true`：开启 IP 访问控制
         * * `false`：关闭 IP 访问控制
         * @example "false"
         */
        enabled: boolean;
        /**
         * 是否是白名单模式，取值如下所示：
         * * `true`：白名单模式
         * * `false`：黑名单模式
         * @example "false"
         */
        is_white_mode: boolean;
        /**
         * IP 列表
         * @example "["1.1.1.1"]"
         */
        values: string[];
      };
      /** @example "" */
      refer_link: any;
      /**
       * Referer 防盗链配置
       * @example "-"
       */
      referer_link: {
        /**
         * 是否允许空 Refer，取值如下所示：
         *
         * - `true`：允许空 Refer
         * - `false`：不允许空 Refer
         * @example "false"
         */
        allow_empty_refer: boolean;
        /**
         * 是否开启 Referer 防盗链，取值如下所示：
         *
         * - `true`：开启
         * - `false`：关闭
         * @example "true"
         */
        enabled: boolean;
        /**
         * Referers 列表在匹配时是否是大小写敏感的。取值如下所示：
         * - `true`: 表示大小写不敏感。
         * - `false`: 表示大小写敏感。
         * @example "false"
         */
        ignore_case: boolean;
        /**
         * Referers 列表的 Referer 头部值是否必须以 HTTP 或者 HTTPS 开头。取值如下所示：
         * - `true`: 表示不以 HTTP 或者 HTTPS 开头的 Referer 头部值是合法的。
         * - `false`: 表示不以 HTTP 或者 HTTPS 开头 Referer 头部值是非法的。
         * @example "false"
         */
        ignore_scheme: boolean;
        /**
         * 是否选择白名单，取值如下所示：
         *
         * - `true`：选择白名单
         * - `false`：不选择白名单
         * @example "true"
         */
        is_white_mode: boolean;
        /**
         * 正则表达式规则列表
         * @example "\192\.23\.1\.8\b"
         */
        regex_values: string[];
        /**
         * 根据是否为白名单，为对应的白/黑名单的值。
         * @example "["s.com", "y.com", "q.com"]"
         */
        values: string[];
      };
      /**
       * 远程鉴权设置
       * @example "-"
       */
      remote_auth: {
        /**
         * 鉴权请求头设置
         * @example "-"
         */
        auth_request_header: {
          /**
           * 鉴权请求头是否包含用户请求头，取值如下所示：
           *
           * - `exclude`：表示鉴权请求头中不包含任何用户请求头。
           * - `include`：表示鉴权请求头中包含所有用户请求头。
           * - `includePart`：表示鉴权请求头包含指定的用户请求头。
           * @example "exclude"
           */
          action: string;
          /**
           * 额外请求头
           * @example "-"
           */
          header: {
            /**
             * 您设置的请求头
             * @example "header1"
             */
            key: string;
            /**
             * 请求头的值
             * @example "constant"
             */
            value: string;
            /**
             * 请求头的类型
             * @example "h"
             */
            value_type: string;
          }[];
          /**
           * 鉴权请求中 HOST 头部的值，固定为 `default`，即 HOST 头部的值与您的加速域名相同。
           * @example "default"
           */
          host: string;
          /**
           * Action 参数所对应的参数值
           * @example "*"
           */
          value: string;
        };
        /**
         * 鉴权请求参数设置
         * @example "-"
         */
        auth_request_query: {
          /**
           * 鉴权请求是否包含用户请求 URL 中的查询参数。取值如下所示：
           *
           * - `exclude`：表示鉴权请求不包含任何查询参数。
           * - `include`：表示鉴权请求包含所有查询参数。
           * - `includePart`：表示鉴权请求包含指定的查询参数。
           * @example "includePart"
           */
          action: string;
          /**
           * 额外参数
           * @example "-"
           */
          query: {
            /**
             * 您设置的鉴权请求参数
             * @example "new_host"
             */
            key: string;
            /**
             * 鉴权请求参数的值
             * @example "host"
             */
            value: string;
            /**
             * 您在 Key 中设置的鉴权请求参数的类型
             * @example "variable"
             */
            value_type: string;
          }[];
          /**
           * Action 参数所对应的参数值
           * @example "*"
           */
          value: string;
        };
        /**
         * 鉴权响应设置
         * @example "-"
         */
        auth_response: {
          /**
           * 鉴权结果缓存设置
           * @example "-"
           */
          auth_result_cache: {
            /**
             * 是否缓存鉴权状态码，取值如下所示：
             *
             * - `nocache`：veImageX 不缓存鉴权状态码。
             * - `cache`：veImageX 缓存鉴权状态码。
             * @example "nocache"
             */
            action: string;
            /**
             * 缓存 key 指定了用于区分不同请求 URI 的查询参数
             * @example "[$URI,$host]"
             */
            cache_key: string[];
            /**
             * 鉴权状态码的缓存时间，单位是秒
             * @example 5
             */
            ttl: number;
          };
          /**
           * 鉴权服务器状态码设置
           * @example "-"
           */
          auth_server_status_code: {
            /**
             * 如果鉴权状态码既不是 FailCode，又不是 SuccessCode 时，处理鉴权请求的方式
             * @example "reject"
             */
            default_action: string;
            /**
             * 鉴权失败时的鉴权状态码
             * @example "407"
             */
            fail_code: string;
            /**
             * 鉴权成功时的鉴权状态码
             * @example "200"
             */
            success_code: string;
          };
          /**
           * 鉴权服务超时时间
           * @example "-"
           */
          auth_server_timeout: {
            /**
             * 鉴权超时后处理鉴权请求的策略，取值如下所示：
             *
             * - `reject`：veImageX 认为鉴权失败。
             * - `pass`：veImageX 认为鉴权成功。
             * @example "reject"
             */
            action: string;
            /**
             * 鉴权超时的时间，单位是毫秒。
             * @example 200
             */
            time: number;
          };
          /**
           * 响应设置
           * @example "-"
           */
          response: {
            /**
             * 鉴权失败时，响应用户的状态码
             * @example "403"
             */
            fail_code: string;
          };
        };
        /**
         * 鉴权服务器设置
         * @example "-"
         */
        auth_server: {
          /**
           * 鉴权服务器的主地址
           * @example "http://www.testa.com"
           */
          address: string;
          /**
           * 鉴权服务器的备地址
           * @example "http://www.testb.com"
           */
          backup_address: string;
          /**
           * 鉴权请求的路径，取值如下所示：
           *
           * - `constant`：表示鉴权请求中的路径与用户请求中的路径相同。
           * - `variable`：表示您需要在 pathValue 参数中指定一个鉴权请求中的路径。
           * @example "constant"
           */
          path_type: string;
          /**
           * 一个鉴权请求的路径
           * @example "/sig"
           */
          path_value: string;
          /**
           * 在发送鉴权请求时所使用的请求方法，取值如下所示：
           * - `default`：鉴权请求所使用的方法与用户的请求相同。
           * - `get`：鉴权请求使用 GET 方法。
           * - `post`：鉴权请求使用 POST 方法。
           * - `head`：鉴权请求使用 HEAD 方法。
           * @example "default"
           */
          request_method: string;
        };
        /**
         * 是否开启远程鉴权，取值如下所示：
         * - `true`：是
         * - `false`：否
         * @example "true"
         */
        enabled: boolean;
        /**
         * 生效对象
         * @example "-"
         */
        match_rule: {
          /**
           * 匹配方式，取值如下所示：
           *
           * - `match`：object 匹配 Value。
           * - `not_match`：object 不匹配 Value。
           * @example "match"
           */
          match_operator: string;
          /**
           * 对哪些对象类型进行规则匹配，取值如下所示：
           *
           * - `filetype`：表示特定后缀的文件。
           * - `directory`：表示特定文件目录下的所有文件。
           * - `path`：表示特定的文件。
           * @example "directory"
           */
          object: string;
          /**
           * Object 对应的具体对象
           * @example "/www/img/volc/"
           */
          value: string;
        }[];
      };
      /**
       * UA 访问控制配置
       * @example "-"
       */
      ua_list: {
        /**
         * 是否开启 UA 访问控制，取值如下所示：
         * * `true`：开启 UA 访问控制
         * * `false`：关闭 UA 访问控制
         * @example "false"
         */
        enabled: boolean;
        /**
         * 是否是白名单模式，取值如下所示：
         * * `true`：白名单模式
         * * `false`：黑名单模式
         * @example "true"
         */
        is_white_mode: boolean;
        /**
         * UA 列表
         * @example "["*chrome*|*firefox*"]"
         */
        values: string[];
      };
      /**
       * URL 鉴权配置
       * @example "-"
       */
      url_auth: {
        /**
         * 是否开启 URL 鉴权 ，取值如下所示：
         * * `true`：开启 URL 鉴权
         * * `false`：关闭 URL 鉴权
         * @example "true"
         */
        enabled: boolean;
        /**
         * A 鉴权配置
         * @example "-"
         */
        type_a: {
          /**
           * 备用鉴权密钥
           * @example "test"
           */
          backup_sk: string;
          /**
           * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
           * @example 1800
           */
          expire_time: number;
          /**
           * 主鉴权密钥
           * @example "sksksksksksk"
           */
          main_sk: string;
          /**
           * 签名参数名
           * @example "sign"
           */
          sign_param: string;
        };
        /**
         * B 鉴权配置
         * @example "-"
         */
        type_b: {
          /**
           * 备用鉴权密钥
           * @example "test"
           */
          backup_sk: string;
          /**
           * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
           * @example 1800
           */
          expire_time: number;
          /**
           * 主鉴权密钥
           * @example "sksksksksksk"
           */
          main_sk: string;
        };
        /**
         * C 鉴权配置
         * @example "-"
         */
        type_c: {
          /**
           * 备用鉴权密钥
           * @example "test"
           */
          backup_sk: string;
          /**
           * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
           * @example 1800
           */
          expire_time: number;
          /**
           * 主鉴权密钥
           * @example "sksksksksksk"
           */
          main_sk: string;
        };
        /**
         * D 鉴权配置
         * @example "-"
         */
        type_d: {
          /**
           * 备用鉴权密钥
           * @example "test"
           */
          backup_sk: string;
          /**
           * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
           * @example 1800
           */
          expire_time: number;
          /**
           * 主鉴权密钥
           * @example "sksksksksksk"
           */
          main_sk: string;
          /**
           * md5hash 参数名
           * @example "sign"
           */
          sign_param: string;
          /**
           * 时间戳格式，取值如下所示：
           * - `decimal`：十进制（Unix 时间戳）
           * - `heximal`：十六进制（Unix 时间戳）
           * @example "heximal"
           */
          time_format: string;
          /**
           * TimeStamp 参数名
           * @example "t"
           */
          time_param: string;
        };
      };
    };
    /**
     * 是否开启自适应格式，取值如下所示：
     * * `true`：开启自适应
     * * `false`：关闭自适应
     * @example "true"
     */
    adaptfmt: boolean;
    /**
     * 是否开启集智瘦身，取值如下所示：
     * * `true`：开启集智瘦身
     * * `false`：关闭集智瘦身
     * @example "false"
     */
    do_slim: boolean;
    /**
     * 域名
     * @example "example.volcimagex.cn"
     */
    domain: string;
    /**
     * 是否开启全球加速，取值如下所示：
     * * `true`：开启全球加速
     * * `false`：关闭全球加速
     * @example "false"
     */
    global_acceleration: boolean;
    /**
     * HTTPS 配置
     * @example "-"
     */
    https_config: {
      /**
       * 是否开启 HTTP2，取值如下所示：
       * * `true`：开启 HTTP2
       * * `false`：关闭 HTTP2
       * @example "true"
       */
      enable_http2: boolean;
      cert: {
        /** 证书通用名 */
        common_name: string;
        /** 证书id */
        id: string;
        /** 证书过期时间，unix时间戳，单位秒 */
        not_after: number;
      };
      /**
       * 证书 ID，若`enable_https`为`true`，则为必选。
       * @example "dd68fe42b4f74231be96a75e7a2f9bc8"
       */
      cert_id: string;
      /**
       * 是否开启强制跳转，取值如下所示：
       *
       * - `true`：开启
       * - `false`：关闭
       * @example "false"
       */
      enable_force_redirect: boolean;
      /**
       * 是否开启  HTTPS，取值如下所示：
       * * `true`：开启 HTTPS
       * * `false`：关闭 HTTPS
       * @example "true"
       */
      enable_https: boolean;
      /**
       * 是否启用 OCSP 装订配置，取值如下所示：
       *
       * - `true`：开启
       * - `false`：关闭
       * @example "false"
       */
      enable_ocsp: boolean;
      /**
       * 是否强制使用 HTTPS，取值如下所示：
       * * `true`：强制 HTTPS
       * * `false`：不强制 HTTPS
       * @example "false"
       */
      force_https: boolean;
      /**
       * 强制跳转状态码，取值如下所示：
       *
       * - `301`：返回给用户 301 状态码进行重定向。
       * - `302`：返回给用户 302 状态码进行重定向。
       * @example "301"
       */
      force_redirect_code: string;
      /**
       * 强制跳转类型，取值如下所示：
       *
       * - `http2https`：HTTP 到 HTTPS
       * - `https2http`：HTTPS 到 HTTP
       * @example "http2https"
       */
      force_redirect_type: string;
      /**
       * HSTS 配置
       * @example "-"
       */
      hsts: {
        /**
         * 是否启用 HSTS 配置，取值如下所示：
         * - `true`：启用
         * - `false`：关闭
         * @example "false"
         */
        enabled?: boolean;
        /**
         * HSTS 配置是否也应用于加速域名的子域名。取值如下所示：
         * - `include`：应用于子域名站点。
         * - `exclude`：不应用于子域名站点。
         * @example "include"
         */
        subdomain?: string;
        /**
         * Strict-Transport-Security 响应头在浏览器中的缓存过期时间，单位是秒。取值范围是 0 - 31,536,000。31,536,000 秒表示 365 天。如果该参数值为 0，其效果等同于禁用 HSTS 设置。
         * @example 0
         */
        ttl?: number;
      };
      /**
       * 支持的 tls 版本。取值如下所示：
       *
       * - `tlsv1.0`
       * - `tlsv1.1`
       * - `tlsv1.2`
       * - `tlsv1.3`
       * @example "["tlsv1.2"]"
       */
      tls_versions: string[];
    };
    /**
     * 域名锁定状态
     * @example "-"
     */
    lock_status: {
      /**
       * 智能压缩是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      compression_locked: boolean;
      /**
       * 整个域名是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      domain_locked: boolean;
      /**
       * IP 访问限制是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      ip_access_rule_locked: boolean;
      /**
       * 锁定原因
       * @example "域名存在特殊配置"
       */
      reason: string;
      /**
       * Referer 防盗链配置是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      referer_access_rule_locked: boolean;
      /**
       * 远程鉴权是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      remote_auth_locked: boolean;
      /**
       * 响应头配置是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      response_header_locked: boolean;
      /**
       * URL 鉴权签算配置是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      sign_url_auth_locked: boolean;
      /**
       * UA 访问限制配置是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      ua_access_rule_locked: boolean;
    };
    /**
     * 页面优化设置
     * @example "-"
     */
    page_optimization?: {
      /**
       * 是否开启页面优化，取值如下所示：
       *
       * - `true`：启用
       * - `false`：关闭
       * @example "true"
       */
      enabled: boolean;
      /**
       * 需要优化的对象列表，取值如下所示：
       * - `html`: 表示 HTML 页面。
       * - `js`: 表示 Javascript 代码。
       * - `css`: 表示 CSS 代码。
       * @example "html"
       */
      optimization_type: string[];
    };
    /**
     * HTTP Header 配置
     * @example "-"
     */
    resp_hdrs: {
      /** @example "" */
      access_origin_control: boolean;
      /**
       * 头部操作动作，取值如下所示：
       * - `set`：设置。
       * - `delete`：删除。
       * @example ""
       */
      action: string;
      /**
       * header key
       * @example "Access-Control-Allow-Origin"
       */
      key: string;
      /**
       * header value
       * @example "*"
       */
      value: string;
    }[];
    /**
     * 域名状态
     * @example "配置中"
     */
    status: string;
  };
}

/**
 * 尺寸单位。当前仅支持取值px表示像素。
 * @example "px"
 */
export enum GetGetImageStylesUnitEnum {
  Px = "px",
}

/**
 * 队列状态。取值如下所示：
 * - `Pending`：排队中
 * - `Running`：执行中
 * @example "Pending"
 */
export enum GetGetImageTranscodeQueuesStatusEnum {
  Pending = "Pending",
  Running = "Running",
}

/**
 * 队列类型。取值如下所示：
 * - `default`：表示账号默认队列，每个账号一个
 * - `user`：表示用户创建队列，个数将有配额限制
 * @example "default"
 */
export enum GetGetImageTranscodeQueuesTypeEnum {
  Default = "default",
  User = "user",
}

export interface GetImageAIDetailsQuery {
  /**
   * 查询的结束 Unix 时间戳，`StartTime` 与 `EndTime` 时间间隔最大不超过 7 天。
   * @example 1685913599
   */
  EndTime: number;
  /**
   * 分页条数，取值范围为 (0, 100]。
   * @format int64
   * @example 10
   */
  Limit: number;
  /**
   * 分页偏移量，默认为 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @format int64
   * @example 0
   */
  Offset?: number;
  /**
   * 队列 ID，通过 CreateImageAITask 接口返回。
   * @example "649a9dbc32**064d44cf5b0"
   */
  QueueId: string;
  /**
   * 返回图片 URL 或 URI 中包含该值的任务。默认为空，不传则返回所有任务。
   * @example "test"
   */
  SearchPtn?: string;
  /**
   * 查询的起始 Unix 时间戳，`StartTime` 与 `EndTime` 时间间隔最大不超过 7 天。
   * @format int64
   * @example 1684713599
   */
  StartTime: number;
  /**
   * 执行状态，填入多个时使用英文逗号分隔。取值如下所示：
   *
   * - `Pending`：排队中
   * - `Running`：执行中
   * - `Success`：执行成功
   * - `Fail`：执行失败
   * @example "Pending"
   */
  Status?: string;
  /**
   * 任务 ID，通过 CreateImageAITask 接口返回，缺省时查询指定队列下全部的任务。
   * @example "67174744adc54449623155b9"
   */
  TaskId: string;
}

export interface GetImageAIDetailsRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务中每个条目的执行详情。
     * @example "-"
     */
    ExecInfo: {
      /**
       * 结束时间。
       * @example "2023-06-27 15:44:11"
       */
      EndAt?: string;
      /**
       * 条目 ID。
       * @example "649a9332***80e9cc0a0ec"
       */
      EntryId?: string;
      /**
       * 执行输入。
       * @example "-"
       */
      ExecInput?: {
        /**
         * 图片 URL 或 URI。
         * @example "2e39b35b98524100ae12b2ae07283cb2"
         */
        ObjectKey: string;
      };
      /**
       * 执行输出。
       * @example "-"
       */
      ExecOutput?: {
        /**
         * AI 图像处理失败[错误码](https://www.volcengine.com/docs/508/1104726#%E9%94%99%E8%AF%AF%E7%A0%81)。仅当 `Status` 值为 `Fail` 时，`ErrCode` 有值。
         * @example "615011"
         */
        ErrCode: string;
        /**
         * AI 图像处理失败错误信息。
         * @example "解码图片要素失败"
         */
        ErrMsg: string;
        /**
         * AI 图像处理结果，是 JSON 压缩并转义后的字符串，仅当 `Status` 值为 `Success` 时，`Output` 有值。参看 [AI 图像处理模板](https://www.volcengine.com/docs/508/1515840)页面获取模板 ID 和参数信息，根据具体的工作流的说明进行解析。
         * @example "{\"ObjectKey\":\"veImageX-store/ai_super_resolution/67***\/example.webp\",\"Size\":54509,\"Format\":\"webp\"}"
         */
        Output: string;
      };
      /**
       * 开始时间。
       * @example "2023-06-27 15:44:11"
       */
      StartAt?: string;
      /**
       * 执行状态。取值如下所示：
       *
       * - `Pending`：排队中
       * - `Running`：执行中
       * - `Success`：执行成功
       * - `Fail`：执行失败
       * @example "Fail"
       */
      Status?: string;
      /**
       * 提交时间。
       * @example "2023-06-27 15:43:46"
       */
      SubmitAt?: string;
    }[];
    /**
     * 任务中包含的条目数。
     * @format int64
     * @example 2
     */
    Total: number;
  };
}

export interface GetImageAITasksQuery {
  /**
   * 查询的结束 Unix 时间戳，`StartTime` 与 `EndTime` 时间间隔最大不超过 7 天。
   * @example 1729612799
   */
  EndTime: number;
  /**
   * 单次查询列出的任务的个数，取值范围为 (0,1000]，默认值为 1000。
   * @example 10
   */
  Limit?: number;
  /**
   * 上一次查询返回的位置标记，作为本次查询的起点信息，默认值为空。
   * @example "0"
   */
  Marker?: string;
  /**
   * 队列 ID，通过 CreateImageAITask 接口返回。
   * @example "63db57e36**cce1ffee11bb1"
   */
  QueueId: string;
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "5s****fo"
   */
  ServiceId: string;
  /**
   * 查询的起始 Unix 时间戳，`StartTime` 与 `EndTime` 时间间隔最大不超过 7 天。
   * @example 1728921600
   */
  StartTime: number;
  /**
   * 指定查询的任务状态，缺省时将查询全部状态的任务。取值如下所示：
   * - `Running`：任务运行中
   * - `Suspend`：任务中断
   * - `Done`：任务已完成
   * - `Cancel`：任务取消
   * - `Failed`：任务失败
   * @example "Failed"
   */
  Status?: string;
  /**
   * 任务 ID，通过 CreateImageAITask 接口返回，缺省时查询指定队列下全部的任务。
   * @example "649b9d3****5537684010a7"
   */
  TaskId?: string;
}

export interface GetImageAITasksRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * 是否还有更多任务，取值如下所示：
     *
     * - `true`：是，还有任务未列出。
     * - `false`：否，已列出所有任务。
     * @example "false"
     */
    HasMore: boolean;
    /**
     * `HasMore` 取值为 `true` 时（即本次查询还有未列举到的任务时），`Marker` 应作为查询起始位置标记，您需要在下一次查询时传入该值。
     * @example "hkaiohwn**1WIO092WO"
     */
    Marker?: string;
    /**
     * 指定的队列 ID。
     * @example "63db57e36**cce1ffee11bb1"
     */
    QueueId: string;
    /**
     * AI 图像处理任务的各类信息。
     * @example "-"
     */
    TaskInfo: {
      /**
       * 任务的结束执行时间。
       * @example "2024-10-22 14:28:16"
       */
      EndAt: string;
      /**
       * 任务中执行失败的条目数。
       * @format int64
       * @example 1
       */
      Fail: number;
      /**
       * 任务中重试的条目数。
       *
       * :::tip
       * 当因系统内部原因导致的条目转码失败，系统将自动重试该条目，最大重试次数为 5。
       * :::
       * @format int64
       * @example 0
       */
      Retry: number;
      /**
       * 任务的开始执行时间。
       * @example "2024-10-22 13:28:16"
       */
      StartAt: string;
      /**
       * 任务的执行状态，取值如下所示：
       *
       * - `Running`：任务运行中
       * - `Suspend`：任务中断
       * - `Done`：任务已完成
       * - `Cancel`：任务取消
       * - `Failed`：任务失败
       * @example "Failed"
       */
      Status: string;
      /**
       * 任务的提交时间。
       * @example "2024-10-22 13:26:46"
       */
      SubmitAt: string;
      /**
       * 任务中执行成功的条目数。
       * @format int64
       * @example 0
       */
      Success: number;
      /**
       * 任务 ID。
       * @example "649b9d3****5537684010a7"
       */
      TaskId: string;
      /**
       * 任务中包含的条目数。
       * @format int64
       * @example 1
       */
      Total: number;
    }[];
  };
}

export interface GetImageAddOnTagQuery {
  /**
   * 组件标签 key。取值固定为`功能属性`，返回相关标签值。
   * @example "功能属性"
   */
  Key: string;
  /**
   * 组件类型，默认获取所有类型的标签信息。取值如下所示：
   * - `AI`：智能处理类型
   * - `Other`：其他增值类型
   * @example "AI"
   */
  Type?: string;
}

export interface GetImageAddOnTagRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageAddOnTag"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "202012061458560100110461411B0409BB"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 账号内的可见的附加组件标签名称，一个标签下可以包含多个组件功能。
     * @example "[
     *             "分割抠图",
     *             "去水印",
     *             "图像增强",
     *             "图像处理",
     *             "图像检测",
     *             "图像评分",
     *             "图片去重",
     *             "图片合成",
     *             "图片搜索",
     *             "文字识别",
     *             "版权保护"
     *         ]"
     */
    Tag: string[];
  };
}

export interface GetImageAiGenerateTaskQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7h**21"
   */
  ServiceId: string;
  /**
   * AIGC 任务 ID，您可通过调用[创建 AIGC 异步任务](https://www.volcengine.com/docs/508/1134013)获取。
   * @example "8928h*****19803"
   */
  TaskId: string;
}

export interface GetImageAiGenerateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    AestheticScores: number[];
    SDScores: number[];
    /**
     * 任务状态，取值如下所示：
     * - `Success`：处理成功
     * - `Running`：进行中
     * - `Failed`：处理失败
     * @example "success"
     */
    Status: string;
    /**
     * 生成的处理图 URI，固定为 4 个长宽比为 1:1 的方图。
     * @example "tos-cn-i-5t***4x/example.png"
     */
    Uris: string[];
  };
}

export interface GetImageAlertRecordsBody {
  /**
   * 应用 ID。您可以通过调用 [GetImageXQueryApps](https://www.volcengine.com/docs/508/19511) 的方式获取账号下全部的 AppId。
   * @example "78**23"
   */
  AppId?: string;
  /**
   * 获取数据结束时间点，需在起始时间点之后。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如 `2019-06-02T00:00:00+08:00`。
   * @example "2019-06-02T01:00:00+08:00"
   */
  EndTime: string;
  /**
   * 获取个数限制。默认值为 10，取值范围为 (0,100\]。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移量。默认值为 0，表示从最新一个开始获取。
   * @example "0"
   */
  Marker?: string;
  /**
   * 告警名称，正则匹配。不填则查询所有告警记录。
   * @example "/test/"
   */
  Name?: string;
  /**
   * 告警规则 ID，完全匹配。不填则查询所有告警记录。
   * @example "R1ae373c0-0686-48b5-bf6f-84d529c55881"
   */
  RuleId?: string;
  /**
   * 获取数据起始时间点。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如 `2019-06-02T00:00:00+08:00`。
   * :::tip
   * 由于仅支持查询近 90 天的历史数据，则若此刻时间为`2011-11-21T16:14:00+08:00`，那么您可输入最早的开始时间为`2011-08-18T00:00:00+08:00`。
   * :::
   * @example "2019-06-02T00:00:00+08:00"
   */
  StartTime: string;
}

export interface GetImageAlertRecordsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * 告警记录列表
     * @example ""
     */
    AlertRecords: {
      /**
       * 告警时间。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
       * @example "2019-06-02T00:00:00+08:00"
       */
      AlertAt: string;
      /**
       * 告警条件
       * @example "-"
       */
      AlertCond: {
        /**
         * 各指标告警信息
         * @example ""
         */
        AlertContent: {
          /**
           * 聚合周期，单位为分钟。被监控指标在该指定周期内满足指标比较阈值触发告警。
           * @example 5
           */
          AggrInterval: number;
          /**
           * 拆分维度。仅当告警配置了维度拆分时有值。
           * @example "域名"
           */
          Dim: string;
          /**
           * 指标取值函数，取值如下所示：
           *
           * - `max`：最大值
           * - `min`：最小值
           * - `avg`：平均值
           * - `pct25`：25峰值
           * - `pct50`：50峰值
           * - `pct90`：90峰值
           * - `pct99`：99峰值
           * - `sum`：总和
           * @example "avg"
           */
          Func: string;
          /**
           * 指标名称
           * @example "cdn_srate"
           */
          Item: string;
          /**
           * 指标比较方法，取值如下所示：
           *
           * - `LE`：小于等于
           * - `GE`：大于等于
           * - `INC`：环比上升
           * - `DEC`：环比下降
           * - `HOH_INC`：与上小时同比上升
           * - `HOH_DEC`：与上小时同比下降
           * - `DOD_INC`：与昨天同比上升
           * - `DOD_DEC`：与昨天同比下降
           * @example "LE"
           */
          Op: string;
          /**
           * 持续周期，表示聚合周期内的异常指标持续出现指定次数触发告警。
           * @example 1
           */
          RepeatCnt: number;
          /**
           * 指标比较阈值
           * @example 50
           */
          Threshold: number;
          /**
           * 告警指标值列表。维度拆分条件下可能存在多个元素。
           * @example "-"
           */
          Vals: {
            /** 指标上一周期值对应的时间。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。仅在 `Op` 为同比/环比相关方法时有值。 */
            BaseTime: string;
            /**
             * 触发告警的拆分维度值，仅当告警配置了维度拆分时有值。
             * @example "图片类型"
             */
            DimVal: string;
            /** 前序指标值列表。长度为 RepeatCnt-1 */
            PrevVals: {
              /** 指标上一周期值对应的时间。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。仅在 `Op` 为同比/环比相关方法时有值。 */
              BaseTime: string;
              /** 指标值 */
              Val: number;
              /** 指标上一周期值，仅在 `Op` 为同比/环比相关方法时有值。 */
              ValBase: string;
              /** 指标值对应的时间。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。 */
              ValTime: string;
            }[];
            /**
             * 指标值
             * @example "png"
             */
            Val: number;
            /**
             * 指标上一周期值，仅在 `Op` 为同比/环比相关方法时有值。
             * @example 20
             */
            ValBase: number;
            /**
             * 指标值对应的时间。日期格式按照 `ISO8601` 表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`。
             * @example "2019-06-02T00:00:00+08:00"
             */
            ValTime: string;
          }[];
        };
        /**
         * 规则之间的逻辑关系，取值如下所示：
         *
         * - `and`：和
         * - `or`：或
         * @example "or"
         */
        LogicOp: string;
      };
      /**
       * 告警级别，取值如下所示：
       *
       * - `warn`：警告
       * - `error`：错误
       * - `fatal`：致命
       * @example "warn"
       */
      Level: string;
      /**
       * 记录标识，用于获取下一页数据。
       * @example "1"
       */
      Marker: string;
      /**
       * 告警规则名称
       * @example "test"
       */
      Name: string;
      /**
       * 告警平台
       * @example "iOS"
       */
      OS: string;
      /**
       * 告警阶段，取值如下所示：
       *
       * - `upload`：图片上传-上传 1.0
       * - `uploadv2`：图片上传-上传 2.0
       * - `cdn`：图片加载-下行网络监控
       * - `client`：图片加载-客户端传状态监控
       * - `sensible`：图片加载-感知指标监控
       * @example "upload"
       */
      Phase: string;
      /**
       * 告警规则 ID
       * @example "R1ae373c0-0686-48b5-bf6f-84d529c55881"
       */
      RuleId: string;
    }[];
    /**
     * 是否有更多记录，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * @example "false"
     */
    HasMore: boolean;
    /**
     * 记录总数
     * @example 1
     */
    Total: number;
  };
}

export interface GetImageAllDomainCertRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /** 证书通用名称 */
    CertCommonName: string;
    /** 证书id */
    CertID: string;
    /** 证书备注 */
    CertName: string;
    /** 证书过期时间 */
    CertNotAfter: number;
    /** 域名 */
    Domain: string;
    /** 域名状态 */
    DomainStatus: string;
    /** 可通过san与cert_common_name来匹配证书可用的域名 */
    San: string[];
  }[];
}

export interface GetImageAnalyzeResultQuery {
  /**
   * 任务运行结束时间，Unix 时间戳。
   * @format int64
   * @example 1698306058
   */
  EndTime: number;
  /** 文件名 */
  File?: string;
  /**
   * 分页条数。默认值为 10。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移量，默认为 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 任务执行 ID
   * @example "6503f977**22be798e"
   */
  RunId?: string;
  /**
   * 任务运行开始时间，Unix 时间戳。
   * @format int64
   * @example 1697701258
   */
  StartTime: number;
  /**
   * 任务 ID，您可以通过调用 [GetImageAnalyzeTasks](https://www.volcengine.com/docs/508/1160417) 获取指定地区全部离线评估任务 ID。
   * @example "981820****9183720"
   */
  TaskId: string;
}

export interface GetImageAnalyzeResultRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务结果
     * @example "-"
     */
    Results: {
      /**
       * 评估结果存储 URI
       * @example "tos-cn-i-5t**4x/653a17e**d7f5ec0c2.csv"
       */
      ResultUri?: string;
      /**
       * 任务指定 ID
       * @example "653a17eb2**9bd7f5ec0c2"
       */
      RunId?: string;
      /** @example "2023-10-26 07:40:27.563 +0000 UTC" */
      StartAt?: string;
      /**
       * 任务状态，取值如下所示：
       * - `Running`：进行中
       * - `Suspend`：暂停
       * - `Done`：结束
       * @example "Done"
       */
      Status?: string;
    }[];
    /**
     * 查询到的总量
     * @example 1
     */
    Total: number;
  };
}

export interface GetImageAnalyzeTasksQuery {
  /**
   * 分页条数。取值范围为 (0,100]，默认值为 100。
   * @example 100
   */
  Limit?: number;
  /**
   * 分页偏移量，默认为 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 任务地区。默认为 `cn`，表示国内。
   * @example "cn"
   */
  Region?: string;
  /**
   * 返回任务名称或描述中包含该值的任务。
   * @example "test"
   */
  SearchPtn?: string;
}

export interface GetImageAnalyzeTasksRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 任务
     * @example "-"
     */
    Tasks: {
      /**
       * 评估任务创建时间
       * @example "2023-09-15T06:28:07.267Z"
       */
      CreateAt?: string;
      /**
       * 任务描述
       * @example "备注"
       */
      Desc?: string;
      /**
       * 是否模拟模板每阶段输出，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "false"
       */
      EvalPerStage?: boolean;
      EvalStages: string[];
      Id: string;
      /**
       * 离线评估任务名称
       * @example "test"
       */
      Name?: string;
      /** txt 评估文件的 Store URI。 */
      ResUri?: string[];
      SampleRate?: number;
      /**
       * 所在服务的服务 ID
       * @example "5t**4x"
       */
      ServiceId?: string;
      /**
       * 任务状态，取值如下所示：
       * - `Pending`：排队中
       * - `Done`：已完成
       * - `Running`：进行中
       * @example "Done"
       */
      Status?: string;
      /**
       * 该条评估任务的任务 ID
       * @example "640000200205055079"
       */
      TaskId?: string;
      /**
       * `Type` 取值 `UriFile` 时，指定的模版名称。
       * @example "tplv-5t**4x-12.image"
       */
      Tpl?: string;
      /**
       * 任务类型，取值如下所示：
       * - `UrlFile`：在线提交 URL 离线评估
       * - `UriFile`：在线提交 URI 离线评估
       * @example "UriFile"
       */
      Type?: string;
      /**
       * 评估任务更新时间
       * @example "2023-09-15T06:28:07.267Z"
       */
      UpdateAt: string;
      VqTypes: string[];
    }[];
    /**
     * 查询到任务数量
     * @format int64
     * @example 2
     */
    Total: number;
  };
}

export interface GetImageAuditResultQuery {
  /**
   * 审核建议，缺省情况下返回全部任务。取值如下所示：
   *
   * - `nopass`：建议不通过
   * - `recheck`：建议复审
   * @example "nopass"
   */
  AuditSuggestion?: string;
  /**
   * 图片类型，缺省情况下返回全部类型任务。取值如下所示：
   *
   * - `problem`：问题图片
   * - `frozen`：冻结图片
   * - `fail`：审核失败图片
   * @example "fail"
   */
  ImageType?: string;
  /**
   * 分页条数。取值范围为 (0,100\]，默认值为 10。
   * @example 10
   */
  Limit?: number;
  /**
   * 上一次查询返回的位置标记，作为本次列举的起点信息。默认值为 0。
   * @example 0
   */
  Marker?: number;
  /**
   * 问题类型，取值根据审核类型的不同其取值不同。缺省情况下返回全部类型任务。
   *
   * - 基础安全审核
   * 	- `govern`：涉政
   * 	- `porn` ：涉黄
   * 	- `illegal`：违法违规
   * 	- `terror`：涉暴
   * - 智能安全审核
   * 	- 图像风险识别
   * 		- `porn` ：涉黄，主要适用于通用色情、色情动作、性行为、性暗示、性分泌物、色情动漫、色情裸露等涉黄场景的风险识别
   * 		- `sensitive1` ：涉敏1，具体指涉及暴恐风险
   * 		- `sensitive2`：涉敏2，具体值涉及政治内容风险
   * 		- `forbidden`：违禁，主要适用于打架斗殴、爆炸、劣迹艺人等场景的风险识别
   * 		- `uncomfortable`：引人不适，主要适用于恶心、恐怖、尸体、血腥等引人不适场景的风险识别
   * 		- `qrcode`：二维码，主要适用于识别常见二维码（QQ、微信、其他二维码等）
   * 		- `badpicture`：不良画面，主要适用于自我伤害、丧葬、不当车播、吸烟/纹身/竖中指等不良社会风气的风险识别
   * 		- `sexy`：性感低俗，主要适用于舌吻、穿衣性行为、擦边裸露等多种性感低俗场景的风险识别
   * 		- `age`：年龄，主要适用于图中人物对应的年龄段识别
   * 		- `underage`：未成年相关，主要适用于儿童色情、儿童邪典等风险识别
   * 		- `quality`：图片质量，主要适用于图片模糊、纯色边框、纯色屏等风险识别
   * 	- 图文风险识别
   * 		- `ad`：广告，综合图像及文字内容智能识别广告
   * 		- `defraud`：诈骗，综合图像及文字内容智能识别诈骗
   * 		- `charillegal`：文字违规，图片上存在涉黄、涉敏、违禁等违规文字
   * @example "pron"
   */
  Problem?: string;
  /**
   * 任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1160409) 获取所需的任务 ID。
   * @example "971917**019018"
   */
  TaskId: string;
  /**
   * 审核场景，缺省情况下查询全部场景的任务。取值如下所示：
   *
   * - `UrlFile`：上传 txt 审核文件处理场景
   * - `Url`：上传审核图片 URL 处理场景
   * - `Upload`：图片上传场景
   * @example "UrlFile"
   */
  Type?: string;
}

export interface GetImageAuditResultRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 是否还有更多任务，取值如下所示：
     *
     * - `true`：是，还有其他任务未列举
     * - `false`：否，已列举所有任务
     * @example "false"
     */
    HaveMore: boolean;
    /**
     * 任务结果
     * @example "-"
     */
    Results: {
      /**
       * 该任务的审核能力。取值如下所示：
       *
       * - `0`：基础审核能力
       * - `1`：智能审核能力
       * @example 1
       */
      Ability?: number;
      /**
       * 审核建议，取值如下所示：
       *
       * - `nopass`：建议不通过
       * - `recheck`：建议复审
       * @example "nopass"
       */
      AuditSuggestion?: string;
      /**
       * 审核结束时间
       * @example "2023-10-19 09:35:13"
       */
      EndAt?: string;
      /**
       * 条目 ID
       * @example "653068d1**122cae20774"
       */
      EntryId?: string;
      /**
       * 错误信息
       * @example "图片审核失败"
       */
      ErrMsg?: string;
      /**
       * 审核结果，取值如下所示：
       *
       * - `problem`：问题图片
       * - `frozen`：冻结图片
       * - `fail`：审核失败图片
       * @example "fail"
       */
      ImageType?: string;
      /**
       * 表示 txt 审核文件的存储 URI。
       * @example "http://test.imagex.com/6.txt"
       */
      ImageUri?: string;
      /**
       * `HaveMore` 取值 `true` 时，即本次查询还有未列举到的任务时。`Marker` 作为起始条目位置标记，您需要在下一次查询时传入该值。
       * @example "653068**22cae20774"
       */
      Marker?: string;
      /**
       * 审核发现图片问题类型
       * @example "["pron"]"
       */
      Problems?: string[];
      /**
       * 任务 ID
       * @example "653068d1**22cae2076e"
       */
      TaskId?: string;
      /**
       * 该任务被指定的审核场景，取值如下所示：
       *
       * - `UrlFile`：上传 txt 审核文件处理场景
       * - `Url`：上传审核图片 URL 处理场景
       * - `Upload`：图片上传场景
       * @example "UrlFile"
       */
      Type?: string;
    }[];
  };
}

export interface GetImageAuditTasksQuery {
  /**
   * 审核能力，缺省情况下查询全部审核类型的任务。取值如下所示：
   *
   * - `0`：基础审核能力
   * - `1`：智能审核能力
   * @example 0
   */
  AuditAbility?: number;
  /**
   * 分页条数。取值范围为 (0,100]，默认值为 100。
   * @example 100
   */
  Limit?: number;
  /**
   * 分页偏移量，默认为 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 任务地区。仅支持默认取值 `cn`，表示国内。
   * @example "cn"
   */
  Region?: string;
  /**
   * 审核状态，缺省情况下查询全部状态的任务。取值如下所示：
   *
   * - `Running`：审核中
   * - `Suspend`：已暂停
   * - `Done`：已完成
   * - `Failed`：审核失败
   * - `Cancel`：已取消
   * @example "Running"
   */
  Status?: string;
  /**
   * 审核任务类型，当前仅支持取值为 `audit`。
   * @example "audit"
   */
  TaskType: string;
  /**
   * 审核场景，缺省情况下查询全部场景的任务。取值如下所示：
   *
   * - `UrlFile`：上传 txt 审核文件处理场景
   * - `Url`：上传审核图片 URL 处理场景
   * - `Upload`：图片上传场景
   * @example "UrlFile"
   */
  Type?: string;
}

export interface GetImageAuditTasksRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 审核任务详情
     * @example "-"
     */
    Tasks: {
      /**
       * 审核任务
       * @example "-"
       */
      AuditTask?: {
        /**
         * 审核能力，取值如下所示：
         *
         * - `0`：基础审核能力
         * - `1`：智能审核能力
         * @example 1
         */
        AuditAbility: number;
        /**
         * 指定的审核维度
         * @example "["pron","sexy"]"
         */
        AuditDimensions: string[];
        /**
         * 仅当 `EnableAuditRange` 取值 `1` 时，有返回值。表示指定审核的目录前缀。
         * @example "["b/"]"
         */
        AuditPrefix: string[];
        /**
         * 指定的智能安全审核类型下图片文本审核维度。
         * @example "["ad"]"
         */
        AuditTextDimensions: string[];
        /**
         * 指定的回调类型
         * @example "["ad"]"
         */
        CallbackDimensions: string[];
        /**
         * 回调图片类型，取值如下所示：
         *
         * - `normal`：正常图片
         * - `problem`：问题图片
         * - `frozen`：冻结图片
         * - `fail`：审核失败图片
         * @example "["problem","frozen","fail"]"
         */
        CallbackImageTypes: string[];
        /**
         * 指定的回调 URL
         * @example "http://example.callback.com"
         */
        CallbackUrl: string;
        /**
         * 仅当 `Type` 取值 `Upload` 时，有返回值。
         * 审核范围，取值如下所示：
         *
         * - `0`：不限范围
         * - `1`：指定范围
         * @example 0
         */
        EnableAuditRange: number;
        /**
         * 是否开启回调，取值如下所示：
         *
         * - `true`：开启
         * - `false`：不开启
         * @example "true"
         */
        EnableCallback: boolean;
        /**
         * 是否开启冻结，取值如下所示：
         *
         * - `true`：开启
         * - `false`：不开启
         * @example "true"
         */
        EnableFreeze: boolean;
        /**
         * 是否开启大图审核，取值如下所示：
         * - `true`：开启
         * - `false`：不开启
         * @example "false"
         */
        EnableLargeImageDetect: boolean;
        /**
         * 审核失败的图片数量
         * @format int64
         * @example 0
         */
        FailedCount: number;
        /**
         * 指定的冻结维度
         * @example "["pron","sexy","ad"]	"
         */
        FreezeDimensions: string[];
        /**
         * 冻结策略，当前仅支持取 `0`，表示禁用图片。
         * @example 0
         */
        FreezeStrategy: number;
        /**
         * 指定的冻结措施，取值如下所示：
         *
         * - `recheck`：建议复审
         * - `nopass`：审核不通过
         * @example "["nopass","recheck"]"
         */
        FreezeType: string[];
        /**
         * 仅当 Type 取值 Url 时，有返回值。表示上传的待审核图片 Url 列表详情。
         * @example "-"
         */
        ImageInfos: {
          /**
           * 自定义的区分图片的标识
           * @example "92bodw28122j19***018h3i1928g"
           */
          DataId: string;
          /**
           * 待审核图片的 URL
           * @example "https://test.png"
           */
          ImageUri: string;
        }[];
        /**
         * 仅当 `EnableAuditRange` 取值 `1` 时，有返回值。表示指定不审核的目录前缀。
         * @example "["a/"]"
         */
        NoAuditPrefix: string[];
        /**
         * 审核中的图片数量
         * @format int64
         * @example 0
         */
        ProcessedNumber: number;
        /**
         * 审核成功的图片数量
         * @format int64
         * @example 0
         */
        SuccessCount: number;
      };
      /**
       * 该审核任务的创建时间
       * @example "2023-10-19 07:22:58"
       */
      CreateAt?: string;
      /**
       * 审核任务 ID
       * @example "653068d***af748040"
       */
      Id?: string;
      /**
       * 仅当 `Type` 值为 `UrlFile` 时，有返回值。表示 txt 审核文件的存储 URI。
       * @example "["service/audit.txt"]"
       */
      ResUri?: string[];
      /**
       * 该审核任务所在的服务 ID
       * @example "lk**i0"
       */
      ServiceId?: string;
      /**
       * 该条审核任务的状态，取值如下所示：
       *
       * - `Running`：审核中
       * - `Suspend`：已暂停
       * - `Done`：已完成
       * - `Failed`：审核失败
       * - `Cancel`：已取消
       * @example "Done"
       */
      Status?: string;
      /**
       * 审核任务类型，当前仅支持取值为 `audit`。
       * @example "audit"
       */
      TaskType?: string;
      /**
       * 审核场景，取值如下所示：
       *
       * - `UrlFile`：上传 txt 审核文件处理场景
       * - `Url`：上传审核图片 URL 处理场景
       * - `Upload`：图片上传场景
       * @example "UrlFile"
       */
      Type?: string;
      /**
       * 该审核任务的更新时间
       * @example "2023-10-19 07:22:58	"
       */
      UpdateAt: string;
    }[];
    /**
     * 符合请求的审核任务数量
     * @example 1
     */
    Total: number;
  };
}

export interface GetImageAuthKeyQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "y7****w7"
   */
  ServiceId: string;
}

export interface GetImageAuthKeyRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 该服务的主鉴权 Key。
     * @example "hi2d8h***e6td2h"
     */
    PrimaryKey: string;
    /**
     * 该服务的备鉴权 Key。
     * @example "8uw19***e1guw80"
     */
    SecondaryKey: string;
    /**
     * 指定的服务 ID。
     * @example "y7****w7"
     */
    ServiceId: string;
  };
}

export interface GetImageBackgroundColorsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageBackgroundColors"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071815274301020801714002AEAE2C"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 颜色列表。
     * @example "["#EE5C3D","#E55D8F","#bddcbe","#00000000","#C9CDD4","#FFA841"]"
     */
    Colors: string[];
  };
}

/** 描述 */
export interface GetImageBgFillResultBody {
  /**
   * 向下填充比例，取值范围为 [0, 0.4]。
   * @format float
   * @example "0.15"
   */
  Bottom?: number;
  /**
   * 向左填充比例，取值范围为 [0, 0.4]。
   * @format float
   * @example "0.15"
   */
  Left?: number;
  /**
   * 填充模型，取值如下所示：
   * * 0：国漫风格模型；
   * * 1：通用模型。
   * @example 0
   */
  Model: number;
  /**
   * 向右填充比例，取值范围为 [0, 0.4]。
   * @format float
   * @example "0.15"
   */
  Right?: number;
  /**
   * 服务`ID`。
   * * 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "ln***tb"
   */
  ServiceId: string;
  /**
   * 待填充原图的存储 URI 和 URL（公网可访问的 URL）。
   * @example "imagex-common/b9***77"
   */
  StoreUri: string;
  /**
   * 向上填充比例，取值范围为 [0, 0.4]。
   * @format float
   * @example "0.15"
   */
  Top?: number;
}

export interface GetImageBgFillResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageBgFillResult"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022082411381601021119922119000D90"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 填充结果图的 URI。
     * @example "tos-cn-i-ln***tb/97***e9"
     */
    ResUri: string;
  };
}

/** 描述 */
export interface GetImageComicResultBody {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "fc**cf"
   */
  ServiceId: string;
  /**
   * 待处理原图的存储 URI 和 URL（可公网访问的 URL）。
   * @example "tos-i-hr**pr/91**22.jpeg"
   */
  StoreUri: string;
}

export interface GetImageComicResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 结果图存储 URI。
     * @example "tos-i-fc**cf/21**73.jpeg"
     */
    ResUri: string;
  };
}

/** 描述 */
export interface GetImageContentBlockListBody {
  /**
   * 域名，指定后将返回包含该域名的 URL 禁用任务。
   * @example "test.example.com"
   */
  Domain?: string;
  /**
   * 结束查询时间，unix 时间戳，单位为秒。
   * @format int64
   * @example 1678252535
   */
  EndTime: number;
  /**
   * 按时间排序，取值如下所示：
   * - `asc`：正序
   * - `desc`：逆序
   * @example "desc"
   */
  Order?: string;
  /**
   * 页码，仅返回该页码上的任务。默认值为 1。
   * @example 1
   */
  PageNum?: number;
  /**
   * 每页条数，取值范围是[10,1000]。默认值为 100。
   * @example 10
   */
  PageSize?: number;
  /**
   * 开始查询时间，unix 时间戳，单位为秒。
   * @format int64
   * @example 1678204800
   */
  StartTime: number;
  /**
   * 资源更新状态，取值如下所示：
   * - `submitting`：提交中
   * - `running`：执行中
   * - `succeed`：成功
   * - `failed`：失败
   * @example "succeed"
   */
  State?: string;
  /**
   * 指定要查询的 URL，缺省情况下查询当前服务所有禁用任务列表。
   * @example "http://t.test.com/778141***b133f7b"
   */
  Url?: string;
}

export interface GetImageContentBlockListRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageContentBlockList"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "20230308131535FEDBE13F9A1A0010D907"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * 具体数据
     * @example "-"
     */
    Data: {
      /**
       * 任务的创建时间
       * @format int64
       * @example 1678252511
       */
      CreateTime: number;
      /**
       * 完成结果提示信息
       * @example "-"
       */
      Msg: string;
      /**
       * 任务进度
       * @example "0%"
       */
      Process: string;
      /**
       * URL 状态
       * @example "running"
       */
      State: string;
      /**
       * 任务类型，取值如下所示：
       *
       * - `block_url`：禁用任务。
       * - `unblock_url`：解禁任务，表示此时解禁未完成。
       * @example "block_url"
       */
      TaskType: string;
      /**
       * 任务的更新时间
       * @format int64
       */
      UpdateTime: number;
      /**
       * 指定的 URL
       * @example "http://t.test.com/778141***b133f7b"
       */
      Url: string;
    }[];
    /**
     * 当前页码
     * @example 1
     */
    PageNum: number;
    /**
     * 每页最大记录数
     * @example 10
     */
    PageSize: number;
    /**
     * 符合查询条件的总记录数
     * @example 1
     */
    Total: number;
  };
}

/** 描述 */
export interface GetImageContentTaskDetailBody {
  /**
   * 域名，指定后返回包含该域名的 URL 任务。
   * @example "test.example.com"
   */
  Domain?: string;
  /**
   * 查询结束时间，unix 时间戳，单位为秒。
   * @format int64
   * @example 1721703964
   */
  EndTime: number;
  /**
   * 按时间排序，取值如下所示：
   * - `asc`：正序
   * - `desc`：逆序
   * @example "asc"
   */
  Order?: string;
  /**
   * 页码，系统将仅返回该页面上的任务。默认值为 1。
   * @example 1
   */
  PageNum?: number;
  /**
   * 每页条数，取值范围为 [10,1000]。默认值为 100。
   * @example 10
   */
  PageSize?: number;
  /**
   * 查询开始时间，unix 时间戳，单位为秒。
   * @format int64
   * @example 1721703949
   */
  StartTime: number;
  /**
   * 内容管理资源状态，取值如下所示：
   * - `submitting`：提交中
   * - `running`：执行中
   * - `succeed`：成功
   * - `failed`：失败
   * @example "succeed"
   */
  State?: string;
  /**
   * 待查询任务 ID
   * @example "123***89"
   */
  TaskId?: string;
  /**
   * 内容管理任务类型，缺省情况下表示查询全部任务。取值如下所示：
   * * `refresh`：刷新任务，包含刷新 URL 和刷新目录。
   * * `refresh_url`：刷新 URL
   * * `block_url`：禁用 URL
   * * `unblock_url`：解禁 URL
   * * `preload_url`：预热 URL
   * * `refresh_dir`：目录刷新（支持根目录刷新）
   * @example "refresh_url"
   */
  TaskType?: string;
  /**
   * 资源 URL 或者目录，可精确匹配，取值为空时表示查询全部任务。
   * @example "http://test.example.com/demo.png"
   */
  Url?: string;
}

export interface GetImageContentTaskDetailRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * 具体数据
     * @example "-"
     */
    Data: {
      /**
       * 任务的创建时间
       * @format int64
       * @example 1721703949
       */
      CreateTime: number;
      /**
       * 完成结果提示信息
       * @example "-"
       */
      Msg: string;
      /**
       * 任务进度
       * @example "100%"
       */
      Process: string;
      /**
       * 资源任务状态，取值如下所示：
       * - `submitting`：提交中
       * - `running`：执行中
       * - `succeed`：成功
       * - `failed`：失败
       * @example "succeed"
       */
      State: string;
      /**
       * 任务 ID
       * @example "******"
       */
      TaskId: string;
      /**
       * 资源任务类型，取值如下所示：
       * * `refresh`：刷新任务
       * * `refresh_url`：刷新 URL
       * * `block_url`：禁用 URL
       * * `unblock_url`：解禁 URL
       * * `preload_url`：预热 URL
       * * `refresh_dir`：目录刷新
       * @example "refresh_url"
       */
      TaskType: string;
      /**
       * 任务的更新时间
       * @format int64
       * @example 1721703964
       */
      UpdateTime: number;
      /**
       * 任务指定的 URL 或目录
       * @example "http://test.example.com/demo.png"
       */
      Url: string;
    }[];
    /**
     * 当前页码
     * @example 1
     */
    PageNum: number;
    /**
     * 每页最大记录数
     * @example 10
     */
    PageSize: number;
    /**
     * 总记录数
     * @example 1
     */
    Total: number;
  };
}

export interface GetImageDetectResultBody {
  /**
   * 检测类型，取值仅支持 `face`，表示检测图片中人脸所在坐标。
   * @example "face"
   */
  DetectType: string;
  /**
   * 当 DetectType 取值 `face` 时，为必填。
   *
   * 人脸检测阈值，推荐值为 0.52（默认值），取值范围为 (0,1)。值越高，对检测结果过滤越严格，召回率越低，精确率越高。
   *
   * :::tip
   * - 阈值过低，表示图片中的检测样本较多，可能会导致非人脸样本被纳入检测范围，从而降低精确率。
   * - 阈值过高，表示图片中的检测样本较少，可能导致样本漏检。
   * :::
   * 选择人脸检测时必填，人脸检测阈值，取值范围（0,1）
   * @format float
   * @example "0.52"
   */
  FaceDetectThresh?: number;
  /**
   * 指定服务下的待检测图片的 StoreUri 或者公网可访问 Url。
   * @example "tos-serviceid1/demo.png"
   */
  ImageUri: string;
}

export interface GetImageDetectResultQuery {
  /**
   * 待检测图片对应的服务 ID。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid1"
   */
  ServiceId: string;
}

export interface GetImageDetectResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 检测类型
     * @example "face"
     */
    DetectType: string;
    /**
     * 人脸识别结果
     * @example "-"
     */
    Faces: {
      /**
       * 人脸坐标位置。
       * :::tip
       * 例如`[11,22,33,44]`，表示人脸的左上角和右下角坐标。其中`11`为左上角横坐标，`22`为左上角纵坐标，`33`为右下角横坐标，`44`为右下角纵坐标。
       * :::
       * @example "  [11,22,33,44]"
       */
      Box: number[];
      /**
       * 坐标置信度，表示识别内容可信程度。
       * 值越大，代表可信程度越高。置信度高于 90% 表示高可信，60%～90% 建议人工二次确认，低于 60% 表示不可信。
       * @format float
       * @example "置信度"
       */
      Score: number;
    }[];
  };
}

export interface GetImageDuplicateDetectionBody {
  /**
   * 是否使用异步，取值如下所示：
   * * `true`：使用异步去重
   * * `false`：（默认）不使用异步去重
   * @example "true"
   */
  Async?: boolean;
  /**
   * 当`Async`取值为`true`即启用异步时需要添加回调地址，地址使用 POST 请求方式。回调内容详见[回调参数](#回调参数)。
   * @example "http://example.callback.com/test"
   */
  Callback?: string;
  /**
   * 图像特征提取类型，取值如下所示：
   * - `hash`：（默认）基于图像的像素值、颜色分布、纹理等特征生成哈希码，并通过哈希码进行比较来判定图片的相似度。该方式处理速度快，但对图片的旋转和颜色的敏感度较高，适用于大规模且纹理相对简单的图片的快速去重。
   * - `cnn`：通过深度学习技术来提取图像的高级语义特征，如对象、场景和纹理等，这些特征用于比较不同图像之间的相似性。该提取方式鲁棒性较好，对旋转、缩放和变形的敏感度较低，适用于纹理复杂、细节丰富的图片去重。
   * @example "hash"
   */
  ExtractorType?: string;
  /**
   * 相似度阈值。上传图片数量超过 2 张并执行去重分组时，系统将对原图中满足该阈值的图片进行分组。取值范围为 [0,1]，默认值为 0.84。最多支持两位小数。
   * @example "0.84"
   */
  Similarity?: number;
  /**
   * 需要去重的图片 URL，多个地址以英文逗号分割。图片格式仅支持 JPEG（.jpeg 或 .jpg）和 PNG，支持格式混合输入。
   * @example "["https://test.imagex.cn/obj/tos-cn-i-jc****ko/ee****7e","https://test.imagex.cn/obj/tos-cn-i-jc****ko/ee****7e"]"
   */
  Urls: string[];
}

export interface GetImageDuplicateDetectionQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7k**1k"
   */
  ServiceId: string;
}

export interface GetImageDuplicateDetectionRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 回调地址，与请求参数中的`Callback`相同。具体异步去重信息请参考 [GetDedupTaskStatus](https://www.volcengine.com/docs/508/138909)接口。具体回调内容请参考[回调参数](https://www.volcengine.com/docs/508/138658#%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0) 。
     * @example "http://localhost:6901/top/v1/test"
     */
    Callback?: string;
    /**
     * 分组结果，若输入 2 个以上原图时，将按组返回内容相同的图片，每组的图片个数非固定值。
     * @example "-"
     */
    Groups?: Record<string, string[]>;
    /**
     * 图片评分，仅在只上传两张图片并对比时才返回 Score 字段。
     * @example "1.0"
     */
    Score?: string;
    /**
     * 异步任务 ID。
     * @example "staging_9864458e_000000000020503"
     */
    TaskId?: string;
  };
}

export interface GetImageElementsQuery {
  /**
   * 分页返回条数。默认 10，最大限制为 100。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移，默认 0，取值为 1 时，表示跳过一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 返回图片 URI 中包含该值的要素列表。
   * @example "mofang"
   */
  SearchPtn?: string;
  /**
   * 要素类型，取值如下所示：
   * * image：图片要素；
   * * background：背景要素；
   * * mask：蒙版要素。
   * @example "image"
   */
  Type: string;
}

export interface GetImageElementsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageElements"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071814510401021117309801FD1D15"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 要素列表。
     * @example "-"
     */
    ImageList: {
      /**
       * 要素添加时间，添加要素时的服务器当地时间。
       * @example "2022-07-15 16:50:30"
       */
      AddAt: string;
      /**
       * 图片 URI。
       * @example "tos-cn-i-nnsl1jf0*m/mofang/16e5f344e12363fa463d619be5bcbece.png"
       */
      StoreUri: string;
    }[];
    /**
     * 要素总个数。
     * @example 2
     */
    Total: number;
  };
}

/** 描述 */
export interface GetImageEnhanceResultBody {
  /**
   * 是否不去压缩失真。`Model`取值为`0`时选填，支持以下取值：
   * * `true`：不进行去压缩失真处理
   * * `false`：（默认）进行去压缩失真处理
   * @example "false"
   */
  DisableAr?: boolean;
  /**
   * 是否不自适应锐化。`Model`取值为`0`时选填，支持以下取值：
   * * `true`：不进行锐化处理
   * * `false`：（默认）进行锐化处理
   * @example "true"
   */
  DisableSharp?: boolean;
  /**
   * 增强模型，取值如下所示：
   * * `0`：通用模型
   * * `1`：低质专清模型
   * @example 0
   */
  Model: number;
  /**
   * 服务 ID。
   * * 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "v0***bf"
   */
  ServiceId: string;
  /**
   * 待增强的原图地址的存储 URI 和 URL（公网可访问的 URL）。
   * @example "test.webp"
   */
  StoreUri: string;
}

export interface GetImageEnhanceResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageEnhanceResult"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022052415234901022524314707965A79"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 实际执行的增强方法。
     * @example "ar,sharp"
     */
    Method: string;
    /**
     * 增强图像的 URI。
     * @example "tos-i-v0***bf/a957dcc7cb89b0a4e2889466f2fdc9d7"
     */
    ResUri: string;
  };
}

export interface GetImageEraseModelsQuery {
  /**
   * 模型。默认取值为`0`。
   * * 0：自动检测并擦除模型列表。
   * * 1：指定区域擦除模型列表。
   * @example 0
   */
  Type?: number;
}

export interface GetImageEraseModelsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 模型列表。
     * @example "["eraser_model_imagex_0.1.0"]"
     */
    Models: string[];
  };
}

/** 描述 */
export interface GetImageEraseResultBody {
  /**
   * 指定区域擦除时图片待修复区域。<br>不填表示自动检测内容并修复，若所选模型不支持自动检测，则直接返回原图。
   * @example "-"
   */
  BBox?: {
    /**
     * 待修复区域左上角的 X 坐标，取值范围为[0,1]。
     * @format float
     * @example "0.1"
     */
    X1: number;
    /**
     * 待修复区域右下角的 X 坐标，取值范围为[0,1]。
     * @format float
     * @example "0.7"
     */
    X2: number;
    /**
     * 待修复区域左上角的 Y 坐标，取值范围为[0,1]。
     * @format float
     * @example "0.1"
     */
    Y1: number;
    /**
     * 待修复区域右下角的 Y 坐标，取值范围为[0,1]。
     * @format float
     * @example "0.7"
     */
    Y2: number;
  }[];
  /**
   * 修复模型，支持取值如下所示：
   * - 自动检测并擦除类型模型：eraser_model_imagex_0.1.0
   * - 指定区域擦除模型：
   * 	- eraser_model_imagex_0.1.0 （推荐）
   * 	- eraser_model_aliab
   * @example "eraser_model_imagex_0.1.0"
   */
  Model: string;
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "v0***bf"
   */
  ServiceId: string;
  /**
   * 待修复原图的存储 URI 或 URL（公网可访问的 URL）。
   * @example "test.webp"
   */
  StoreUri: string;
}

export interface GetImageEraseResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageEraseResult"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022052415234901022524314707965A79"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 修复后结果图的 URI。
     * @example "tos-boe-i-v0***bf/a95***d7"
     */
    ResUri: string;
  };
}

export interface GetImageFontsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 字体列表。
     * @example "-"
     */
    Fonts: {
      /**
       * 字体值，即字体库字体名称。
       * @example "SourceHanSans-Regular.ttf"
       */
      Font: string;
      /**
       * 字体中文名称，如思源黑体。
       * @example "思源黑体"
       */
      Name: string;
      /**
       * 字体资源 URI。
       * @example "nephogramlogo/SourceHanSans-Regular.ttf"
       */
      Uri: string;
    }[];
  };
}

export interface GetImageMigrateTasksQuery {
  /**
   * 分页查询时，显示的每页数据的最大条数。默认值为 10，最大值为 1000。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移量，用于控制分页查询返回结果的起始位置，以便对数据进行分页展示和浏览。默认值为 0。
   * :::tip
   * 例如，指定分页条数 Limit = 10，分页偏移量 Offset = 10，表示从查询结果的第 11 条记录开始返回数据，共展示 10 条数据。
   * :::
   * @format int64
   * @example 0
   */
  Offset?: number;
  /**
   * 任务地区（即任务目标服务的地区），缺省时将返回国内列表。取值如下所示：
   *
   * - `cn`：国内
   * - `sg`：新加坡
   * @example "cn"
   */
  Region?: string;
  /**
   * 迁移的目标服务 ID。
   * @example "vu**yi"
   */
  ServiceId?: string;
  /**
   * 任务状态，填入多个时使用英文逗号分隔。取值如下所示：
   * - `Initial`：创建中
   * - `Running`：运行中
   * - `Done`：全部迁移完成
   * - `Partial`：部分迁移完成
   * - `Failed`：迁移失败
   * - `Terminated`：中止
   * @example "Done"
   */
  Status?: string;
  /**
   * 任务 ID。
   * @example "648c15f764f3c4abd95ad044"
   */
  TaskId?: string;
  /**
   * 返回任务名称中包含该值的迁移任务信息。
   * @example "test"
   */
  TaskNamePtn?: string;
}

export interface GetImageMigrateTasksRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 迁移任务列表
     * @example "-"
     */
    Tasks: {
      /**
       * 目标信息
       * @example "-"
       */
      Dst: {
        /**
         * 目标 key 前缀
         * @example "migrate-test/"
         */
        Prefix: string;
        /**
         * 服务 ID
         * @example "vu9***9yi"
         */
        ServiceId: string;
        /**
         * 服务名称
         * @example "service-test"
         */
        ServiceName: string;
        /**
         * 源 Bucket 名称保留规则
         * @example "false"
         */
        SkipBucket: boolean;
        /**
         * 上传配置。取值如下所示：
         *
         * - `0`：直接覆盖同名文件
         * - `1`：增加文件名后缀，后缀为 任务 ID
         * - `2`：跳过同名文件，即不做迁移
         * @example 1
         */
        UploadConf: number;
      };
      /**
       * 任务 ID
       * @example "648c15f764f3c4abd95ad044"
       */
      ID: string;
      /**
       * 任务名称
       * @example "test"
       */
      Name: string;
      /**
       * 迁移进度信息
       * @example "-"
       */
      Progress: {
        /**
         * 失败错误码。仅当 `Status`=`Failed` 时有值。
         *
         * @example 613100
         */
        ErrCode: number;
        /**
         * 失败原因。仅当 `Status`=`Failed` 时有值。
         *
         * @example "下载URL列表文件失败"
         */
        ErrMsg: string;
        /**
         * 迁移失败文件数
         *
         * @format int64
         * @example 1
         */
        FailCnt: number;
        /**
         * 迁移成功文件量，单位为 byte
         *
         * @format int64
         * @example 346641
         */
        SuccessAmount: number;
        /**
         * 迁移成功文件数
         *
         * @format int64
         * @example 4
         */
        SuccessCnt: number;
        /**
         * 迁移文件总量，单位为 byte
         *
         * @format int64
         * @example 5523453
         */
        TotalAmount: number;
        /**
         * 总文件数
         *
         * @format int64
         * @example 5
         */
        TotalCnt: number;
      };
      /**
       * 运行时长信息
       * @example "-"
       */
      Run: {
        /**
         * 迁移任务结束时间
         * @example "2023-06-16 14:57:49	"
         */
        DoneAt: string;
        /**
         * 迁移任务开始时间
         * @example "2023-06-16 14:57:46	"
         */
        StartAt: string;
      }[];
      /**
       * 迁移策略
       * @example "-"
       */
      RunStrategy: {
        /**
         * 源下载 QPS 限制。如值不为空，则长度必须为 24，表示一天 24 小时内各小时的 QPS 限制值。
         * - 取值为负值时，表示无限制
         * - 取值为 0 时，表示对应时间不允许迁移
         * @example "[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]"
         */
        ReadQps: number[];
        /**
         * 源下载流量限制。单位为 Byte。如值不为空，则长度必须为24，表示一天 24 小时内各小时的流量限制值。
         * - 取值为负值时，表示无限制
         * - 取值为 0 时，表示对应时间不允许迁移
         * @example "[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]"
         */
        ReadRate: number[];
      };
      /**
       * 源信息
       * @example "-"
       */
      Source: {
        /**
         * Access Key
         * @example "AKL****UwNWViYmJmYWI	"
         */
        AK: string;
        /**
         * 源 bucket
         *
         * @example "migrate-test	"
         */
        Bucket: string;
        /**
         * 迁移源云服务商 CDN 域名
         *
         * @example "my-bucket.oss-cn-hangzhou.aliyuncs.com	"
         */
        CdnHost: string;
        /**
         * 源 Endpoint
         *
         * @example "http://tos-s3-cn-beijing.volces.com	"
         */
        Endpoint: string;
        /**
         * 迁移前缀列表
         *
         * @example "["base"]	"
         */
        Prefix: string[];
        /**
         * 迁移正则表达式列表
         *
         * @example "["/.png/"]"
         */
        Regex: string[];
        /**
         * 源 bucket 地区
         *
         * @example "cn-beijing	"
         */
        Region: string;
        /**
         * Secret Key
         * @example "Wm1J***1ZamMwWlRSbVpqZw==	"
         */
        SK: string;
        /**
         * 是否丢弃源 Header，取值如下所示：
         *
         * - `true`：丢弃源 Header
         * - `false`：不丢弃源 Header
         * @example "false"
         */
        SkipHeader: boolean;
        /**
         * 指定迁移结束时间点，为迁移结束当地服务器时间。表示仅迁移该时间段内新增或变更的文件。
         *
         * @example "2023-06-13 00:00:00	"
         */
        TimeEnd: string;
        /**
         * 指定迁移开始时间点，为迁移开始当地服务器时间。表示仅迁移该时间段内新增或变更的文件。
         *
         * @example "2023-06-10 00:00:00	"
         */
        TimeStart: string;
        /**
         * 源服务商
         *
         * @example "S3"
         */
        Vendor: string;
      };
      /**
       * 任务状态。取值如下所示：
       *
       * - `Initial`：创建中
       * - `Running`：运行中
       * - `Done`：全部迁移完成
       * - `Partial`：部分迁移完成
       * - `Failed`：迁移失败
       * - `Terminated`：中止
       * @example "Partial"
       */
      Status: string;
      /**
       * 转码配置
       * @example "-"
       */
      Transcode: {
        /**
         * 包含透明通道的图片是否编码为降级格式。取值如下所示：
         * - `true`：降级
         * - `false`：不降级
         * @example "true"
         */
        AlphaDemotion: boolean;
        /**
         * 降级编码格式。支持的格式有 png、jpeg、heic、avif、webp、vvic。
         * @example "heic"
         */
        DemotionFmt: string;
        /**
         * 目标转码格式。支持的格式有 png、jpeg、heic、avif、webp、vvic。
         * @example "png"
         */
        Format: string;
        /**
         * 转码质量参数。对于 PNG 为无损压缩，其他格式下其值越小，压缩率越高，画质越差。
         * @example 75
         */
        Quality: number;
      };
    }[];
    /**
     * 总任务数
     * @format int64
     * @example 1
     */
    Total: number;
  };
}

export interface GetImageMonitorRulesQuery {
  /** @example "78**23" */
  AppId?: string;
  /**
   * 分页条数。默认值为 10，取值范围为（0，100]。
   * @example 10
   */
  Limit?: number;
  /**
   * 告警名称，以正则表达式进行筛选匹配。缺省时默认获取所有报警规则。
   * @example "/test/"
   */
  NamePtn?: string;
  /**
   * 分页偏移量。默认值为 0，表示从最新一个开始获取。
   * @example 0
   */
  Offset?: number;
  /**
   * 报警规则 ID，按照指定 ID 返回对应报警规则。缺省时默认获取所有报警规则。
   * @example "R1ae373c0-0686-48b5-bf6f-84d529c55881"
   */
  RuleId?: string;
}

export interface GetImageMonitorRulesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    MonitorRules: {
      /**
       * 监控的应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppID。
       * @example "82**41"
       */
      Appid: string;
      /**
       * 监测规则。
       * @example ""
       */
      Cond: {
        ItemCond: {
          /**
           * 聚合周期，单位为分钟。被监控指标在该指定周期内满足指标比较阈值且上报量满足样本量阈值时，才会触发告警。取值如下所示：
           *
           * - `5`
           * - `10`
           * @example 5
           */
          AggrInterval: number;
          /**
           * 样本量阈值。被监控指标超过该值时触发告警。
           * @example 200
           */
          CntThreshold?: number;
          /**
           * 指标取值函数，取值如下所示：
           *
           * - `max`：最大值
           * - `min`：最小值
           * - `avg`：平均值
           * - `pct25`：25峰值
           * - `pct50`：50峰值
           * - `pct90`：90峰值
           * - `pct99`：99峰值
           * - `sum`：总和
           * @example "avg"
           */
          Func: string;
          /**
           * 指标名称，取值定义请见 [veImageX 告警指标定义](https://www.volcengine.com/docs/508/1113944)。
           * @example "cdn_srate"
           */
          Item: string;
          /**
           * 指标比较方法，取值如下所示：
           *
           * - `LE`：小于等于
           * - `GE`：大于等于
           * - `INC`：环比上升
           * - `DEC`：环比下降
           * - `HOH_INC`：与上小时同比上升
           * - `HOH_DEC`：与上小时同比下降
           * - `DOD_INC`：与昨天同比上升
           * - `DOD_DEC`：与昨天同比下降
           * @example "LE"
           */
          Op: string;
          /**
           * 持续周期，当监控指标在聚合周期内，连续`RepeatCnt`次满足指标比较阈值且上报量满足样本量阈值时，才会触发告警。取值如下所示：
           *
           * - `1`
           * - `3`
           * - `5`
           * @example 3
           */
          RepeatCnt: number;
          /**
           * 指标比较阈值，需要与 `CntThreshold` 同时被满足才会触发告警。
           * @example 50
           */
          Threshold: number;
        }[];
        /**
         * 多条监控规则之间的逻辑关系，取值如下所示：
         *
         * - `and`：且。表示有多条监控规则时，需满足所有监控规则才会触发告警通知。
         * - `or`：或。表示有多条监控规则时，满足其中一条监控规则就会触发告警通知。
         * @example "and"
         */
        LogicOp: string;
      };
      /**
       * 规则创建时间，ISO 8601 格式时间戳。
       * @example "2023-07-24T11:15:31.958Z"
       */
      CreateAt: string;
      /**
       * 创建后是否立即开启告警，取值如下所示：
       *
       * - `true`：开启
       * - `false`：关闭
       * @example "true"
       */
      Enabled: boolean;
      /**
       * 维度过滤条件，具体参数请见 [Filter](https://www.volcengine.com/docs/508/1112182#filter)。用于指定需要告警提示的维度配置。
       * @example ""
       */
      Filter?: {
        /**
         * 过滤条件
         * @example ""
         */
        DimFilter: {
          /**
           * 维度名称
           * @example "biz_tag"
           */
          Dim: string;
          /**
           * 纬度值是否取反，取值如下所示：
           *
           * - `true`：指定维度的实际值不得满足 `Vals` 所有指定值
           * - `false`：（默认）维度值等于 `Vals` 中之一即可
           * @example "false"
           */
          Not?: boolean;
          /**
           * 维度取值
           * @example "4g"
           */
          Vals: string[];
        }[];
        /**
         * 过滤条件之间的逻辑关系，取值如下所示：
         *
         * - `and`：和
         * - `or`：或
         * @example "or"
         */
        LogicOp: string;
      };
      /**
       * 监控频率，单位为分钟。取值如下所示：
       *
       * - `5`
       * - `10`
       * - `20`
       * - `30`
       * - `40`
       * - `50`
       * @example 5
       */
      Frequency: number;
      /**
       * 拆分维度，由[公共拆分维度](https://www.volcengine.com/docs/508/1113944)和[自定义拆分维度](https://www.volcengine.com/docs/508/34554)组合而成。
       * @example "AppVer"
       */
      GroupBy?: string;
      /**
       * 告警级别，取值如下所示：
       *
       * - `warn`：警告
       * - `error`：错误
       * - `fatal`：致命
       * @example "warn"
       */
      Level: string;
      /**
       * 自定义告警规则名称
       * @example "test"
       */
      Name: string;
      /**
       * 告警通知配置。
       * @example ""
       */
      Notification: {
        /**
         * 回调地址，`Mode` 包含 `http_callback`时，为必填。
         * @example "http://test.com"
         */
        CallbackUrl?: string;
        /**
         * 通知内容模板，模板中变量格式为 `$Name$`。Name 取值如下所示：
         *
         * - `报警名称`
         * - `报警级别`
         * - `报警App`
         * - `报警平台`
         * - `报警时间`
         * - `报警内容`
         * @example "```
         * 告警名称：$报警名称$
         * 告警级别：$报警级别$
         * 告警App：$报警App$
         * 告警平台：$报警平台$
         * 告警时间：$报警时间$
         * 告警内容：$报警内容$
         * ```"
         */
        Content: string;
        /**
         * 通知方式，仅支持取值 `http_callback`，表示回调。
         * @example "http_callback"
         */
        Mode: string[];
        /**
         * 沉默周期，单位为分钟。告警发生后，若未恢复正常，则会间隔一个沉默周期后再次重复发送一次告警通知。取值如下所示：
         *
         * - `0`
         * - `30`
         * - `60`
         * - `360`
         * @example 30
         */
        SilentDur: number;
        /**
         * 告警通知标题
         * @example "【veImageX图片服务】报警通知"
         */
        Title: string;
      };
      /**
       * 监控平台，取值如下所示：
       *
       * - `iOS`
       * - `Android`
       * - `WEB`
       * @example "Android"
       */
      OS?: string;
      /**
       * 监控阶段，取值如下所示：
       *
       * - `upload`：图片上传-上传 1.0
       * - `uploadv2`：图片上传-上传 2.0
       * - `cdn`：图片加载-下行网络监控
       * - `client`：图片加载-客户端传状态监控
       * - `sensible`：图片加载-感知指标监控
       * @example "upload"
       */
      Phase: string;
      /**
       * 报警规则 ID
       * @example "R1ae373c0-0686-****-bf6f-84d529c55881"
       */
      RuleId: string;
      /**
       * 规则更新时间，ISO 8601 格式时间戳。
       * @example "2023-07-24T11:43:18.503Z"
       */
      UpdateAt: string;
    }[];
    /**
     * 规则总数
     * @example 1
     */
    Total: number;
  };
}

/** 描述 */
export interface GetImageOCRV2Body {
  /** 定制化保留字段，如果是正常调用忽略该字段，若为定制化需求则需要和算法开发者对齐调用方式 */
  Extra?: {
    /**
     * 默认为False，不开启Extra
     * @example "False"
     */
    Enable?: boolean;
    /**
     * 算子的输入参数
     * @example "{\"scene\": 1}"
     */
    MMServiceInput?: string;
    /**
     * 算子名称
     * @example "ocr"
     */
    MMServiceName?: string;
    /**
     * 算子版本
     * @example "v4"
     */
    MMServiceVersion?: string;
  };
  /**
   * 待识别的图片 URL，满足公网可访问。仅当 `StoreUri` 为空时取值有效，两者都为空时报错。
   * @example "http://test.com/example.png"
   */
  ImageUrl?: string;
  /**
   * 待识别的设备名称，仅当 `Scene` 为 `Instrument` 时，配置有效。取值如下所示：
   * - `freezing-point-tester`：冰点仪
   * - `brake-fluid-tester`：制动液测试仪
   * - `thermometer`： 温度计
   * - `oil-tester`：机油仪
   * @example "thermometer"
   */
  InstrumentName?: string;
  /**
   * 图片OCR识别场景，取值如下所示：
   * - `general`：通用场景，用于通用印刷体场景识别文本信息。
   * - `license`：营业执照场景，用于识别营业执照中社会信用代码等文本信息。
   * - `instrument`：设备识别场景，用于一些设备显示文字识别。
   * - `defect`：缺陷检测场景
   *
   * :::warning
   * 当前仅支持识别图片中**简体中文**和**简体英文**这两种文本信息。
   * :::
   * @example "defect"
   */
  Scene: string;
  /**
   * 待识别图片文件的存储 URI。
   * @example "test.com/example.png"
   */
  StoreUri: string;
}

export interface GetImageOCRV2Query {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "0j**2h"
   */
  ServiceId: string;
}

export interface GetImageOCRV2Res {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 缺陷检测场景识别结果。
     * @example "-"
     */
    DefectResult?: {
      /**
       * 识别出的缺陷类别编号，当前仅在取值为 0 时，表示漏油。
       * :::tip
       * 其他缺陷类别编号识别还在训练增加中。
       * :::
       * @example 0
       */
      ClassLabel?: number;
      /**
       * 识别出的文本块的坐标位置。
       * @example "[x1,y1,x2,y2]"
       */
      Location?: number[];
    }[];
    /** 定制化保留字段，默认为空 如果输入参数内Extra.Enable设置为True，该字段返回的结果依赖于算子结果 */
    Extra?: {
      /**
       * 算子服务返回的json序列化结果
       * @example "{\"使用性质\": \"非营运\",  \"注册日期\": \"2023-09-14\", \"车辆类型\": \"小型轿车\", \"车辆识别代号\": \"LS6A2***\", \"品牌型号\": \"长安牌SC***\", \"发动机号码\": \"PFHJ***\", \"号牌号码\": \"渝***\", \"所有人\": \"刘**\"}"
       */
      Info?: string;
      /**
       * 状态对应信息， 0: 成功 -1: 图片载入失败 -2: 图片检测失败
       * @example "success"
       */
      Message?: string;
      /**
       * 算子服务处理状态，0: 成功 -1: 图片载入失败 -2: 图片检测失败
       * @example 0
       */
      Status?: number;
    };
    /** 定制化保留字段，默认为空 如果输入参数内Extra.Enable设置为True，该字段返回的结果依赖于算子结果 */
    ExtraOutput?: {
      /** 算子服务返回的结果 */
      Info?: Record<string, unknown>;
      /**
       * 状态对应信息， 0: 成功 -1: 图片载入失败 -2: 图片检测失败
       * @example "success"
       */
      Message?: string;
      /**
       * 算子服务处理状态，0: 成功 -1: 图片载入失败 -2: 图片检测失败
       * @example 0
       */
      Status?: number;
    };
    /**
     * 通用场景识别结果。
     * @example "-"
     */
    GeneralResult?: {
      /**
       * 文本置信度。识别出的内容可信程度，值越大内容越准确。
       * @example "0.983"
       */
      Confidence: string;
      /**
       * 识别的通用文本信息。
       * @example "花朵"
       */
      Content: string;
      /**
       * 文本块的坐标位置。
       * @example "[[x1,y1],[x2,y2]]"
       */
      Location: number[][];
    }[];
    /**
     * 设备识别场景识别的文本信息。根据您识别设备的不同取值含义分别为：
     *
     * - 当设备为冰点仪时，表示液体冰点温度值，例如`44.89`。
     *
     * - 当设备为制动液测试仪时，表示制动液含水量程度。例如`Middle`表示中等。
     *
     * - 当设备为温度计时，表示测量的温度值。例如`37.8`。
     *
     * - 当设备为机油仪时，表示机油的剩余使用寿命的估计值，例如`93.8`。
     * @example "37.8"
     */
    InstructmentResult?: string;
    /**
     * 营业执照场景识别结果。
     * @example "-"
     */
    LicenseResult?: Record<
      string,
      {
        /**
         * 识别的营业执照文本内容。
         * @example "叁佰万元整"
         */
        Content: string;
        /**
         * 识别出的文本块坐标。
         * @example "[x1,y1,x2,y2]"
         */
        Location: number[];
      }
    >;
    /**
     * 指定的识别场景。
     * @example "general"
     */
    Scene: string;
  };
}

/** 描述 */
export interface GetImagePSDetectionBody {
  /**
   * 原图的存储 URI。
   * @example "test.jpeg"
   */
  ImageUri: string;
  /**
   * 调用方法，默认为调用全部方法，若参数不为`all`，则其他方法仅可选一种。取值如下所示：
   * - all：调用所有方法
   * - ela：误差水平分析方法
   * - na：噪声分析方法
   * - he：基于颜色分布直方图均化的图像增强分析方法
   * @example "all"
   */
  Method?: string;
}

export interface GetImagePSDetectionQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "91**sh"
   */
  ServiceId: string;
}

export interface GetImagePSDetectionRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImagePSDetection"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 误差水平分析方法对应的图片。
     * @example "test1.jpeg"
     */
    ElaImage: string;
    /**
     * 基于颜色分布直方图均化的图像增强方法对应的图片。
     * @example "test3.jpeg"
     */
    HeImage: string;
    /**
     * 置信度标签，取值如下所示：
     * - 1：正常
     * - 0：高风险
     * @example 1
     */
    Label: number;
    /**
     * 噪声分析方法对应的图片。
     * @example "test2.jpeg"
     */
    NaImage: string;
    /**
     * 置信度，取值范围为[0,1]。
     * - 小于 0.3 为 PS 处理图；
     * - 大于 0.7 为真图；
     * - 取值范围为[0.3,0.7]之间的图片则为模型无法判断。
     * @format double
     */
    Score: number;
  };
}

/** 描述 */
export interface GetImageQualityBody {
  /**
   * 图片存储 Uri 或访问 URL。
   * * 图片 Uri 格式，例如：tos-example/7a7979974.jpeg
   * * 图片 URL 格式，例如：https://example.org/tos-example/7a7979974.jpeg~tplv.png
   * :::tip
   * 若传 URL，必须保证 URL 公网可访问。
   * :::
   * @example "tos-example/7a7979974.jpeg"
   */
  ImageUrl: string;
  /**
   * 指定服务下的评估参照图片存储 Uri 或访问 URL，用于和 `ImageUrl` 图片进行特定维度的对比。
   * :::tip
   * 当 `VqType` 中包含 `psnr、ssim、vmaf` 等任一字段时，该字段为必填，否则上述评估指标无法正常输出结果。
   * :::
   * 指定服务下的评估参照图片存储 Uri 或访问 URL，用于和 ImageUrl 图片进行特定维度的对比。  说明：当 VqType 中包含 psnr、ssim、vmaf等任一字段时，该字段为必填，否则上述评估指标无法正常输出结果。
   * @example "https://example.org/test.png"
   */
  ImageUrlRef?: string;
  /**
   * 评估工具。指定多个评估工具时使用英文逗号分隔，当前支持以下工具：
   * * nr_index
   * * vqscore
   * * advcolor
   * * blockiness
   * * noise
   * * aesmod
   * * blur
   * * cg
   * * contrast
   * * texture
   * * brightness
   * * overexposure
   * * hue
   * * saturation
   * * psnr
   * * ssim
   * * vmaf
   * * green
   * * cmartifacts
   * :::tip
   * nr_index 工具支持评估 contrast、brightness 等多个维度。您也可以单独指定各维度，获取指定维度估值。
   * :::
   * @example "nr_index,vqscore,advcolor,blockiness,noise,aesmod,blur,cg,contrast,texture,brightness,overexposure,hue,saturation,psnr,ssim,vmaf,green,cmartifacts,text_detect"
   */
  VqType: string;
}

export interface GetImageQualityQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7h**i6"
   */
  ServiceId: string;
}

export interface GetImageQualityRes {
  ResponseMetadata: {
    /** @example "GetImageQuality" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "202306041104200100100232280022D31" */
    RequestId: string;
    /** @example "ImageX" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    FrScoreResult: {
      /** @example 80.11 */
      Psnr: number;
      /** @example 0.2 */
      Ssim: number;
      /** @example 40.11 */
      Vmaf: number;
    };
    FrScores: {
      /** @example 40.11 */
      psnr: number;
      /** @example 0.2 */
      ssim: number;
      /** @example 80.11 */
      vmaf: number;
    };
    NrScoreResult: {
      /** @example 40.11 */
      AdvColor: number;
      /** @example 60.11 */
      Aesthetic: number;
      /** @example 60.11 */
      Blockiness: number;
      /** @example 40.11 */
      Blur: number;
      /** @example 220.11 */
      Brightness: number;
      /** @example 20.11 */
      Cg: number;
      /** @example 30.11 */
      CmArtifact: number;
      /** @example 50.11 */
      Contrast: number;
      /** @example 20.11 */
      Green: number;
      /** @example 90.11 */
      Hue: number;
      /** @example 70.11 */
      Noise: number;
      /** @example 40.11 */
      OverExposure: number;
      /** @example 60.11 */
      Saturation: number;
      /**
       * 文字质量分数
       * @example "11.1"
       */
      TextQualityScore: number;
      /** @example 60.11 */
      Texture: number;
      /** @example 40.11 */
      VqScore: number;
    };
    NrScores: {
      /** @example 40.11 */
      advcolor: number;
      /** @example 60.11 */
      aesthetic: number;
      /** @example 60.11 */
      blockiness: number;
      /** @example 40.11 */
      blur: number;
      /** @example 220.11 */
      brightness: number;
      /** @example 20.11 */
      cg: number;
      /** @example 30.11 */
      cmartifact: number;
      /** @example 40.11 */
      colorfulness: number;
      /** @example 50.11 */
      contrast: number;
      /** @example 20.11 */
      green: number;
      /** @example 90.11 */
      hue: number;
      /** @example 70.11 */
      noise: number;
      /** @example 40.11 */
      overexposure: number;
      /** @example 60.11 */
      saturation: number;
      /** @example 60.11 */
      texture: number;
      /** @example 40.11 */
      vqscore: number;
    };
    /** @example "vqscore" */
    VqType: string;
  };
}

export interface GetImageServiceQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "90**1h"
   */
  ServiceId: string;
}

export interface GetImageServiceRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageService"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /** 存储规则。 */
    StorageRulesV2?: {
      /** 中止未完成的分段上传配置。 */
      AbortIncompleteMultipartUpload?: {
        /** 距启动后的天数。 */
        DaysAfterInitiation?: number;
      };
      /** 是否启用。 */
      Enable: boolean;
      /** 事件类型。 */
      Event: string;
      /** 过期时间。 */
      Expiration?: {
        /** 日期。 */
        Date?: string;
        /** 天数。 */
        Days?: number;
      };
      /** 过滤条件。 */
      Filter?: {
        /** 是否包含大于等于。 */
        GreaterThanIncludeEqual?: string;
        /** 小于等于条件。 */
        LessThanIncludeEqual?: string;
        /** 对象大小大于。取值范围为 `[ ]`，单位为，默认值为``。 */
        ObjectSizeGreaterThan?: number;
        /** 对象大小上限。 */
        ObjectSizeLessThan?: number;
      };
      /** 请提供参数的名字（Id）和类型（string），我会根据输入生成参数的一句话描述。 */
      Id: string;
      /** 非当前版本的过期时间。 */
      NonCurrentVersionExpiration?: {
        /** 非当前日期。 */
        NonCurrentDate?: string;
        /** 非当前天数。 */
        NonCurrentDays?: number;
      };
      /** 非当前版本转换规则。 */
      NonCurrentVersionTransitions?: {
        /** 非当前日期。 */
        NonCurrentDate?: string;
        /** 非当前天数。 */
        NonCurrentDays?: number;
        /** 存储类型。 */
        StorageClass: string;
      }[];
      /** 参数的前缀和类型。 */
      Prefix: string;
      /** 状态转换。 */
      Transitions?: {
        /** 日期字符串。 */
        Date?: string;
        /** 天数。 */
        Days?: number;
        /** 存储类型。 */
        StorageClass: string;
      }[];
    }[];
    /**
     * 服务的授权 Bucket 列表。
     * @example "["tos-cn-i-fc*****cf"]"
     */
    AllowBkts: string[];
    /**
     * 是否允许配置其他镜像站类型，取值如下所示：
     *
     * - `true`：是
     * - `false`：否
     * @example "false
     * "
     */
    AllowMirrorTypes: boolean;
    /**
     * 是否开启精简 URL，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * @example "false"
     */
    CompactURL: boolean;
    /**
     * 服务创建时间，即创建时当地服务器时间。
     * @example "2018-05-09 17:44:40"
     */
    CreateAt: string;
    /**
     * 绑定域名的相关信息。
     * @example "-"
     */
    DomainInfos: {
      /**
       * 域名解析到的 cname。
       * @example "test.bytedance.com"
       */
      CNAME: string;
      /**
       * 绑定的域名。
       * @example "test"
       */
      DomainName: string;
      /**
       * 是否是默认域名，取值如下所示：
       * - `true`：默认域名
       * - `false`：非默认域名
       * @example "true"
       */
      IsDefault: boolean;
      /**
       * 域名状态。
       * @example "正常"
       */
      Status: string;
      /** 是否开启鉴权 */
      UrlAuth: boolean;
    }[];
    /**
     * 事件通知规则
     * @example "-"
     */
    EventRules?: {
      /**
       * 事件触发时接收回调的回调 URL。
       * @example "https://a.callback.com"
       */
      CallbackUrl: string;
      /**
       * 规则是否被启用，取值如下所示：
       *
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      Enable: boolean;
      /**
       * 事件类型。取值如下所示：
       *
       * - `Upload`：上传文件
       * - `Delete`：删除文件
       * - `Mirror`：镜像回源
       * - `Migrate`：数据迁移
       * - `OffTrans`：离线转码（仅图像处理服务可配置）
       * - `TplStore`：模板持久化存储（仅图像处理服务可配置）
       * @example "upload"
       */
      EventType: string[];
      /**
       * 规则 ID
       * @example "0180**61990"
       */
      Id: string;
      /**
       * 匹配规则的正则表达式。
       * @example "\test\.png\b"
       */
      MatchRule: string;
    }[];
    /**
     * 服务是否已经配置鉴权 key，取值如下所示：
     * - `true`：已配置
     * - `false`：未配置
     * @example "false"
     */
    HasSigkey: boolean;
    /**
     * 是否开启自定义处理样式，取值如下所示：
     * - `true`：是
     * - `false`：否
     * @example "true"
     */
    ImageY: boolean;
    /**
     * 自定义处理相关配置
     * @example "-"
     */
    ImageYAttribute: {
      /**
       * 是否开启原图保护，取值如下所示：
       *
       * - `true`：开启
       * - `false`：关闭
       * @example "true"
       */
      ImageProtect: boolean;
      /**
       * 样式分割符
       * @example "["@"]"
       */
      ImageStyleSeparators: string[];
      QnCosPreference: string;
      QueryStyleCombine: boolean;
    };
    /**
     * 镜像回源配置，默认关闭。
     * @example "-"
     */
    Mirror: {
      /**
       * 镜像回源下载原图时，携带的 HTTP 头部，键值都为 String 类型。
       * @example "{
       * 	"name": "app1"
       * }"
       */
      Headers: Record<string, string>;
      /**
       * 镜像回源域名。
       * @example "img.example.com"
       */
      Host: string;
      /**
       * 带权重回源域名，key 为 String 类型时，代表镜像回源域名；value 为 Integer 类型时，代表域名权重。
       * @example "{
       *   "test.com": 100,
       *   "test1.com": 0
       * }"
       */
      Hosts: Record<string, number>;
      /**
       * 下载图片的协议，支持取值：`http`、`https`。
       * @example "http"
       */
      Schema: string;
      /**
       * 镜像源 URI，其中图片名用 %s 占位符替代，比如/obj/%s。
       * @example ""
       */
      Source: string;
    };
    /**
     * 是否开启源地址访问，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * @example "false"
     */
    ObjectAccess: boolean;
    /**
     * 主鉴权 Key。
     * @example "abcd****qrst"
     */
    PrimaryKey: string;
    /**
     * 服务绑定的项目，默认为 default。
     * @example "default"
     */
    ProjectName?: string;
    ResourceLimitedVisit: {
      AllowDomains: string[];
      Enable: boolean;
    };
    /**
     * 服务绑定的标签。
     * @example "-"
     */
    ResourceTags?: {
      /**
       * 标签键
       * @example "userKey"
       */
      Key: string;
      /**
       * 标签值
       * @example "userValue"
       */
      Value: string;
    }[];
    /**
     * 用于保护「数据加密密钥」的密钥，只有加密上传的图片需要做处理时需要申请。
     * @example "key1"
     */
    RsaPublicKey?: string;
    /**
     * 备鉴权 Key。
     * @example "9819***1bbc12"
     */
    SecondaryKey: string;
    /**
     * 指定的服务 ID。
     * @example "fc*****cf"
     */
    ServiceId: string;
    /**
     * 服务名称。
     * @example "picture_1"
     */
    ServiceName: string;
    /**
     * 服务地域，取值如下所示：
     * * `cn`：中国
     * * `va`：美东
     * * `sg`：新加坡
     * @example "cn"
     */
    ServiceRegion: string;
    /**
     * 服务状态。状态分为未审核、审核未通过、正常、禁用。
     * :::tip
     * * 只有服务状态为正常时，该服务才可用。
     * * 如果是其他异常状态，请参考[服务管理](https://www.volcengine.com/docs/508/8086)进行处理。
     * :::
     * @example "正常"
     */
    ServiceStatus: string;
    /**
     * 服务类型，取值如下所示：
     * * `StaticRc`：素材托管服务
     * * `Image`：图片处理服务
     * @example "Image"
     */
    ServiceType: string;
    /**
     * 资源配置。
     * @example "-"
     */
    Storage: {
      /**
       * 是否支持任意文件格式上传，取值如下所示：
       * - `true`：支持
       * - `false`：不支持
       * @example "false"
       */
      AllTypes: boolean;
      /**
       * 存储 Bucket 名称。
       * @example "tos-cn-i-fc*****cf"
       */
      BktName: string;
      /**
       * 保存时间，单位为秒。
       * @format int64
       * @example 0
       */
      TTL: number;
    };
    /**
     * 存储降冷策略
     * @example "-"
     */
    StorageRules?: {
      /**
       * 策略命中后需要执行的操作，取值如下所示：
       *
       * - `DELETE`：删除文件
       * - `IA`：文件转低频存储
       * - `ARCHIVE`：文件转归档存储
       * - `COLD_ARCHIVE`：文件转冷归档存储
       *
       * - DELETE，删除
       * - IA，转为低频存储
       * - ARCHIVE_FR，转为归档闪回存储
       * - COLD_ARCHIVE，转为冷归档存储
       * - ARCHIVE，转为归档存储
       * @example "IA"
       */
      Action?: string;
      /**
       * 策略天数，按照 Event 事件 Day 天后执行 Action 事件，即当匹配文件的上传时间符合指定天数后，自动按照处理策略对资源进行处理。
       * 天数，与Date冲突
       * @example 24
       */
      Day?: number;
      /**
       * 是否启用策略，取值如下所示：
       *
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      Enable: boolean;
      /**
       * 策略类型，固定取值 `Upload`，表示按上传时间。
       * @example "upload"
       */
      Event: string;
      /** @example "IA" */
      NonCurrentAction?: string;
      /**
       * 非当前天数。取值范围为 `[ ]`，单位为，默认值为``。
       * @example 30
       */
      NonCurrentDay?: number;
      /**
       * 文件前缀，例如设置为 `prefix` 后，规则将只对名称以 `prefix` 开头的存储资源生效。
       * 前缀。
       * @example "prefix"
       */
      Prefix?: string;
    }[];
    StorageVersioning?: number;
    /**
     * 该服务的图片模板固定前缀。
     * @example "tplv-fc*****cf-"
     */
    TemplatePrefix: string;
    /**
     * 是否开启覆盖上传，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    UploadOverwrite?: boolean;
    /**
     * 绑定的点播空间信息
     * @example "-"
     */
    VodSpace?: {
      /**
       * 点播空间存储桶名称
       * @example "tos-cn-v-7**1"
       */
      Bucket: string;
      /**
       * 空间所在地区
       * @example "cn-north-1"
       */
      Region: string;
      /**
       * 点播空间名
       * @example "test1	"
       */
      SpaceName: string;
    };
  };
}

export interface GetImageServiceSubscriptionQuery {
  /**
   * 附加组件ID，获取指定附加组件的开通情况。默认返回ImageX服务开通情况
   * @example "xxxx"
   */
  AddOnId?: string;
  /**
   * 附加组件英文标识，获取指定附加组件的开通情况。默认返回ImageX服务开通情况。
   * @example "enhance"
   */
  AddOnKey?: string;
  /**
   * 附加组件类型，取值AI获取服务端智能处理开通情况。默认返回ImageX服务开通情况
   * @example "AI"
   */
  AddOnType?: string;
}

export interface GetImageServiceSubscriptionRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageServiceSubscription"
     */
    Action: string;
    Error?: {
      /**
       * 错误码
       * @example "{ErrorCode}"
       */
      Code: string;
      /**
       * 错误信息
       * @example "{ErrorMessage}"
       */
      Message: string;
    };
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "20201203200011010008061205150A7CC4"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result: {
    /**
     * 账号 ID。
     * 账号ID
     * @example "2000000409"
     */
    AccountId: string;
    /**
     * 生效开始时间，日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
     * 生效开始时间
     * @example "2020-01-17T14:26:18+08:00"
     */
    BeginTime: string;
    /**
     * 使用状态，取值如下所示：
     * * 0：未运行
     * * 1：运行中
     * * 2：创建中
     * * 3：更配中
     * * 4：续费中
     * * 5：退订中
     * 0 未运行 1 运行中 2 创建中 3 更配中 4 续费中 5 退订中
     */
    BusinessStatus: number;
    /**
     * 购买的商品配置，如`imagex.monthly.bandwidth`表示按月结算的带宽计费方式。
     * 购买的商品配置
     * @example "imagex.monthly.bandwidth"
     */
    Configuration: string;
    /**
     * 生效结束时间，日期格式按照`ISO8601`表示法，格式为：`YYYY-MM-DDThh:mm:ss±hh:mm`，比如`2019-06-02T00:00:00+08:00`。
     * 生效结束时间
     * @example "2200-01-01T00:00:00+08:00"
     */
    ExpiredTime: string;
    /**
     * 开通后的实例 ID。
     * 开通后的实例ID
     * @example "ImageX6623822620858736*"
     */
    InstanceId: string;
    /**
     * 实例类型，取值如下所示：
     * * 1：正式
     * * 2：试用
     * 实例类型：1：正式，2：试用
     * @example 2
     */
    InstanceType: number;
    /**
     * 购买的商品，仅返回参数`imagex`。
     * 购买的商品
     * @example "imagex"
     */
    Product: string;
    /**
     * 实例状态，取值如下所示：
     * * 0：创建中
     * * 1：运行中
     * * 2：创建失败
     * * 3：已退订
     * * 4：到期关停
     * * 5：到期回收
     * 实例状态：0 创建中；1 运行中；2 创建失败；3 已退订；4 到期关停；5 到期回收
     * @example 1
     */
    Status: number;
  };
}

export interface GetImageSettingRuleHistoryQuery {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "19**20"
   */
  AppId: string;
  /**
   * 分页查询时，显示的每页数据的最大条数。取值范围为 [1,100]，默认值为 10。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移量，用于控制分页查询返回结果的起始位置，以便对数据进行分页展示和浏览。默认值为 0。
   * :::tip
   * 例如，指定分页条数 Limit = 10，分页偏移量 Offset = 10，表示从查询结果的第 11 条记录开始返回数据，共展示 10 条数据。
   * :::
   * @example 0
   */
  Offset?: number;
  /**
   * 配置项 ID，您可以通过[调用获取配置项列表](https://www.volcengine.com/docs/508/1324617)的方式获取所需的配置项 ID。
   * @example "S9**2h"
   */
  SettingId: string;
}

export interface GetImageSettingRuleHistoryRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 修改记录列表
     * @example "-"
     */
    Records: {
      /**
       * 修改时间，即修改规则的服务器当地时间。
       * @example "2020-12-06T06:21:57Z"
       */
      ModifiedAt: string;
      /**
       * 修改人，即修改规则的当前账号。
       * @example "owner"
       */
      Modifier: string;
      /**
       * 修改信息，如：新增规则、删除规则、调整优先级。
       * @example "删除规则: test"
       */
      ModifyMsg: string;
      /**
       * 新规则内容
       * @example "-"
       */
      NewInfo: {
        /**
         * 规则配置信息，即匹配条件。
         * @example "true"
         */
        Content: string;
        /**
         * 规则配置值，即配置内容。
         * 类型由对应配置项类型决定，此处是为了方便生成 SDK
         * @example "3"
         */
        Value: Record<string, unknown>;
      };
      /**
       * 旧规则内容
       * @example "-"
       */
      OldInfo: {
        /**
         * 规则配置信息，即匹配条件。
         * @example "true"
         */
        Content: string;
        /**
         * 规则配置值，即配置内容。
         * 类型由对应配置项类型决定，此处是为了方便生成 SDK
         * @example "1"
         */
        Value: Record<string, unknown>;
      };
    }[];
    /**
     * 总记录条数
     * @example 1
     */
    Total: number;
  };
}

export interface GetImageSettingRulesQuery {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "60**18"
   */
  AppId: string;
  /**
   * 配置项 ID，您可以通过[调用获取配置项列表](https://www.volcengine.com/docs/508/1324617)的方式获取所需的配置项 ID。
   * @example "S9**od"
   */
  SettingId: string;
}

export interface GetImageSettingRulesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 应用 ID
     * @example "56**80"
     */
    AppId: string;
    /**
     * 应用地域
     * @example "cn"
     */
    AppRegion: string;
    /**
     * 所属组件，取值如下所示
     *
     * - `HEIF`：表示 HEIF 编解码库
     * - `SR`：表示客户端加载 SDK
     * @example "SR"
     */
    Category: string;
    /**
     * 规则所属配置项备注信息
     * @example "客户端错误日志上报采样率"
     */
    Comment: string;
    /**
     * 规则所属配置项默认值，仅当`Type`值不是`parent`时有意义。该值的类型有 `Type` 决定。
     * 类型由Type决定，此处改为object是为了方便生成 SDK
     * @example "1"
     */
    DefaultValue: Record<string, unknown>;
    /**
     * 规则所属配置项名称
     * @example "magex_load_monitor_error"
     */
    Name: string;
    /**
     * 父节点 ID，若本身为父节点则该值为空。
     * @example "S6**52"
     */
    ParentId: string;
    /**
     * 规则列表
     * @example "-"
     */
    Rules: {
      /**
       * 规则条件
       * @example "-"
       */
      Cond?: {
        /**
         * 条件列表
         * @example "[{"Key": "OS","Op": "==","Value": "iOS"}]"
         */
        Conds?: {
          /**
           * 过滤维度。
           * @example "OS"
           */
          Key?: string;
          /**
           * 操作符。支持取值：==、!=、>、>=、<、<=、in
           * @example "=="
           */
          Op?: string;
          /**
           * 配置值。`Op` 为 `in` 时，为 `Array of String` 类型，取值为其他时为 `String` 类型。
           * 类型由Op决定，此处改为object是为了方便生成 SDK
           * @example "iOS"
           */
          Value?: Record<string, unknown>;
        }[];
        /**
         * 匹配条件，取值如下所示：
         * - `AND`：表示与
         * - `OR`：表示或
         * @example "AND"
         */
        Type?: string;
      };
      /**
       * 规则配置信息
       * @example "( (app_version == '12') ) "
       */
      Content: string;
      /**
       * 规则创建账号
       * @example "root/hs2021"
       */
      Creator: string;
      /**
       * 规则名称
       * @example "aaa"
       */
      Name: string;
      /**
       * 规则优先级，值越小优先级越高。
       * @example 1
       */
      Priority: number;
      /**
       * 规则 ID
       * @example "R3**4e"
       */
      RuleId: string;
      /**
       * 对应配置值，该值的类型由对应配置项决定。
       * 类型由配置项决定，此处改为object是为了方便生成 SDK
       * @example "0"
       */
      Value: Record<string, unknown>;
    }[];
    /**
     * 配置项 ID
     * @example "Sd**a0"
     */
    SettingId: string;
    /**
     * 配置项状态。当前仅支持取值为 `0`，表示状态正常。
     * @example 0
     */
    Status: number;
    /**
     * 配置项类型，取值如下所示：
     *
     * - `sample`：采样率类型
     * - `integer`：整数类型
     * - `float`：浮点数类型
     * - `string`：字符串类型
     * - `strarr`：字符串数组类型
     * - `bool`：布尔值类型
     * - `parent`：父节点类型
     * - `object`：对象类型
     * @example "sample"
     */
    Type: string;
    /**
     * 修改时间，修改时的服务器当地时间。
     * @example "2022-06-20 17:06:14"
     */
    UpdateAt: string;
    /**
     * 取值限制范围。仅当`Type` 取值为`integer/float/sample /object`时有效。`Type` 取值为 `object` 时，表示 `ValueType` 的取值范围。
     *
     *
     * @example "-"
     */
    ValueRange: {
      /**
       * 取值下限，该值的类型由 `Type` 决定。
       * 类型由Type决定，此处改为object是为了方便生成 SDK
       */
      Lower?: Record<string, unknown>;
      /**
       * 取值上限，该值的类型由 `Type` 决定。
       * 类型由Type决定，此处改为object是为了方便生成 SDK
       */
      Upper?: Record<string, unknown>;
    };
    /**
     * 仅当`Type`取值为`object`时有值，表示 value 类型，key 类型统一为 String。
     * @example "-"
     */
    ValueType: string;
  };
}

export interface GetImageSettingsQuery {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "56**80"
   */
  AppId: string;
  /**
   * 所属组件，缺省情况下表示获取基础配置列表。
   *
   * - 取值为`HEIF`时，表示获取 HEIF 解码库下配置列表；
   * - 取值为`SR`时，表示获取客户端下配置列表。
   * @example "SR"
   */
  Category?: string;
}

export interface GetImageSettingsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 配置项列表。
     * @example "-"
     */
    Settings: {
      /**
       * 所属组件，即请求时的组件名称。
       * @example "HEIF"
       */
      Category: string;
      /**
       *  配置子节点列表，仅当`Type`取值为`parent`时有意义。其参数结构与 [Settings](#settings) 相同。
       * @example "-"
       */
      ChildSettings: Record<string, unknown>[];
      /**
       * 备注信息
       * @example "只有授权码生效期内才可支持云控开启/关闭heif解码能力。1：开启，0：关闭"
       */
      Comment: string;
      /**
       * `Type` 的默认值，仅当`Type`值不是`parent`时有意义。该值的类型实际由 `Type` 决定，例如当`Type`为整数类型时，默认值为 0。
       * 类型由Type决定，此处改为object是为了方便生成 SDK
       * @example "1"
       */
      DefaultValue: Record<string, unknown>;
      /**
       * 配置项名称
       * @example "heif_decode"
       */
      Name: string;
      /**
       * 父节点 ID，若本身为父节点则该值为空。
       * @example "S2**0a"
       */
      ParentId: string;
      /**
       * 配置项 ID
       * @example "Sb**6e"
       */
      SettingId: string;
      /**
       * 配置项状态。当前仅支持取值为 `0`，表示状态正常。
       * @example 0
       */
      Status: number;
      /**
       * 配置项类型，取值如下所示：
       *
       * - `sample`：采样率类型
       * - `integer`：整数类型
       * - `float`：浮点数类型
       * - `string`：字符串类型
       * - `strarr`：字符串数组类型
       * - `bool`：布尔值类型
       * - `parent`：父节点类型
       * - `object`：对象类型
       * @example "integer"
       */
      Type: string;
      /**
       * 配置修改时间，修改时的服务器当地时间。
       * @example "2023-01-09 20:06:05"
       */
      UpdateAt: string;
      /**
       * 取值限制范围。仅当`Type` 取值为`integer/float/sample/object`时有效。`Type`取值为`object`时，表示`ValueType`的取值范围。
       * @example "-"
       */
      ValueRange: {
        /**
         * 取值下限
         * 类型由Type决定，此处改为object是为了方便生成 SDK
         * @example "0"
         */
        Lower: Record<string, unknown>;
        /**
         * 取值上限
         * 类型由Type决定，此处改为object是为了方便生成 SDK
         * @example "1"
         */
        Upper: Record<string, unknown>;
      };
      /**
       * 仅当 `Type` 取值为 `object` 时有值，表示 value 类型，key 类型统一为 String。
       * @example "float"
       */
      ValueType: string;
    }[];
  };
}

/** 描述 */
export interface GetImageSmartCropResultBody {
  /**
   * 图片裁剪后的高度设置，单位为 px。当图片小于设置的宽高时，将不被裁剪。
   * @example 100
   */
  Height?: number;
  /**
   * 降级策略，即当智能裁剪失败时的操作，默认居中裁剪。<br>支持取值如下：
   * * center：居中裁剪，默认裁剪中间图片；
   * * top：居上裁剪，默认裁剪上方图片；
   * * fglass：高斯模糊，将按设置宽高自动适配图片，结果图多出原图部分以原图背景高斯模糊效果填充。
   * @example "top"
   */
  Policy?: string;
  /**
   * 裁剪场景 (normal,cartoon)，默认普通人脸裁剪。支持取值如下：
   * * normal：普通人脸裁剪；
   * * cartoon：动漫人脸裁剪。
   * :::tip
   * 当前仅支持了智能人脸裁剪能力，其他裁剪能力在持续开放中，敬请期待。
   * :::
   * @example "cartoon"
   */
  Scene?: string;
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "test"
   */
  ServiceId: string;
  /**
   * 当`Policy`取值为`fglass`时的高斯模糊参数，取值为大于 0 的整数，值越大越模糊。
   * @format float
   * @example 1
   */
  Sigma?: number;
  /**
   * 待处理原图的存储 URI 和 URL（公网可访问的 URL）。
   * @example "bkt/uri"
   */
  StoreUri: string;
  /**
   * 图片裁剪后的宽度设置，单位为 px。当图片小于设置的宽高时，将不被裁剪。
   * @example 100
   */
  Width?: number;
}

export interface GetImageSmartCropResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 是否降级。支持取值如下：
     * * true：降级；
     * * flase：未降级。
     * @example "true"
     */
    Demotioned: boolean;
    /**
     * 结果图存储 URI。
     * @example "tos-cn-i-s7**6t/6a***f2"
     */
    ResUri: string;
  };
}

export interface GetImageStorageFilesQuery {
  /**
   * 指定目录分隔符，默认值为空。所有文件名字包含指定的前缀，第一次出现 `Delimiter` 字符之间的文件作为一组元素（即 `CommonPrefixe`）。
   * @example "/"
   */
  Delimiter?: string;
  /**
   * 一次查询列出的文件信息条目数，取值范围为[1,1000]。默认值为 10。
   * @format int64
   * @example 1000
   */
  Limit?: number;
  /**
   * 上一次列举返回的位置标记，作为本次列举的起点信息。默认值为空。
   * @example "eyJjIjowLCJrIjoiMDAwMDAyLmljbyJ9"
   */
  Marker?: string;
  /**
   * 指定需要查询文件的前缀，只有资源名匹配该前缀的文件会被列出。缺省时将返回所有文件信息。
   *
   * 例如，一个存储服务中有三个文件，分别为 Example/imagex.png、Example/mov/a.avis 和 Example/mov/b.avis。若指定 `Prefix` 取值 `Example/`且指定 `Delimiter` 取值 `/`：则返回 Example/imagex.png，并在 `CommonPrefix` 里返回 Example/mov/。
   * @example "Example/"
   */
  Prefix?: string;
  /**
   * 服务 ID。
   *
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**0o"
   */
  ServiceId: string;
}

export interface GetImageStorageFilesRes {
  ResponseMetadata: {
    /** @example "GetImageStorageFiles" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "202306041104200100100232280022D31" */
    RequestId: string;
    /** @example "ImageX" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /**
     * 返回目录名称的数组集合。
     * @example "["Example/mov/"]"
     */
    CommonPrefix: string[];
    /**
     * 是否还有更多文件，取值如下所示：
     *
     * - `true`：是，还有文件信息未列出
     * - `false`：否，已列出所有文件信息
     * @example "true"
     */
    HasMore: boolean;
    /**
     * 文件列表
     *
     * @example "-"
     */
    Items: {
      /**
       * 文件大小，单位为 byte。
       * @example 837
       */
      FileSize?: number;
      /**
       * 文件存储 Key
       * @example "Example/imagex.png"
       */
      Key?: string;
      /**
       * 文件最后修改时间，RFC 时间格式。
       * @example "Fri, 01 Sep 2023 06:52:37 GMT"
       */
      LastModified?: string;
      /**
       * 文件的存储类型，取值如下所示：
       * - `STANDARD`：标准存储
       * - `IA`：低频存储
       * - `ARCHIVE`：归档存储
       * - `COLD_ARCHIVE`：冷归档存储
       * @example "STANDARD"
       */
      StorageClass?: string;
      /**
       * 文件存储 URI
       * @example "tos-cn-i-5s**fo/Example/imagex.png"
       */
      StoreUri?: string;
    }[];
    /**
     * `HasMore` 取值 `true` 时，即本次查询还有未列举到的文件信息时。`Marker` 作为起始条目位置标记，您需要在下一次列举时传入该值。
     * @example "eyJjIjowLCJrIjoiMDAwMDAyLmljbyJ9"
     */
    Marker: string;
  };
}

export interface GetImageStyleDetailQuery {
  /**
   * 样式 ID。
   * @example "62ce6581a1520596600b786*"
   */
  StyleId: string;
}

export interface GetImageStyleDetailRes {
  ResponseMetadata: {
    /** @example "GetImageStyleDetail" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "2022071517562001021219713105A6AE83" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    Style: {
      background: {
        /** @example "#FFFFFF" */
        fill: string;
        /** @example "tos-cn-i-nnsl1jf0mq/mofang/a566342de9c0*.jpg" */
        fillSrc: string;
        viewpoint: {
          /** @example 1 */
          height: number;
          /** @example 0.31640625 */
          width: number;
          /** @example 0.341796875 */
          x: number;
          /** @example 0 */
          y: number;
        };
      };
      elements: {
        /** @example 0 */
        angle: number;
        attr: {
          /** @example false */
          adapt?: boolean;
          /** @example false */
          bold?: boolean;
          border?: {
            /** @example "#000000" */
            color: string;
            /** @example 0 */
            dash: number;
            /** @example 0 */
            paddingBottom: number;
            /** @example 0 */
            paddingLeft: number;
            /** @example 0 */
            paddingRight: number;
            /** @example 0 */
            paddingTop: number;
            /** @example 0 */
            radius: number;
            /** @example 0 */
            weight: number;
          };
          fillptn?: {
            /** @example "" */
            bgColor?: string;
            /** @example "color" */
            name: string;
            param: {
              /** @example "#000000" */
              color: string;
            };
            /** @example 1 */
            ptn?: number;
            /** @example 5 */
            viewLoc?: number;
            viewpoint?: {
              /** @example 1 */
              height: number;
              /** @example 1 */
              width: number;
              /** @example 0 */
              x: number;
              /** @example 0 */
              y: number;
            };
          };
          filter?: string[];
          /** @example "SourceHanSans-Regular.ttf" */
          font?: string;
          /** @example false */
          fontAdapt?: boolean;
          /** @example 32 */
          fontSize?: number;
          /** @example 1.3 */
          lineSpace?: number;
          /** @example false */
          linethrough?: boolean;
          /** @example false */
          oblique?: boolean;
          /** @example 1 */
          textAlign?: number;
          /** @example 0 */
          textAlignH?: number;
          /** @example 0 */
          type: number;
          /** @example false */
          underline?: boolean;
          viewpoint?: {
            /** @example 1 */
            height: number;
            /** @example 1 */
            width: number;
            /** @example 0 */
            x: number;
            /** @example 0 */
            y: number;
          };
          /** @example 0 */
          wordSpace?: number;
          /** @example 0 */
          writingMode?: number;
        };
        /** @example "tos-cn-i-ldojp2yol9/mofang/779a640e6f743ecc*.jpeg" */
        content: string;
        /** @example false */
        flipX: boolean;
        /** @example false */
        flipY: boolean;
        /** @example 560 */
        height: number;
        /** @example "el181f63c9494*" */
        id: string;
        /** @example 372 */
        left: number;
        /** @example "图片1" */
        name: string;
        /** @example 100 */
        opacity: number;
        /** @example 587 */
        top: number;
        /** @example "image" */
        type: string;
        /** @example 320 */
        width: number;
      }[];
      /** @example 1920 */
      height: number;
      /** @example "62ce6581a1520596600b786*" */
      id: string;
      /** @example "猫" */
      name: string;
      output: {
        /** @example "WEBP" */
        format: string;
        /** @example 0 */
        quality: number;
      };
      /** @example "nnsl1jf0m*" */
      service: string;
      /** @example "px" */
      unit: string;
      /** @example 1080 */
      width: number;
    };
  };
}

export interface GetImageStyleResultBody {
  /**
   * 渲染结果图的编码格式，默认值为 webp。取值如下所示：
   * - jpeg
   * - webp
   * - png
   * - heic
   * @example "jpeg"
   */
  OutputFormat?: string;
  /**
   * 渲染结果图的编码质量。默认为 75，取值范围为 [1,100]，值越大，结果图的质量越高。
   * @example 75
   */
  OutputQuality?: number;
  /**
   * 样式中的动态要素和要素取值。格式为 `"Key":"Value"`，例如，`"el17fbb3a2134*":"Hello,World",`
   * - Key：表示要素 ID，String 类型。获取方式请参见[如何获取要素 ID](https://www.volcengine.com/docs/508/105396#如何获取创意魔方样式中的动态要素-id？)；
   * - Value：表示要素的取值，String 类型。需要您根据实际需求自定义，例如，自定义图片地址、文本及二维码等内容。
   * @example "-"
   */
  Params?: Record<string, string>;
  /**
   * 图片渲染所用样式的样式 ID。获取方法请参见[如何获取样式 ID](https://www.volcengine.com/docs/508/105396#如何获取创意魔方的样式-id？)。
   * @example "619b6dec3a997f01e7e263e*"
   */
  StyleId: string;
  /**
   * 样式背景，结构请参考[样式定义](https://www.volcengine.com/docs/508/127402#%E6%A0%B7%E5%BC%8F%E5%AE%9A%E4%B9%89)。<br>此参数不为空则使用自定义参数内容替换样式定义中的 [background](https://www.volcengine.com/docs/508/127402#background) 属性值。
   * @example "-"
   */
  background?: Record<string, unknown>;
  /**
   * 要素属性，结构请参考[样式定义](https://www.volcengine.com/docs/508/127402#%E6%A0%B7%E5%BC%8F%E5%AE%9A%E4%B9%89)。<br>此参数不为空则使用自定义参数内容替换样式定义中对应 [elements](https://www.volcengine.com/docs/508/127402#____elements) 的相关属性值。
   * :::tip
   * - 要素类型不允许更改；
   * - 若`elements`和`params`两个参数同时指定了某个要素的内容，则以`elements`中指定的为准。
   * :::
   * @example "-"
   */
  elements: Record<string, unknown>[];
}

export interface GetImageStyleResultQuery {
  /**
   * 图片渲染所用样式关联的服务的 ID，用于计量计费和渲染结果的存储。获取方式请参见[如何获取调用参数](https://www.volcengine.com/docs/508/105396)。
   * @example "7k**1k"
   */
  ServiceId: string;
}

export interface GetImageStyleResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetImageStyleResult"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "20220322174114010204055149180006F0"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 渲染详情
     * @example "-"
     */
    RenderDetail: {
      /**
       * 渲染失败的要素 ID
       * @example "820***2170"
       */
      Element: string;
      /**
       * 渲染失败的原因
       * @example "xxxx"
       */
      ErrMsg: string;
    }[];
    /**
     * 渲染结果图的 URI
     * @example "tos-cn-i-example/86d0e****"
     */
    ResUri: string;
  };
}

export interface GetImageStylesQuery {
  /**
   * 分页返回条数，取值范围为[0,100]，默认 10 条。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移，默认 0，取值为 1 时，表示跳过一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 需要返回的样式列表标识。
   * * 返回的样式名称、样式 ID 包含了该值的样式列表。
   * * 返回的样式宽度或样式高度为该值的样式列表。
   * @example "pattern"
   */
  SearchPtn?: string;
  /**
   * 样式类型。取值 user 表示用户样式。
   * @example "user"
   */
  Type: string;
}

/**
 * 尺寸单位。当前仅支持取值px表示像素。
 * @example "px"
 */
export enum GetImageStylesResUnitEnum {
  Px = "px",
}

export interface GetImageStylesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 当前分页样式数据
     * @example "-"
     */
    Styles: {
      /**
       * 样式创建时间
       * @example "2023-07-18 21:19:37"
       */
      CreateAt: string;
      /** 样式高 */
      Height: number;
      /** 样式ID */
      Id: string;
      /**
       * 样式名称
       * @example "text-test"
       */
      Name: string;
      /**
       * 样式渲染结果图的TOS URI
       * @example "tos-cn-i-y8**s5/c63a3b45c9ff9**eec20afe8c86be"
       */
      ResUri: string;
      /**
       * 样式绑定的服务ID
       * @example "y8c**6us5"
       */
      Service: string;
      /**
       * 尺寸单位。当前仅支持取值px表示像素。
       * @example "px"
       */
      Unit: GetImageStylesResUnitEnum;
      /**
       * 样式更新时间
       * @example "2023-07-18 22:08:59"
       */
      UpdateAt: string;
      /** 样式宽 */
      Width: number;
    }[];
    /**
     * 总样式个数。
     * @example 1
     */
    Total: number;
  };
}

/** 描述 */
export interface GetImageSuperResolutionResultBody {
  /**
   * 超分倍率，默认值为`2`，支持取值为：`2`、`3`、`4`、`5`、`6`、`7`、`8`。
   * @format float
   * @example 2
   */
  Multiple?: number;
  /**
   * 用于存储结果图和计量计费的服务 ID。
   *
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "s7***6t"
   */
  ServiceId: string;
  /**
   * 待处理原图的存储 URI 或访问 URL（可公网访问）。您可在控制台资源管理获取图片的[存储 URI](https://www.volcengine.com/docs/508/1205057) 以及[访问 URL](https://www.volcengine.com/docs/508/1205054)。
   * @example "tos-cn-i-s7**19/example"
   */
  StoreUri: string;
}

export interface GetImageSuperResolutionResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 结果图 URI。您可使用结果图 URI（即 `ResUri`）[拼接完整访问 URL](https://www.volcengine.com/docs/508/105405#预览返回的结果图) 后，在浏览器查看图像超分辨率效果。
     * @example "tos-cn-i-s7***6t/6a9523aac283232f13e471ac8ea266f2"
     */
    ResUri: string;
  };
}

export interface GetImageTemplateQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
  /**
   * 模板名称。
   * * 您可以通过调用[获取服务下所有模板](https://www.volcengine.com/docs/508/9386)获取所需的模板名称。
   * @example "TemplateName1"
   */
  TemplateName: string;
}

export interface GetImageTemplateRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: {
    /**
     * 指定图像自适应配置。
     * 图像格式自适应配置
     */
    AdaptiveFmt?: {
      /** 动图自适应，可选"webp"/"heic"/"avif"/"dynamic" */
      Animated: string;
      /** 静图自适应，可选"webp"/"heic"/"avif"/"dynamic" */
      Static: string;
    };
    /**
     * 视频转动图配置。
     * 视频转动图配置
     */
    Animation?: {
      /** 降级类型：  image：抽取一帧降级返回 video：直接返回原视频降级 */
      DemotionType: string;
      /** 动图时长(ms) */
      Duration: number;
      /** 帧率，1秒X帧 */
      FramePerSecond: number;
      /** X秒1帧 */
      SecondPerFrame: number;
      /** 抽帧策略： fps：frame per second，1秒X帧 spf：second per frame，X秒1帧 key：抽取关键帧 */
      SelectFrameMode: string;
      /** 动图起始时间戳(ms) */
      StartTime: number;
      /** 同步等待时长(s)，超时未完成则根据DemotionType降级 */
      WaitTime: number;
    };
    /**
     * 模板计划使用的降级格式，仅对 heic 静图有效。
     * 模板计划使用的降级格式，仅对heic静图有效
     */
    DemotionFormat: string;
    /** 是否直接更新模板。如果为true，已有的线上模板会同步更新，直接生效；如果为false，会新增一个模板，已有模板不受影响。 */
    DoUpdate?: boolean;
    /**
     * 对图片的编辑操作。
     * 对图片的编辑操作
     */
    Filters?: {
      /**
       * 编辑操作的名称，具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。
       * 编辑操作的名称
       */
      Name: string;
      /**
       * 编辑操作的参数，具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。
       * 编辑操作的参数
       */
      Param: Record<string, unknown>;
    }[];
    /**
     * 对图片编码使用的质量参数，取值范围为 [1,100]，默认为 75。
     * 对图片编码使用的质量参数，默认为0
     */
    OuputQuality?: number;
    /**
     * 编码自定义参数，键值均为 String。
     * * 取值`png.use_quant`表示是否开启 png quant 压缩，取值为`true`表示开启，取值为`false`表示关闭；
     * * 取值`heic.sync`表示使用 heic 同步编码，取值为`true`表示同步；
     * * 取值`heic.timeout`表示 heic 同步编码的超时时间，比如 20。
     * 用于图片服务输出时的图片编码
     */
    OutputExtra?: {
      /** 是否带透明通道编码，"false"/"true" */
      "heic.alpha.reserve": string;
      /** heic位深，"8"/"10" */
      "heic.encode.depth": string;
      /** heic格式是否开启ROI编码"true"/"false" */
      "heic.roi": string;
      /** heic缩略图比例 */
      "heic.thumb.ratio": string;
      /** 是否采用jpeg渐进编码格式,取值为"true" / "false" */
      "jpeg.progressive": string;
      /** 是否压缩颜色空间,取值为"true" / "false" */
      "png.use_quant": string;
    };
    /**
     * 该模板计划使用的输出格式.
     * * 取值为`image`，表示输出原格式。
     * * 支持输出的静图格式：png、jpeg、heic、avif、webp。
     * * 支持输出的动图格式：awebp、heif、avis。
     * 该模板计划使用的输出格式
     */
    OutputFormat: string;
    /**
     * 图片模板的参数列表，URL 中下发参数的顺序需要跟列表中的保持一致。
     * 图片模板使用的参数列表，URL中下发参数的顺序需要跟列表中的保持一致
     */
    Parameters?: string[];
    /**
     * 默认为空，使用绝对质量；传relative，使用相对质量，原图为JPEG有效
     * 绝对质量/相对质量
     */
    QualityMode: string;
    /**
     * URL 的失效期，为 Unix 时间戳。
     * URL的失效期，为Unix时间戳，一般配置为通过模板参数下发
     */
    ReqDeadline?: string;
    /** 服务id */
    ServiceId: string;
    /**
     * 视频截帧配置。
     * 视频截帧配置
     */
    Snapshot?: {
      /** 截图的时间戳(ms) */
      TimeOffsetMs: string;
      /** 截图类型，可选"default"/"offset"，智能截图和指定时间戳截图 */
      Type: string;
    };
    /**
     * 是否同步处理，仅对 heic 图有效。
     * 是否同步处理，仅对heic图有效
     */
    Sync: string;
    /**
     * 模板名称。
     * 模板名称，必须使用该服务的图片模板固定前缀，具体参考GetImageService接口的返回参数TemplatePrefix。模板名称能包含的字符正则集合为[a-zA-Z0-9_-]
     */
    TemplateName: string;
    /**
     * 模板是否开启鉴权。
     * * 取值为`true`，表示开启鉴权。
     * * 取值为`false`，表示关闭鉴权。
     * 是否开启鉴权，一般当通过模板参数下发敏感信息时，比如文字水印内容、URL失效期，需要对图片URL鉴权保护，防止内容被篡改
     */
    WithSig?: boolean;
  };
}

export interface GetImageTranscodeDetailsQuery {
  /**
   * 任务提交的截止 Unix 时间戳
   * `StartTime`与`EndTime`时间间隔最大不超过 7 天。
   * @format int64
   * @example 1685913599
   */
  EndTime: number;
  /**
   * 分页条数，取值范围为(0, 100]。
   * @format int64
   * @example 10
   */
  Limit: number;
  /**
   * 分页偏移量，默认为 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @format int64
   * @example 0
   */
  Offset?: number;
  /**
   * 队列 ID，您可通过调用[GetImageTranscodeQueues](https://www.volcengine.com/docs/508/1107341)获取该账号下全部任务队列 ID。
   * @example "649a9dbc32**064d44cf5b0"
   */
  QueueId: string;
  /**
   * 队列所在地区。默认当前地区为 **cn**。
   * @example "cn"
   */
  Region?: string;
  /**
   * 返回图片 url 或 uri 中包含该值的任务。默认为空，不传则返回所有任务。
   * @example "tos-cn-i-5sq****fo/test"
   */
  SearchPtn?: string;
  /**
   * 任务提交的起始 Unix 时间戳
   * `StartTime`与`EndTime`时间间隔最大不超过 7 天。
   * @format int64
   * @example 1684713599
   */
  StartTime: number;
  /**
   * 执行状态，填入多个时使用英文逗号分隔。取值如下所示：
   *
   * - `Pending`：排队中
   * - `Running`：执行中
   * - `Success`：执行成功
   * - `Fail`：执行失败
   * @example "Pending"
   */
  Status?: string;
  /**
   * 任务 ID，缺省情况下查询指定队列下所有任务详情。您可通过调用 [GetImageTranscodeTasks](https://www.volcengine.com/docs/508/1356555)获取指定队列的全部任务 ID。
   * @example "67174744adc54449623155b9"
   */
  TaskId?: string;
}

export interface GetImageTranscodeDetailsRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: {
    /**
     * 执行任务详情
     * @example "-"
     */
    ExecInfo: {
      /**
       * 结束时间
       * @example "2023-06-27 15:44:11"
       */
      EndAt?: string;
      /**
       * 条目 ID
       * @example "649a9332***80e9cc0a0ec"
       */
      EntryId?: string;
      /**
       * 执行输入
       * @example "-"
       */
      ExecInput?: {
        /**
         * 原图图片的 URL 或存储 URI。
         * @example "tos-cn-i-5sq****fo/2e39b35b98524100ae12b2ae07283cb2"
         */
        Image: string;
        /**
         * 转码模板
         * @example "tplv-5sq****fo-38.png"
         */
        Template: string;
      };
      /**
       * 执行输出
       * @example "-"
       */
      ExecOutput?: {
        /**
         * 转码失败[错误码](https://www.volcengine.com/docs/508/1104726#%E9%94%99%E8%AF%AF%E7%A0%81)。仅当`Status`值为`Fail`时，`ErrCode`有值。
         * @example "615011"
         */
        ErrCode: string;
        /**
         * 转码失败错误信息。仅当`Status`值为`Fail`时，`ErrMsg`有值。
         * @example "解码图片要素失败"
         */
        ErrMsg: string;
        /** 请提供具体的参数名字和类型。 */
        Evals: {
          /** 参数格式。 */
          Format: string;
          /** 请提供具体的参数名字（Index）和类型（string），以便我为您生成参数描述。 */
          Index: number;
          /** 参数名称。 */
          Name: string;
          /** 当前阶段。 */
          Phase: string;
          /** 实例规格。 */
          Size: number;
          /** 参数值。 */
          Value: {
            /** 美学配置。 */
            Aesthetic: number;
            /** 噪声类型。 */
            Noise: number;
            /** 峰值信噪比。 */
            PSNR: number;
            /** 结构相似性指数。 */
            SSIM: number;
            /** 视频多重评估函数。 */
            VMAF: number;
            /** 视频质量评分。 */
            VQScore: number;
          };
        }[];
        /**
         * 转码结果图格式
         * @example "png"
         */
        Format: string;
        /**
         * 转码结果图的存储 URI。仅当`Status`值为`Success`时，`Output`有值。
         * @example "tos-cn-i-5sq****fo/_offtrans__1248x1053_f*8_b*f_png"
         */
        Output: string;
        /**
         * 转码结果图大小，单位为 byte。
         * 尺寸。取值范围为 `[ ]`，单位为，默认值为``。
         * @format int64
         * @example 9800
         */
        Size: number;
      };
      /**
       * 开始时间
       * @example "2023-06-27 15:44:11"
       */
      StartAt?: string;
      /**
       * 执行状态。取值如下所示：
       *
       * - `Pending`：排队中
       * - `Running`：执行中
       * - `Success`：执行成功
       * - `Fail`：执行失败
       * @example "Fail"
       */
      Status?: string;
      /**
       * 提交时间
       * @example "2023-06-27 15:43:46"
       */
      SubmitAt?: string;
    }[];
    /**
     * 总数
     * @format int64
     * @example 2
     */
    Total: number;
  };
}

export interface GetImageTranscodeQueuesQuery {
  /**
   * 分页条数，取值范围为(0,100]。
   * @example 10
   */
  Limit: number;
  /**
   * 分页偏移量，默认为 0。取值为 1 时，表示跳过第一条数据，从第二条数据取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 队列所在地区。默认当前地区。ToB取值枚举：cn、va、sg。
   * @example "cn"
   */
  Region?: string;
  /**
   * 返回队列名称或队列描述中包含该值的队列。默认为空，不传则返回所有队列。
   * @example "offline"
   */
  SearchPtn?: string;
}

/**
 * 队列状态。取值如下所示：
 * - `Pending`：排队中
 * - `Running`：执行中
 * @example "Pending"
 */
export enum GetImageTranscodeQueuesResStatusEnum {
  Pending = "Pending",
  Running = "Running",
}

/**
 * 队列类型。取值如下所示：
 * - `default`：表示账号默认队列，每个账号一个
 * - `user`：表示用户创建队列，个数将有配额限制
 * @example "default"
 */
export enum GetImageTranscodeQueuesResTypeEnum {
  Default = "default",
  User = "user",
}

export interface GetImageTranscodeQueuesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** title */
  Result?: {
    /**
     * 当前分页队列详细信息
     * @example "-"
     */
    Queues: {
      /**
       * 队列回调设置
       * @example "-"
       */
      CallbackConf: {
        /**
         * 业务自定义回调参数，将在回调消息的`callback_args`中透传出去。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/1104726#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
         * @example "product id	"
         */
        Args?: string;
        /**
         * 回调数据格式。取值如下所示：
         *
         * - `XML`
         * - `JSON`
         * @example "JSON"
         */
        DataFormat: string;
        /**
         * 回调 HTTP 请求地址，用于接收转码结果详情。支持使用 https 和 http 协议。
         * Method=MQ时取值rmq:{topic}/{cluster}
         * @example "https://demo.com"
         */
        Endpoint: string;
        /**
         * 回调方式。仅支持取值 HTTP。
         * 枚举值还有 MQ
         * @example "HTTP"
         */
        Method: string;
      };
      /**
       * 队列创建时间
       * @example "2023-02-02 14:27:47"
       */
      CreateAt: string;
      /**
       * 队列描述
       * @example "离线转码"
       */
      Desc: string;
      /**
       * 是否启用回调，取值如下所示：
       *
       * - `true`：启用
       * - `false`：不启用
       * @example "false"
       */
      EnableCallback: boolean;
      /**
       * 队列 ID
       * @example "63db57e36**cce1ffee11bb1"
       */
      Id: string;
      /**
       * 队列名称
       * @example "default"
       */
      Name: string;
      /**
       * 队列状态。取值如下所示：
       * - `Pending`：排队中
       * - `Running`：执行中
       * @example "Pending"
       */
      Status: GetImageTranscodeQueuesResStatusEnum;
      /**
       * 队列类型。取值如下所示：
       * - `default`：表示账号默认队列，每个账号一个
       * - `user`：表示用户创建队列，个数将有配额限制
       * @example "default"
       */
      Type: GetImageTranscodeQueuesResTypeEnum;
    }[];
    /**
     * 符合条件的队列总数
     * @format int64
     * @example 2
     */
    Total: number;
  };
}

export interface GetImageUpdateFilesQuery {
  /**
   * 分页查询时，显示的每页数据的最大条数。最大值为 100。
   * @example 50
   */
  Limit?: number;
  /**
   * 分页偏移量，用于控制分页查询返回结果的起始位置，以便对数据进行分页展示和浏览。默认值为 0。
   * :::tip
   * 例如，指定分页条数 Limit = 10，分页偏移量 Offset = 10，表示从查询结果的第 11 条记录开始返回数据，共展示 10 条数据。
   * :::
   * @example 0
   */
  Offset?: number;
  /**
   * 需要查询的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
  /**
   * 获取类型，取值如下所示：
   * - `0`：获取刷新 URL 列表
   * - `1`：获取禁用 URL 列表
   * @example 1
   */
  Type?: number;
  /**
   * URL 格式，若指定 URL 格式则仅返回 URL 中包含该字符串的 URL 列表。默认为空，缺省情况下返回所有 URL 列表。
   * @example "pic"
   */
  UrlPattern?: string;
}

export interface GetImageUpdateFilesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 服务 ID。
     * @example "8h**9q"
     */
    ServiceId: string;
    /**
     * 当前存储状态，取值为：正常、未审核、禁用。
     * @example "未审核"
     */
    Status: string;
    /**
     * 符合条件的 URL 总数
     * @example 1
     */
    Total: number;
    /**
     * 符合条件的 URL 列表。
     * @example "-"
     */
    UpdateUrls: {
      /**
       * 图片 URL。
       * @example "domain-xxx/img/bkt/key~tpl:param.format"
       */
      ImageUrl: string;
      /**
       * URL 更新时间，即图像更新时的服务器当地时间。
       * @example "2019-05-27 18:26:09"
       */
      UpdateAt: string;
    }[];
  };
}

export interface GetImageUploadFileQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "uk**ok"
   */
  ServiceId: string;
  /**
   * 文件 Uri。
   * - 您可以在 veImageX 控制台 [资源管理](https://console.volcengine.com/imagex/resource_manage/)页面，在已上传文件的名称列获取资源 Uri。
   * - 您也可以通过 OpenAPI 的方式获取Uri，具体请参考 [GetImageUploadFiles](https://www.volcengine.com/docs/508/9392)。
   * @example "demo.png"
   */
  StoreUri: string;
}

export interface GetImageUploadFileRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /** 是否被禁用 */
    Disabled?: boolean;
    /**
     * 文件字节数。
     * @example 7749
     */
    FileSize?: number;
    /**
     * 文件修改时间，即文件修改时的服务器当地时间。
     * @example "2024-01-21 22:13:57"
     */
    LastModified?: string;
    /**
     * 文件恢复副本的到期时间。仅当文件执行过恢复操作时有值
     * 	文件恢复副本的到期时间。仅当文件执行过恢复操作时有值
     * @example "Wed, 24 Jan 2024 00:00:00 GMT"
     */
    RestoreExpiryDate?: string;
    /** 恢复请求日期。 */
    RestoreRequestDate?: string;
    /** 恢复取回方式 */
    RestoreTier?: string;
    /**
     * 文件是否处于恢复中状态，取值如下所示：
     * - `true`：是
     * - `false`：否
     * 文件是否处于恢复中状态。
     * @example "true"
     */
    Restoring?: boolean;
    /**
     * 服务 ID。
     * @example "h8**0l"
     */
    ServiceId?: string;
    /**
     * 底层存储类型，取值如下所示：
     * - `STANDARD`：标准存储
     * - `IA`：低频存储
     * - `ARCHIVE`：归档存储
     * - `COLD_ARCHIVE`：冷归档存储
     * 底层存储类型。 STANDARD：标准存储 IA：低频存储 ARCHIVE：归档存储 COLD_ARCHIVE：冷归档存储
     * @example "IA"
     */
    StorageClass?: string;
    /**
     * 底层存储的 content-type 值。
     * @example "image/jpeg"
     */
    StorageContentType?: string;
    /**
     * 文件 Uri。
     * @example "demo.png"
     */
    StoreUri?: string;
  };
}

export interface GetImageUploadFilesQuery {
  /**
   * 获取文件个数，最大值为 100。
   * @example 100
   */
  Limit?: number;
  /**
   * 分页标志。
   * @format int64
   * @example 0
   */
  Marker?: number;
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface GetImageUploadFilesRes {
  ResponseMetadata: {
    /** @example "GetImageUploadFiles" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: {
    /** 上传文件信息。 */
    FileObjects: {
      /** 文件字节数。 */
      FileSize?: number;
      /** 文件修改时间，文件修改时的服务器当地时间。 */
      LastModified?: string;
      /**
       * 分页标志。
       * @format int64
       */
      Marker?: number;
      /** 文件 Uri。 */
      StoreUri?: string;
    }[];
    /** 服务 ID。 */
    ServiceId: string;
    /** 当前存储状态，取值为：正常、未审核、禁用。 */
    Status: string;
    /** 是否还有下页数据。 */
    hasMore: boolean;
  };
}

export interface GetImageXQueryAppsQuery {
  /**
   * 数据来源，账号下近 60 天内有数据上报的应用 ID，缺省情况下返回账号对应的全部应用 ID。取值如下所示：
   * * `upload`：上传 1.0 数据。
   * * `cdn`：下行网络数据。
   * * `client`：客户端数据。
   * * `sensible`：感知数据。
   * * `uploadv2`：上传 2.0 数据。
   * * `exceed`：大图监控数据。
   * @example "upload"
   */
  Source?: string;
}

export interface GetImageXQueryAppsRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 火山引擎账号内的所有 App 信息。
     * @example "-"
     */
    Apps: {
      /**
       * 应用 ID。
       * 应用 ID。
       * @example "123"
       */
      AppId: string;
      /**
       * 应用名称。
       * 应用名称。
       * @example "n1"
       */
      AppName: string;
      /**
       * App 所属地区，取值如下所示：
       * * `cn`：国内。
       * * `sg`：新加坡。
       * App 所属地区。  cn：国内。 va：美东。 sg：新加坡。
       * @example "cn"
       */
      AppRegion: string;
      /**
       * App 绑定的 iOS 包名。
       * App 绑定的 iOS 包名。
       * @example "b1"
       */
      BundleId: string;
      /**
       * App 绑定的安卓包名。
       * App 绑定的安卓包名。
       * @example "p1"
       */
      PackageName: string;
    }[];
  };
}

export interface GetImageXQueryDimsQuery {
  /**
   * 应用 ID。默认为空，匹配账号下所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * @example "123"
   */
  Appid?: string;
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web，仅当`Source`为`upload`或`uploadv2`时可传。
   * - `Imp`：小程序，仅当`Source`为`upload`或`uploadv2`时可传。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 数据来源，取值如下所示：
   * * `upload`：上传 1.0 数据。
   * * `cdn`：下行网络数据。
   * * `client`：客户端数据。
   * * `sensible`：感知数据。
   * * `uploadv2`：上传 2.0 数据。
   * * `exceed`：大图监控数据，包含大图样本量和大图明细。
   * * `exceed_all`：大图分布数据。
   * @example "upload"
   */
  Source: string;
}

export interface GetImageXQueryDimsRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 上报数据中出现的维度信息。
     * 上报数据中出现的维度信息。
     * @example "["biz_tag"]"
     */
    Dim: string[];
  };
}

export interface GetImageXQueryRegionsQuery {
  /**
   * 应用 ID。默认为空，匹配账号下所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的应用 ID。
   * :::
   * @example "13"
   */
  Appid?: string;
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web，仅当`Source`为`upload`或`uploadv2`时可传。
   * - `Imp`：小程序，仅当`Source`为`upload`或`uploadv2`时可传。
   * @example "Android"
   */
  OS?: string;
  /**
   * 数据来源，取值如下所示：
   * * `upload`：上传 1.0 数据。
   * * `cdn`：下行网络数据。
   * * `client`：客户端数据。
   * * `uploadv2`：上传 2.0 数据。
   * @example "client"
   */
  Source: string;
}

export interface GetImageXQueryRegionsRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 60 天内上报数据中出现的海外国家，按出现次数降序排列。
     * 60 天内上报数据中出现的海外国家，按出现次数降序排列。
     * @example "-"
     */
    Country: string[];
    /**
     * 60 天内上报数据中出现的国内省份，按出现次数降序排列。
     * 60 天内上报数据中出现的国内省份，按出现次数降序排列。
     * @example "-"
     */
    Province: string[];
  };
}

export interface GetImageXQueryValsQuery {
  /**
   * 应用 ID。默认为空，匹配中账号下所有的 AppID。
   * :::tip
   * 您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/1213042)的方式获取所需的 AppID。
   * :::
   * @example "123"
   */
  Appid?: string;
  /**
   * 自定义维度名称。
   * :::tip
   * 您可以通过调用[获取自定义维度列表](https://www.volcengine.com/docs/508/1213048)获取所需的维度名称。
   * :::
   * @example "biz_tag"
   */
  Dim: string;
  /**
   * 需要过滤的关键词（包含），不传则不过滤关键词。
   * @example "transcode"
   */
  Keyword?: string;
  /**
   * 需要匹配的系统类型。取值如下所示：
   * - 不传或传空字符串：Android+iOS。
   * - `iOS`：iOS。
   * - `Android`：Android。
   * - `WEB`：web+小程序。
   * - `Web`：web，仅当`Source`为`upload`或`uploadv2`时可传。
   * - `Imp`：小程序，仅当`Source`为`upload`或`uploadv2`时可传。
   * @example "iOS"
   */
  OS?: string;
  /**
   * 数据来源。
   * * `upload`：上传 1.0 数据。
   * * `cdn`：下行网络数据。
   * * `client`：客户端数据。
   * * `sensible`：感知数据。
   * * `uploadv2`：上传 2.0 数据。
   * * `exceed`：大图监控数据，包含大图样本量和大图明细。
   * * `exceed_all`：大图分布数据。
   * @example "upload"
   */
  Source: string;
}

export interface GetImageXQueryValsRes {
  ResponseMetadata: {
    /** 请求的接口名，属于请求的公共参数。 */
    Action: string;
    /** 请求的Region，例如：cn-north-1 */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /** 请求的版本号，属于请求的公共参数。 */
    Version: string;
  };
  Result: {
    /**
     * 90 天内上报数据中出现的维度值列表，按上报次数降序排列，仅返回前1000条数据。
     * 90 天内上报数据中出现的维度值列表，按上报次数降序排列，仅返回前1000条数据。
     * @example "["wifi"]"
     */
    DimVal: string[];
  };
}

/** 描述 */
export interface GetLicensePlateDetectionBody {
  /**
   * 原图的存储 URI。
   * @example "tos-i-hr***pr/carplate2.jpeg"
   */
  ImageUri: string;
}

export interface GetLicensePlateDetectionQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "9k**1l"
   */
  ServiceId: string;
}

export interface GetLicensePlateDetectionRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetLicensePlateDetection"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 检测到的车牌位置坐标
     * @example "-"
     */
    Locations: {
      /**
       * 车牌区域左上角 X 轴坐标。
       * @example 360
       */
      X1: number;
      /**
       * 车牌区域右下角 X 轴坐标。
       * @example 513
       */
      X2: number;
      /**
       * 车牌区域左上角 Y 轴坐标。
       * @example 202
       */
      Y1: number;
      /**
       * 车牌区域右下角 Y 轴坐标。
       * @example 286
       */
      Y2: number;
    }[];
  };
}

/** 描述 */
export interface GetPrivateImageTypeBody {
  /**
   * 原图的存储 URI。
   * @example "imagex-common/b9***77"
   */
  ImageUri: string;
  /**
   * 检测内容，默认为`all`，取值如下所示：
   * - face：图片内人脸检测
   * - cloth：图片内衣物检测
   * - all：图片内人脸和衣物均检测
   * @example "all"
   */
  Method?: string;
  /**
   * 衣物置信度，取值范围为[0, 1], 默认值为 0.8，表示高于 0.8 即为有效检测。
   * @format float
   * @example "0.8"
   */
  ThresCloth?: number;
  /**
   * 人脸置信度，取值范围为[0, 1], 默认值为 0.52，表示高于 0.52 即为有效检测。
   * @format float
   * @example "0.52"
   */
  ThresFace?: number;
}

export interface GetPrivateImageTypeQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "89**0j"
   */
  ServiceId: string;
}

export interface GetPrivateImageTypeRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetPrivateImageType"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022082411381601021119922119000D90"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 请求参数`Method`中包含`cloth`则返回该参数，取值如下所示：
     * - 1： 包含衣物
     * - 0： 不包含衣物
     * @example 1
     */
    Cloth: number;
    /**
     * 请求参数`Method`中包含`face`则返回该参数，取值如下所示：
     * - 1： 包含人脸
     * - 0： 不包含人脸
     * @example 1
     */
    Face: number;
  };
}

export interface GetProductAIGCResultBody {
  /**
   * 是否返回最高分生成图及其得分，取值如下所示：
   *
   * - `true`：是，只返回最高分生成图及其得分。
   *
   * - `false`：（默认）否，返回所有生成图及其得分。
   * 根据业务需要，取值为True时，只返回最高分的生成图及其得分，否则返回所有生成图及其得分
   * @example "false"
   */
  ReturnTop1?: boolean;
  /**
   * 智能生成的结果图是否仅生成场景图（仅包含商品主体，不采用文字卖点），取值如下所示：
   * - `true`：（默认）是
   * - `false`：否
   * 默认为True
   * @example "true"
   */
  BackgroundOnly: boolean;
  /**
   * 每次生成的图片数量，取值范围为 [1,4]，默认值为 4。
   * 每次生成的图片数量，[0,4], 默认4
   * @example 4
   */
  BatchSize?: number;
  /**
   * 设置商品放置的安全区中心坐标和宽高。取值需大于等于 `-1`，设为默认值 `-1` 时，商品自动居中，安全区为全图；否则需同时指定区安全区四个参数的值。
   * 设置商品放置的安全区中心坐标和宽高：设为默认值-1时，商品自动居中，安全区为全图；否则用户需同时指定四个参数的值，取值范围大于等于-1
   * @example 0
   */
  CX?: number;
  /**
   * 设置商品放置的安全区中心坐标和宽高。取值需大于等于 `-1`，设为默认值 `-1` 时，商品自动居中，安全区为全图；否则需同时指定区安全区四个参数的值。
   * 设置商品放置的安全区中心坐标和宽高：设为默认值-1时，商品自动居中，安全区为全图；否则用户需同时指定四个参数的值，取值范围大于等于-1
   * @example 0
   */
  CY?: number;
  /**
   * 保留字段，用于传递商品 ID，类目 ID 信息。
   * 额外参数
   * @example "-"
   */
  Extra?: string;
  /** Lora 配置。 */
  LoraConfig?: string;
  /**
   * 是否使用分割处理图片，取值如下所示：
   * - `true`：分隔处理。
   * - `false`：（默认）不分割处理，将从输入图像读取 alpha 通道作为商品图数据。
   * 	:::warning
   * 	指定为 `false` 时，确保通过 `Url` 传入的商品主体图是已经过分割的白底图或透底图。
   * 	:::
   * 使用分割处理图片，False则不做分割，从输入图像读取alpha通道作为mask
   * @example "false"
   */
  NeedSeg?: boolean;
  /**
   * 输入到 AIGC 模型的负向提示词，提示词和 `Scene` 二选一必填。两者均存在时，以 `Scene` 为准。当前仅支持英文，最多不超过 300 个字母。
   *
   * - `indoor wooden table` 场景下可采用的负向提示词为：
   * 	- `top view, empty background, extra connection, wheel, stand, lowres, ugly, bad anatomy, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `flower and leaves`场景下可采用的负向提示词为：
   * 	- `top view, empty background, extra connection, wheel, stand, lowres, ugly, bad anatomy, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `white marble table`场景下可采用的负向提示词为：
   * 	- `top view, empty background, extra connection, wheel, stand, lowres, ugly, bad anatomy, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `outdoor snow scene`场景下可采用的负向提示词为：
   * 	- `op view, empty background, extra connection, wheel, stand, lowres, ugly, bad anatomy, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `supermarket show scene`场景下可采用的负向提示词为：
   * 	- `top view, float things, extra connection, adjunct, appendages, stand, bracket, bad anatomy, text, word, grid, brown, grey, bubble, high saturation, sunlight, sun, stripe, spot, empty background, wheel, lowres, ugly, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `food in kitchen`场景下可采用的负向提示词为
   * 	- `top view, float things, extra connection, adjunct, appendages, stand, bracket, bad anatomy, text, word, grid, brown, grey, bubble, high saturation, sunlight, sun, stripe, spot, empty background, wheel, lowres, ugly, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `sports style`场景下可采用的负向提示词为：
   * 	- `top view, float things, extra connection, adjunct, appendages, stand, bracket, bad anatomy, text, word, grid, brown, grey, bubble, high saturation, sunlight, sun, stripe, spot, empty background, wheel, lowres, ugly, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * - `modern room`场景下可采用的负向提示词为：
   * 	- `top view, float things, extra connection, adjunct, appendages, stand, bracket, bad anatomy, text, word, grid, brown, grey, bubble, high saturation, sunlight, sun, stripe, spot, empty background, wheel, lowres, ugly, bad hands, cropped, worst quality, baby, body, human, brand, bad face`
   * 输入到AIGC模型的正向提示词,长度限制为300个字符内
   * @example "top view, empty background, extra connection, wheel, stand, lowres, ugly, bad anatomy, bad hands, cropped, worst quality, baby, body, human, brand, bad face"
   */
  NegativePrompt?: string;
  /**
   * 场景图输出高度
   * @format int64
   */
  OutputHeight?: number;
  /**
   * 同时指定结果图长和宽的值，单位为 px。取值范围为 [512,1024]。
   *
   * :::tip
   * 结果图是指定`BatchSize`张长宽比为 1:1 的方图。
   * :::
   * 输出图片的长度，512~1024
   * @example 1
   */
  OutputSize: number;
  /**
   * 场景图输出宽度
   * @format int64
   */
  OutputWidth?: number;
  /**
   * 输入到 AIGC 模型的正向提示词，提示词和 `Scene` 二选一必填。两者均存在时，以 `Scene` 为准。当前仅支持英文，最多不超过 300 个字母。
   *
   * - `indoor wooden table` 场景下可采用的正向提示词为：
   * 	- `best quality, front view, standing on a wooden table close to window, some plants in the background, bright sunlight, product photography`
   * - `flower and leaves`场景下可采用的正向提示词为：
   * 	- `best quality, front view, standing on a circular platform, surrounded by flowers and leaves, sunlight from the right, product photography`
   * - `white marble table`场景下可采用的正向提示词为：
   * 	- `best quality, front view, standing on a white marble table in a living room, shallow depth of field, sunlight, shadows,  product photography`
   * - `outdoor snow scene`场景下可采用的正向提示词为：
   * 	- `best quality, front view, standing on a pile of snow outdoors, with sky and mountains in the background, shallow depth of field,  product photography`
   * - `supermarket show scene`场景下可采用的正向提示词为：
   * 	- `on a empty white table, kitchen, close to window, bright background, background blur, bright light, soft lighting, high quality`
   * - `food in kitchen`场景下可采用的正向提示词为
   * 	- `on a empty table,in the kitchen,product picture, bright background, background blur, bright light, soft lighting, high quality`
   * - `sports style`场景下可采用的正向提示词为：
   * 	- `in a stadium, stadium in the background, sports style, product picture , bright light, soft lighting, high quality`
   * - `modern room`场景下可采用的正向提示词为：
   * 	- `in a modern room, fashion style, soft light, high resolution`
   * 输入到AIGC模型的负向提示词,长度限制为300个字符内
   * @example "best quality, front view, standing on a circular platform, surrounded by flowers and leaves, sunlight from the right, product photography"
   */
  PositivePrompt?: string;
  /**
   * 商品比例，即商品图的长宽与 `OutputSize` 指定的结果图长宽的比值上限。默认值为 0.6，取值范围为 (0,1)。取值越小，则商品图在生成的结果图中所占的大小越小。
   * 商品mask长宽与output_size比值的上限，（0，1）
   * @format float
   * @example "0.6"
   */
  ProductRatio?: number;
  /** 商品比例 */
  ProductRatios?: number[][];
  /**
   * 是否返回场景图，取值如下所示：
   * - `true`：（默认）是
   * - `false`：否
   * 是否返回场景图默认为True
   * @example "true"
   */
  ReturnBackgroundImage: boolean;
  /**
   * 设置商品放置的安全区中心坐标和宽高。取值需大于等于 `-1`，设为默认值 `-1` 时，商品自动居中，安全区为全图；否则需同时指定区安全区四个参数的值。
   * 设置商品放置的安全区中心坐标和宽高：设为默认值-1时，商品自动居中，安全区为全图；否则用户需同时指定四个参数的值，取值范围大于等于-1
   * @example 0
   */
  SafeH?: number;
  /**
   * 设置商品放置的安全区中心坐标和宽高。取值需大于等于 `-1`，设为默认值 `-1` 时，商品自动居中，安全区为全图；否则需同时指定区安全区四个参数的值。
   * 设置商品放置的安全区中心坐标和宽高：设为默认值-1时，商品自动居中，安全区为全图；否则用户需同时指定四个参数的值，取值范围大于等于-1
   * @example 0
   */
  SafeW?: number;
  /**
   * 根据所选场景生成结果图，场景支持以下选项：
   *
   * - `indoor wooden table`：室内木桌场景
   *
   * - `flower and leaves`：鲜花绿植场景
   *
   * - `white marble table`：白色大理石场景
   *
   * - `outdoor snow scene`：室外雪景场景
   *
   * - `supermarket show scene`：超市小件商品
   *
   * - `food in kitchen`：食品厨房场景
   *
   * - `sports style`：运动场景
   *
   * - `modern room`：现代室内
   *
   * 提示词和 `Scene` 二选一必填，两者均存在时，以 `Scene` 为准。
   * aigc场景
   * @example "flower and leaves"
   */
  Scene?: string;
  /**
   * 卖点图配置信息。
   * @example "-"
   */
  SellingPointConfig?: {
    /**
     * 指定的商品场景图访问 URL（公网可访问）。若为空，将采用`Scene` 或提示词智能生成的场景图。
     *
     * - 指定场景图时，若指定了任一方式的卖点信息，则在指定场景图渲染卖点文本。
     * - 指定为空时，若指定了任一方式的卖点信息，则在 `Scene` 或提示词生成的场景图渲染卖点文本。
     * 用户指定的场景图
     * @example "http://test.com/demo1.png"
     */
    BackgroundUrl?: string;
    /** 场景图对应图层ID */
    ProdUniqueId?: string;
    /**
     * 与 `ProductDetailImages` 搭配使用，视为方式 2。若同时配置方式 1 与方式 2，则方式 1 优先生效。
     *
     * 商详图中的商品卖点描述，支持中英文，不得超过 430 个字符。
     * 商品卖点描述,不超过430字符
     * @example "精选优质原料，只为用户放心"
     */
    ProductDescription?: string;
    /**
     * 商详图（带有商品描述） URI/URL 列表，最大支持三张。
     * - 指定 URI 时：需满足该图片时指定该服务下存储。
     * - 指定 URL 时：满足公网可访问。
     * 商详图url列表,最大支持三张
     * @example "["tos-cn-serviceid/example.jpg"]"
     */
    ProductDetailImages?: string[];
    /** @format json */
    SellingPointExtractConfig?: {
      /** 选择需要提取的卖点类型、取值：core_sp（核心卖点提取）, short_title(短标题), product_desc_sp(商品信息类卖点)，product_promotion_sp(导购激发类卖点) */
      Category?: string;
      /** 卖点渲染图层索引列表 */
      UniqueIds?: string[];
      /** 卖点信息 */
      Value?: string;
    }[];
    /**
     * 卖点渲染时的图层设置
     * @format json
     */
    SellingPointRenderStyle?: Record<string, Record<string, unknown>>;
    /**
     * 卖点渲染模板，固定取值为 `default`。
     * 卖点渲染模板，使用默认卖点格式使用default，自定义卖点提取类型使用custom
     * @example "default"
     */
    SellingPointRenderTemplate?: string;
    /**
     * 与 `SellingPointRenderTemplate` 搭配使用，视为方式 1。若同时配置方式 1 与方式 2，则方式 1 优先生效。
     *
     * 卖点文本。填写方式为 "maidian1\nmaidian2\nmaidian3"或者"0.mdian1\n1.maindian2\n3.maiian"，支持中英文，每个卖点字符限制 5 个字符。
     * 卖点文本.形如"maidian1\nmaidian2\nmaidian3"或者"0.mdian1\n1.maindian2\n3.maiian".每个卖点不超过5个字.
     * @example "美味\健康"
     */
    SellingPointText?: string;
  };
  /** 打分策略规则。 */
  StrategyRules?: Record<string, Record<string, unknown>>;
  /**
   * 商品主体图的访问 URL（公网可访问）。建议为包含完整商品主体的白底图或透底图，尽量避免复杂背景的影响，以确保最终生成效果的质量。
   * @example "http://test.com/demo.jpeg"
   */
  Url: string;
  /**
   * 是否使用从商品图中提取的描述，取值如下所示：
   *
   * - `true`：（默认）提取原图中商品的描述，和`PositivePrompt`共同作为输入到 AIGC 模型的正向提示词。
   *
   * - `false`：不使用。
   * 取值为True时，使用blip模型提取对商品的描述，和positive_prompt共同作为输入到AIGC模型的正向提示词
   * @example "false"
   */
  UseCaption?: boolean;
  /** 使用默认的背景图 */
  UseDefaultBg?: boolean;
}

export interface GetProductAIGCResultQuery {
  /**
   * 用于存储结果图和计量计费的服务 ID。
   *
   * - 您可以在veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   *
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**7j"
   */
  ServiceId: string;
}

export interface GetProductAIGCResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 商品场景图对应的美学得分，值越高表示图片越符合美学测评。
     * @example "[0.91, 0.83, 0.52, 0.61]"
     */
    AestheticScores?: number[];
    /** AIGC图像评分。 */
    AigcImageScores?: Record<string, number[]>;
    /**
     * 商品场景图 URI 列表，未采用文字卖点。
     * @example "["tos-cn-i-8h**7j/8912623**1276102"]"
     */
    BackgroundImages?: string[];
    ComposedJsons?: Record<string, Record<string, unknown>>[];
    /**
     * 指定的商品信息
     * @example "id:987289220"
     */
    Extra?: string;
    /**
     * 商品场景图与正向提示词的匹配度得分，值越高表示匹配度越高。
     * @example "[0.35, 0.11, 0.04, -0.61]"
     */
    SDScores?: number[];
    /**
     * 指定的卖点渲染模板
     * @example "default"
     */
    SellingPointRenderTemplate?: string;
    /**
     * 卖点文本信息
     * @example "美味\健康"
     */
    SellingPointText?: string;
    /**
     * 生成的商品卖点图 URI 列表。排序规则为，当存在`SDScores > 0`的返回结果时，首个返回结果为`SDScores > 0`且总分(SDScores+AestheticScores)最高的结果图 URI，否则首个返回结果为`SDScores < 0`且总分最高的结果；其余结果按总分降序排序。
     * @example "["tos-cn-i-8h**7j/89123**238290"]"
     */
    SellpointImages?: string[];
  };
}

export interface GetResourceURLQuery {
  /**
   * 域名。您可以通过调用 OpenAPI [获取服务下所有域名](https://www.volcengine.com/docs/508/9379)获取。
   * @example "example.test.com"
   */
  Domain: string;
  /**
   * 创建模板时设置的图片输出格式，默认为 image，支持取值有：
   * - image：表示输出原格式；
   * - 静图格式：png、jpeg、heic、avif、webp;
   * - 动图格式：awebp、heif、avis。
   * @example "image"
   */
  Format?: string;
  /**
   * 协议，默认为 http，隐私图片使用 https，公开图片支持取值 http 以及 https。
   * @example "https"
   */
  Proto?: string;
  /**
   * 资源所在的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
  /**
   * 过期时长，最大限制为 1 年，默认为 1800s。
   * :::tip
   * 仅当开启 [URL 鉴权](https://www.volcengine.com/docs/508/128828)配置后，`Timestamp` 配置生效。
   * :::
   * @example 1800
   */
  Timestamp?: number;
  /**
   * 模板名称，缺省情况下表示无模板处理图片。您可以通过调用 OpenAPI [获取服务下所有图片模板](https://www.volcengine.com/docs/508/9386)获取。
   * @example "tplv-8h**9q-1.image"
   */
  Tpl?: string;
  /**
   * 文件存储 Uri。您可以通过调用 OpenAPI [获取服务下的上传文件](https://www.volcengine.com/docs/508/9392)获取。
   * @example "tos-i-xxxxx/test.png"
   */
  URI: string;
}

export interface GetResourceURLRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetResourceURL"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "202209081106590102252431250087BD7B"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 结果图访问精简地址，与默认地址相比缺少 Bucket 部分。
     * @example "http://example.test.com/test.png~tplv-8h**9q-1.image"
     */
    CompactURL: string;
    /**
     * 精简源文件地址，与默认地址相比缺少 Bucket 部分。
     * @example "http://example.test.com/test.png"
     */
    ObjCompactURL: string;
    /**
     * 默认源文件访问地址。
     * @example "http://example.test.com/tos-i-xxxxx/test.png"
     */
    ObjURL: string;
    /**
     * 结果图访问默认地址。
     * @example "http://example.test.com/tos-i-xxxxx/test.png~tplv-8h**9q-1.image"
     */
    URL: string;
  };
}

export interface GetResponseHeaderValidateKeysRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetResponseHeaderValidateKeys"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 合法的响应头 key 列表
     * @example "["Content-Disposition","Content-Language","Access-Control-Allow-Origin","Access-Control-Expose-Headers","Access-Control-Max-Age","Cache-Control","Access-Control-Allow-Methods","Timing-Allow-Origin","Access-Control-Allow-Headers","Access-Control-Allow-Credentials","Access-Control-Max-Age"]"
     */
    ValidateRespHdrKeys: string[];
  };
}

/** 描述 */
export interface GetSegmentImageBody {
  /**
   * 图片类型，支持可选择的模型如下。
   * * general：通用模型v1
   * * human：人脸模型v1
   * * product：商品模型v1
   * * humanv2：人脸模型v2
   * * productv2：商品模型v2
   * @example "product"
   */
  Class: string;
  /**
   * 描边设置，仅当`Class`取值`humanv2`或`productv2`时有效。
   * 默认关闭，如果开启，抠出的结果图中保留的图像主体会外包一圈描边效果。
   * @example "-"
   */
  Contour?: {
    /**
     * 描边颜色，支持以 HEX、HSL、RGP 表示。例如`HEX`中白色为`#FFFFFF`。
     * @example "#FFFFFF"
     */
    Color: string;
    /**
     * 描边宽度，单位为 px。取值范围为 0 到正整数，默认 10px。
     * @example 10
     */
    Size: number;
  };
  /**
   * 输出图片格式，取值如下所示：
   * - png
   * - jpeg
   * - webp
   * @example "jpeg"
   */
  OutFormat: string;
  /**
   * 处理效果，当`Class`取值为`humanv2`或`productv2`时，默认为`true`。
   * * false：保留的图像主体边缘以粗线条处理，图像处理的效率更高。
   * * true：保留的图像主体边缘以发丝级细线条处理，图像处理后的效果更好。
   * @example "true"
   */
  Refine: boolean;
  /**
   * 待擦除原图的存储 URI 和 URL（公网可访问的 URL）。
   * @example "tos-cn-i-example/6f90d0897.jpeg"
   */
  StoreUri: string;
  /**
   * 是否开启透明背景裁剪设置。默认false，关闭状态。如果开启，抠出的结果图会被裁剪到刚好包住保留的图像主体。
   * @example "false"
   */
  TransBg?: boolean;
}

export interface GetSegmentImageQuery {
  /**
   * 服务 ID。
   * * 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "91**2g"
   */
  ServiceId: string;
}

export interface GetSegmentImageRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetSegmentImage"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 背景去除后的图片 URI。
     * @example "tos-cn-i-9i**3g/example"
     */
    ResUri: string;
  };
}

export interface GetServiceDomainsQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "89**0j"
   */
  ServiceId: string;
}

export interface GetServiceDomainsRes {
  ResponseMetadata?: {
    /** @example "GetServiceDomains" */
    Action?: string;
    /** @example "cn-north-1" */
    Region?: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId?: string;
    /** @example "imagex" */
    Service?: string;
    /** @example "2018-08-01" */
    Version?: string;
  };
  Result?: {
    /**
     * 指向的 cname 值
     * @example "www.***.cn.bytexns.com"
     */
    cname?: string;
    /**
     * 创建时间
     * @example 1664278771
     */
    create_time?: number;
    /**
     * 域名
     * @example "www.***.cn"
     */
    domain?: string;
    /**
     * HTTPS 配置
     * @example "-"
     */
    https_config?: {
      /** 是否开启 HTTP2 */
      enable_http2?: boolean;
      /** 证书 ID */
      cert_id: string;
    };
    /**
     * 是否是默认域名，取值如下所示：
     * - `true`：默认域名
     * - `false`：非默认域名
     * @example "false"
     */
    is_default?: boolean;
    /**
     * 域名锁定状态
     * @example ""
     */
    lock_status: {
      /**
       * 智能压缩是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      compression_locked: boolean;
      /**
       * 整个域名是否锁定，取值如下所示：
       * - `true`：是，您无法手动修改其配置。如需修改，请[提交工单](https://console.volcengine.com/workorder/create?step=2&SubProductID=P00000080)联系技术支持。
       * - `false`：否
       * @example "true"
       */
      domain_locked: boolean;
      /**
       * IP 访问限制是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      ip_access_rule_locked: boolean;
      /** 域名被锁定原因 */
      reason?: string;
      /**
       * Referer 防盗链是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      referer_access_rule_locked: boolean;
      /**
       * 远程鉴权是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      remote_auth_locked: boolean;
      /**
       * 响应头是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      response_header_locked: boolean;
      /**
       * URL 鉴权是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      sign_url_auth_locked: boolean;
      /**
       * UA 访问限制是否锁定，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      ua_access_rule_locked: boolean;
    };
    /**
     * 域名锁定原因
     * @example "域名存在特殊配置"
     */
    reason?: string;
    /**
     * 地域
     * @example "中国大陆"
     */
    region?: string;
    /**
     * 域名状态
     * @example "正常"
     */
    status?: string;
    /**
     * 域名申请人
     * @example "test104"
     */
    user?: string;
  }[];
}

export interface GetSyncAuditResultBody {
  /** @example 1 */
  AuditAbility: number;
  /** @example "" */
  AuditDimensions: string[];
  /** @example "" */
  AuditTextDimensions: string[];
  /** @example "xx" */
  DataId: string;
  /** @example "true" */
  EnableLargeImageDetect: boolean;
  /** @example "xx" */
  ImageUri: string;
}

export interface GetSyncAuditResultRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /** @example "" */
    Advice: string;
    /** @example "" */
    DataId: string;
    /** @example "" */
    ImageType: string;
    /** @example "" */
    ImageUri: string;
    /** @example "" */
    Label?: string[];
    /** @example "" */
    SubLabel?: string[];
  };
}

export interface GetTemplatesFromBinQuery {
  /**
   * 是否按照模板创建时间升序查询，支持取值：`true、false`，默认为`false`。
   * @example "true"
   */
  Asc?: string;
  /**
   * 分页获取条数，默认 10。
   * @example 10
   */
  Limit?: number;
  /**
   * 分页偏移。默认 0。取值为1，表示跳过第一条数据，从第二条数据开始取值。
   * @example 0
   */
  Offset?: number;
  /**
   * 服务 ID
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
  /**
   * 仅返回模板名称包含该字符串的图片模板，不填或者为空则返回所有模板。
   * @example "pic"
   */
  TemplateNamePattern?: string;
}

export interface GetTemplatesFromBinRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "GetTemplatesFromBin"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /** 所有模板信息 */
    Templates: {
      /** 模板的摘要信息。 */
      Abstract: string[];
      /** 指定图像自适应配置。 */
      AdaptiveFmt: Record<string, unknown>;
      /** 视频转动图配置。 */
      Animation: Record<string, unknown>;
      /** 模版 JSON 内容。 */
      Content: string;
      /**
       * 模板创建时间。
       * @example "2018-05-09 17:44:40"
       */
      CreateAt: string;
      /** 模版降级格式，仅针对 heic 格式有效。 */
      DemotionFormat: string;
      /** 对图片的编辑操作。 */
      Filters: {
        /**
         * 编辑操作的名称，具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。
         * @example "resize"
         */
        Name: string;
        /** 编辑操作的参数，具体详情请见[图片编辑数据结构](https://www.volcengine.com/docs/508/127820)。 */
        Param: Record<string, Record<string, unknown>>;
      }[];
      /**
       * 对图片编码使用的质量参数。
       * @example 85
       */
      OuputQuality: number;
      /**
       * 用于图片服务输出时的图片编码。
       * * 取值`png.use_quant`表示是否开启 png quant 压缩，取值为`true`表示开启，取值为`false`表示关闭；
       * * 取值`heic.sync`表示使用 heic 同步编码，取值为`true`表示同步；
       * * 取值`heic.timeout`表示 heic 同步编码的超时时间，比如 20。
       */
      OutputExtra: Record<string, unknown>;
      /**
       * 该模板计划使用的输出图片格式。
       * * 取值为`image`，表示输出原格式。
       * * 支持输出的静图格式：png、jpeg、heic、avif、webp。
       * * 支持输出的动图格式：awebp、heif、avis。
       * @example "image"
       */
      OutputFormat: string;
      /** 图片模板的参数列表，URL 中下发参数的顺序需要跟列表中的保持一致。 */
      Parameters: string[];
      /** URL 的失效期，为 Unix 时间戳。 */
      ReqDeadline: string;
      /** 服务 ID。 */
      ServiceID: string;
      /** 视频截帧配置。 */
      Snapshot: Record<string, unknown>;
      /** 是否同步处理，仅针对 heic 格式有效。 */
      Sync: boolean;
      /**
       * 模板名称。
       * @example "tplv-xyz-xxx@2022-08-23T20:25:26+08:00"
       */
      TemplateName: string;
      /**
       * 该模板的使用用例。
       * @example "~tplv-xyz-xxx:width.image"
       */
      Usage: string;
      /**
       * 模板是否开启鉴权。
       * * 取值为`true`，表示开启鉴权。
       * * 取值为`false`，表示关闭鉴权。
       */
      WithSig: boolean;
    }[];
    /** 模板总数。 */
    Total: number;
  };
}

export interface GetUrlFetchTaskQuery {
  /**
   * 异步任务 ID，您可通过调用 [FetchImageUrl](https://www.volcengine.com/docs/508/1261301)接口获取该 ID。
   * @example "92830H07WJS28370"
   */
  Id: string;
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7j**0w"
   */
  ServiceId: string;
}

export interface GetUrlFetchTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 传入的回调地址，仅当`Status`取值`Failed`时有返回值。
     * @example "http://test.com"
     */
    Callback?: string;
    /**
     * 传入的回调内容，仅当`Status`取值`Failed`时有返回值。
     * @example "{
     *   "param1": "value1",
     *   "param2": "value2"
     * }
     * "
     */
    CallbackBody?: string;
    /**
     * 传入的回调内容类型，仅当`Status`取值`Failed`时有返回值。
     * @example "application/json"
     */
    CallbackBodyType?: string;
    /**
     * 错误码，仅当`Status`取值`Failed`时有返回值。
     * @example 604624
     */
    Code?: number;
    /**
     * 错误信息，仅当`Status`取值`Failed`时有返回值。
     * @example "抓取失败"
     */
    Err?: string;
    /**
     * 异步任务 ID
     * @example "92830H07WJS28370"
     */
    Id: string;
    /**
     * 任务状态，取值如下所示：
     *
     * - `Running`：进行中
     * - `Pending`：排队中
     * - `Failed`：失败
     * - `Success`：成功
     * @example "Success"
     */
    Status: string;
    /**
     * 资源上传后的资源 URI
     * @example "tos-cn-i-7j**0w/test.png"
     */
    StoreUri?: string;
    /**
     * 资源下载链接
     * @example "https://test.org/con.jpg"
     */
    Url: string;
  };
}

export interface GetVendorBucketsBody {
  /**
   * Access Key。是与 Secret Key 同时填写的，为了保证有访问源数据桶的权限。
   * @example "AKTP8shJDSYGbi8*****"
   */
  AK: string;
  /**
   * S3 协议 Endpoint，需以`http://`或`https://`开头。仅当`Vendor`为`S3`时必填。
   * @example "https://s3.amazonaws.com"
   */
  Endpoint: string;
  /**
   * Bucket 所在地区。仅当`Vendor` 非 `URL/OSS/KODO/AWS` 时为必填。
   * @example "cn-beijing	"
   */
  Region?: string;
  /**
   * Secret Key。是与 Access Key 同时填写的，为了保证有访问源数据桶的权限。
   * @example "PJDJSAJNNNCbE1E****"
   */
  SK: string;
  /**
   * 服务商。取值如下所示：
   *
   * - `OSS`：阿里云
   * - `COS`：腾讯云
   * - `KODO`：七牛云
   * - `BOS`：百度云
   * - `OBS`：华为云
   * - `Ucloud`：Ucloud file
   * - `AWS`：AWS 国际站
   * - `S3`：其他 S3 协议存储
   * - `URL`：以上传 URL 列表的方式迁移
   * @example "OSS"
   */
  Vendor: string;
}

export interface GetVendorBucketsRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * bucket 列表
     * @example "["my-source-bucket-1", "my-source-bucket-2", "my-source-bucket-3"]"
     */
    Buckets: string[];
  };
}

/**
 * 要素类型，取值如下所示：
 * * image：图片要素；
 * * background：背景要素；
 * * mask：蒙版要素。
 * 取值image表示图片要素，background表示背景要素
 * @example "background"
 */
export enum PostAddImageElementsTypeEnum {
  Image = "image",
  Background = "background",
}

/**
 * 尺寸单位。即样式画布宽度/高度的像素单位，取值为`px`。
 * 当前仅支持取值px表示像素
 * @default "px"
 * @example "px"
 */
export enum PostCreateImageStyleUnitEnum {
  Px = "px",
}

/**
 * 要素类型，取值如下所示：
 * * image：图片要素；
 * * background：背景要素；
 * * mask：蒙版要素。
 * 取值image表示图片要素，background表示背景要素
 * @example "background"
 */
export enum PostDeleteImageElementsTypeEnum {
  Image = "image",
  Background = "background",
}

export interface PreviewImageUploadFileQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
  /**
   * 文件存储 URI。
   * - 您可以在 veImageX 控制台 [资源管理](https://console.volcengine.com/imagex/resource_manage/)页面，在已上传文件的名称列获取。
   * - 您也可以通过 OpenAPI 的方式获取，具体请参考[获取服务下的上传文件](https://www.volcengine.com/docs/508/9392)。
   * @example "tos-cn-i-8h**9q/imagexdemo.heif"
   */
  StoreUri: string;
}

export interface PreviewImageUploadFileRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 图片播放时间，单位为毫秒，仅当图片为动态图时返回。
     * @example 6
     */
    ImageDuration?: number;
    /**
     * 图片格式。
     * @example "jpeg"
     */
    ImageFormat: string;
    /**
     * 图片帧数。
     * @example 20
     */
    ImageFrames: number;
    /**
     * 图片高度。
     * @example 683
     */
    ImageHeight: number;
    /**
     * 图片大小，单位为字节。
     * @example 64859
     */
    ImageSize: number;
    /**
     * 图片宽度。
     * @example 1023
     */
    ImageWidth: number;
    /**
     * 服务 ID。
     * @example "8h**9q"
     */
    ServiceId: string;
    /**
     * 图片的 Content-Type 值。
     * @example "image/heif"
     */
    StorageContentType: string;
    /**
     * 文件存储 URI。
     * @example "tos-cn-i-8h**9q/imagexdemo.heif"
     */
    StoreUri: string;
  };
}

export interface RerunImageMigrateTaskQuery {
  /**
   * 任务地区（即任务目标服务的地区），默认空，返回国内任务。
   *
   * - `cn`：国内
   * - `sg`：新加坡
   * @example "cn"
   */
  Region?: string;
  /**
   * 仅当任务状态为`Partial`时生效。
   * 任务 ID，请参考 [GetImageMigrateTasks](https://www.volcengine.com/docs/508/1108670)获取返回的任务 ID。
   * @example "648c15f764f3c4abd95ad044"
   */
  TaskId: string;
}

export interface RerunImageMigrateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

/** 描述 */
export interface SetDefaultDomainBody {
  /**
   * 指定新的默认域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "test.com.cn"
   */
  Domain: string;
}

export interface SetDefaultDomainRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "SetDefaultDomain"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /**
   * 视请求的接口而定
   * @example "ok"
   */
  Result?: Record<string, unknown>;
}

export interface TerminateImageMigrateTaskQuery {
  /**
   * 任务地区（即任务目标服务的地区），默认空，返回国内任务。
   *
   * - `cn`：国内
   * - `sg`：新加坡
   * @example "cn"
   */
  Region?: string;
  /**
   * 任务 ID，请参考 [GetImageMigrateTasks](https://www.volcengine.com/docs/508/1108670) 获取返回的任务 ID。
   * @example "648c15f764f3c4abd95ad044	"
   */
  TaskId: string;
}

export interface TerminateImageMigrateTaskRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateAdvanceBody {
  /** 高级配置 */
  advance: {
    /**
     * 是否开启 IPV6，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     */
    enable_ipv6: boolean;
    /**
     * 是否开启 Brotli 压缩，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * :::tip
     * 支持同时配置 Gzip 压缩和 Brotli 压缩，详细内容请参考[智能压缩](https://www.volcengine.com/docs/508/75858)。
     * :::
     */
    enable_br: boolean;
    /**
     * 是否开启 Gzip 压缩，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * :::tip
     * 支持同时配置 Gzip 压缩和 Brotli 压缩，详细内容请参考[智能压缩](https://www.volcengine.com/docs/508/75858)。
     * :::
     */
    enable_gzip: boolean;
  };
  domain: string;
}

export interface UpdateAdvanceQuery {
  /**
   * 服务 ID。
   * * 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口方式获取服务 ID。
   */
  ServiceId: string;
}

export interface UpdateAdvanceRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "UpdateAdvance"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /**
   * 视请求的接口而定
   * @example "ok"
   */
  Result?: Record<string, unknown>;
}

/** title */
export interface UpdateAuditImageStatusBody {
  /**
   * 审核图片 ID。您可通过调用[获取审核任务结果](https://www.volcengine.com/docs/508/1160410)查看待更新状态的图片条目 ID。
   * @example "65324fe0a**aa1d9ce651052"
   */
  EntryId: string;
  /**
   * 更新后的状态，取值如下所示：
   * - `original`：初始状态
   * - `frozen`：冻结图片
   * original->frozen执行冻结操作。frozen->original执行恢复操作
   * @example "frozen"
   */
  Status: string;
  /**
   * 任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1160409) 获取所需的任务 ID。
   * @example "65324fe0ac**a1d9ce65104e"
   */
  TaskId: string;
}

export interface UpdateAuditImageStatusRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

export interface UpdateDomainAdaptiveFmtBody {
  /**
   * 是否开启自适应，取值如下所示：
   * - `true`：开启自适应
   * - `false`：关闭自适应
   * @example "true"
   */
  AdaptFmt: boolean;
  /**
   * 自适应格式列表，取值如下所示：
   *
   * - `webp`：WEBP 自适应
   * - `heic`：HEIC 自适应
   * - `avif`：AVIF 自适应
   * @example "["heic"]"
   */
  AdaptFormats: string[];
  /**
   * 是否开启体积校验，取值如下所示：
   *
   * - `true`：开启。开启后会对经自适应编码后的图片体积和编码前原图体积进行对比，若编码后体积更小则输出编码后图片；否则输出原图。
   * - `false`：关闭
   * @example "false"
   */
  CheckAdaptFsize: boolean;
  /**
   * 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "test.volcimagextest.com"
   */
  Domain: string;
}

export interface UpdateDomainAdaptiveFmtQuery {
  /**
   * 待修改配置的域名的所属服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8ji**as0"
   */
  ServiceId: string;
}

export interface UpdateDomainAdaptiveFmtRes {
  ResponseMetadata?: {
    Action?: string;
    Region?: string;
    RequestId?: string;
    Service?: string;
    Version?: string;
  };
  Result?: string;
}

export interface UpdateFileStorageClassBody {
  /**
   * 修改后的存储类型，取值如下所示：
   * - `STANDARD`：标准存储
   * - `IA`：低频存储
   * - `ARCHIVE_FR`：归档闪回存储
   * - `ARCHIVE`：归档存储
   * - `COLD_ARCHIVE`：冷归档存储
   * - STANDARD 标准存储
   * - IA 低频存储
   * - ARCHIVE_FR 归档闪回存储
   * - COLD_ARCHIVE 冷归档存储
   * - ARCHIVE 归档存储
   * @example "IA"
   */
  StorageClass: string;
  /**
   * 文件存储 URI。
   * - 您可以在 veImageX 控制台 [资源管理](https://console.volcengine.com/imagex/resource_manage/)页面，在已上传文件的名称列获取资源 URI。
   * - 您也可以通过 OpenAPI 的方式获取 URI，具体请参考[获取服务下全部上传文件
   * ](https://www.volcengine.com/docs/508/9393)。
   * @example "demo.png"
   */
  StoreUri: string;
}

export interface UpdateFileStorageClassQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8H**K0"
   */
  ServiceId: string;
}

export interface UpdateFileStorageClassRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateHttpsBody {
  /**
   * 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "test.volcimagextest.com"
   */
  domain: string;
  /**
   * https 配置
   * @example "-"
   */
  https: {
    /**
     * 是否开启 http2，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_http2?: boolean;
    /**
     * 需要关联的证书 ID，若`enable_https`为`true`，则为必填。
     * @example "fa2f32dfe**e8c2105ef0d711f15"
     */
    cert_id?: string;
    /**
     * 是否开启强制跳转，支持取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "false"
     */
    enable_force_redirect?: boolean;
    /**
     * 是否开启 https，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_https?: boolean;
    /**
     * 是否开启 ocsp 装订，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_ocsp?: boolean;
    /**
     * 是否开启 quic 协议支持，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_quic?: boolean;
    /**
     * 强制跳转状态码，取值如下所示：
     *
     * - `301`：返回给用户 301 状态码进行重定向。
     * - `302`：返回给用户 302 状态码进行重定向。
     * :::tip
     * 仅当`enable_force_redirect`取值为`true`时需要配置。
     * :::
     * 301、302HTTP 强制跳转 HTTPS只支持301
     * @example "301"
     */
    force_redirect_code?: string;
    /**
     * 强制跳转类型，取值如下所示：
     *
     * - `http2https`：HTTP 到 HTTPS
     * - `https2http`：HTTPS 到 HTTP
     * :::tip
     * 仅当`enable_force_redirect`取值为`true`时需要配置。
     * :::
     * http2https、https2http
     * @example "https2http"
     */
    force_redirect_type?: string;
    /**
     * 配置hsts
     * @example ""
     */
    hsts?: {
      /**
       * 是否开启hsts
       * @example ""
       */
      enable?: boolean;
      /**
       * 表示 HSTS 配置是否也应用于加速域名的子域名。该参数有以下取值： include：表示 HSTS 配置应用于子域名站点。 exclude：表示 HSTS 配置不应用于子域名站点。 该参数的默认值是 exclude。
       * include、exclude
       * @example ""
       */
      subdomain?: string;
      /**
       * 表示 Strict-Transport-Security 响应头在浏览器中的缓存过期时间，单位是秒。该参数的取值范围是 0 - 31,536,000。31,536,000 秒表示 365 天。如果该参数值为 0，其效果等同于禁用 HSTS 设置。该参数的默认值是 0。
       * @example ""
       */
      ttl?: number;
    };
    /**
     * 支持的 tls 版本，取值如下所示：
     * - `tlsv1.0`
     * - `tlsv1.1`
     * - `tlsv1.2`
     * - `tlsv1.3 `
     * ["tlsv1.0","tlsv1.1","tlsv1.2","tlsv1.3"]
     * @example "["tlsv1.0","tlsv1.1","tlsv1.2"]"
     */
    tls_versions: string[];
  };
}

export interface UpdateHttpsQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "uh****2h"
   */
  ServiceId: string;
}

export interface UpdateHttpsRes {
  ResponseMetadata?: {
    /** @example "UpdateHttps" */
    Action?: string;
    /** @example "cn-north-1" */
    Region?: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId?: string;
    /** @example "imagex" */
    Service?: string;
    /** @example "2018-08-01" */
    Version?: string;
  };
  /** @example "ok" */
  Result?: string;
}

/** title */
export interface UpdateImageAnalyzeTaskBody {
  /**
   * 任务描述
   * @example "备注"
   */
  Desc?: string;
  /**
   * 仅当`Type` 取值 `UriFile` 时，配置有效。
   * 是否模拟模板每阶段输出，取值如下所示：
   *
   * - `true`：是，一个模版中可以选择多种图像处理, 模拟输出时会将所有的处理逐步叠加并编码为最终图片格式运行并输出评估结果。
   * - `false`：否。
   * @example "false"
   */
  EvalPerStage?: boolean;
  /**
   * 任务名称
   * @example "test"
   */
  Name: string;
  /**
   * txt 评估文件的 Store URI，该文件需上传至指定服务对应存储中。
   *
   * - `Type` 取值 `UrlFile` 时，填写合法 URL
   * - `Type` 取值 `UriFile` 时，填写指定服务的存储 URI
   * @example "["tos-cn-i-4u**7a/StoreUri.txt"]"
   */
  ResUri?: string[];
  /**
   * 服务 ID
   * @example "4u**7a"
   */
  ServiceId: string;
  /**
   * 待更新的任务 ID，您可以通过调用 [GetImageAnalyzeTasks](https://www.volcengine.com/docs/508/1160417) 获取指定地区全部离线评估任务详情。
   * @example "65389176**34a65e2ce94"
   */
  TaskId: string;
  /**
   * 仅当`Type` 取值 `UriFile` 时，配置有效。
   * 模板名称，您可通过调用 [GetAllImageTemplates](https://www.volcengine.com/docs/508/9386) 获取服务下所有已创建的 `TemplateName`。
   * @example "tplv-a-xxx"
   */
  Tpl?: string;
}

export interface UpdateImageAnalyzeTaskRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface UpdateImageAnalyzeTaskStatusBody {
  /**
   * 更新后的任务状态。取值如下所示：
   * - `Running`：进行中
   * - `Suspend`：暂停
   * - `Done`：结束
   * @example "Done"
   */
  Status: string;
  /**
   * 待更新的任务 ID，您可以通过调用 [GetImageAnalyzeTasks](https://www.volcengine.com/docs/508/1160417) 获取指定地区全部离线评估任务 ID。
   * @example "981820****9183720"
   */
  TaskId: string;
}

export interface UpdateImageAnalyzeTaskStatusRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface UpdateImageAuditTaskBody {
  /**
   * 审核维度，根据审核能力的不同，其具体取值不同。基础审核与智能审核之间不支持混用。
   *
   * - 基础安全审核，仅当 `AuditAbility` 取值为 `0` 时，配置生效。
   *
   * 	- `govern`：涉政
   * 	- `porn` ：涉黄
   * 	- `illegal`：违法违规
   * 	- `terror`：涉暴
   *
   * - 智能安全审核，仅当 `AuditAbility` 取值为 `1` 时，配置生效。
   *
   * 	- 图像风险识别
   * 		- `porn` ：涉黄，主要适用于通用色情、色情动作、性行为、性暗示、性分泌物、色情动漫、色情裸露等涉黄场景的风险识别
   * 		- `sensitive1` ：涉敏1，具体指涉及暴恐风险
   * 		- `sensitive2`：涉敏2，具体值涉及政治内容风险
   * 		- `forbidden`：违禁，主要适用于打架斗殴、爆炸、劣迹艺人等场景的风险识别
   * 		- `uncomfortable`：引人不适，主要适用于恶心、恐怖、尸体、血腥等引人不适场景的风险识别
   * 		- `qrcode`：二维码，主要适用于识别常见二维码（QQ、微信、其他二维码等）
   * 		- `badpicture`：不良画面，主要适用于自我伤害、丧葬、不当车播、吸烟/纹身/竖中指等不良社会风气的风险识别
   * 		- `sexy`：性感低俗，主要适用于舌吻、穿衣性行为、擦边裸露等多种性感低俗场景的风险识别
   * 		- `age`：年龄，主要适用于图中人物对应的年龄段识别
   * 		- `underage`：未成年相关，主要适用于儿童色情、儿童邪典等风险识别
   * 		- `quality`：图片质量，主要适用于图片模糊、纯色边框、纯色屏等风险识别
   * 	- 图文风险识别，您可在 `AuditTextDimensions` 配置文字审核的维度。
   *
   * 	:::tip
   * 	您可将智能安全审核的图像风险识别和图文风险识别搭配使用。
   * 	:::
   * @example "["porn","sensitive1","sensitive2"]"
   */
  AuditDimensions: string[];
  /**
   * 仅当 `EnableAuditRange` 取值 `1` 时，配置生效。
   * 指定前缀审核，若你希望对某个目录进行审核，请设置路径为对应的目录名，以`/`结尾。例如`123/`
   * @example "["123/"]"
   */
  AuditPrefix?: string[];
  /**
   * 智能安全审核类型下图片文本审核的具体维度，取值如下所示：
   * - `ad`：广告，综合图像及文字内容智能识别广告
   * - `defraud`：诈骗，综合图像及文字内容智能识别诈骗
   * - `charillegal`：文字违规，图片上存在涉黄、涉敏、违禁等违规文字
   *
   * :::tip
   * 仅当 `AuditDimensions` 取值为智能安全审核模型时，您可将 `AuditTextDimensions` 与 `AuditDimensions` 搭配使用。
   * :::
   * @example "["ad"]"
   */
  AuditTextDimensions?: string[];
  /**
   * 回调类型，取值需要与 `AuditDimensions` 审核维度保持一致或少于 `AuditDimensions`。
   *
   * 例如，`AuditDimensions` 取值 ["pron","sexy"]，`AuditTextDimensions` 取值 ["ad"]，支持您将 `FreezeDimensions` 取值 ["pron","sexy","ad"] 、 ["pron","sexy"]、["pron","ad"] 和 ["sexy","ad"] 任意一种。
   * @example "["porn","sensitive1"]"
   */
  CallbackDimensions?: string[];
  /**
   * 回调图片类型，取值如下所示：
   * - `normal`：正常图片
   *
   * - `problem`：问题图片
   *
   * - `frozen`：冻结图片
   *
   * - `fail`：审核失败图片
   * @example "["problem","frozen"]"
   */
  CallbackImageTypes?: string[];
  /**
   * 回调 URL，veImageX 以 Post 方式向业务服务器发送 JSON 格式回调数据。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/134676#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
   * @example "http://example.callback.com"
   */
  CallbackUrl?: string;
  /**
   * 仅当 `Type` 取值 `Upload` 时，配置生效。
   * 审核范围，取值如下所示：
   *
   * - `0`：（默认）不限范围
   * - `1`：指定范围
   */
  EnableAuditRange?: number;
  /**
   * 是否开启回调，取值如下所示：
   * - `true`：开启
   * - `false`：（默认）不开启
   * @example "true"
   */
  EnableCallback?: boolean;
  /**
   * 是否开启冻结，取值如下所示：
   * - `true`：开启
   * - `false`：（默认）不开启
   * @example "true"
   */
  EnableFreeze?: boolean;
  /**
   * 图片审核仅支持审核 5MB 以下的图片，若您的图片大小在 5MB~32MB，您可以开启大图审核功能，veImageX 会对图片压缩后再进行审核。开启后，将对压缩能力按照[基础图片处理](https://www.volcengine.com/docs/508/65935#%E5%9F%BA%E7%A1%80%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E6%9C%8D%E5%8A%A1)进行计费。（您每月可使用 20TB 的免费额度）
   * 取值如下所示：
   * - `true`：开启
   * - `false`：（默认）不开启
   *
   * :::tip
   * - 若未开启大图审核且图片大小 ≥ 5 MB，可能会导致系统超时报错；
   * - 若已开启大图审核但图片大小 ≥ 32 MB，可能会导致系统超时报错。
   * :::
   * @example "true"
   */
  EnableLargeImageDetect?: boolean;
  /**
   * 冻结维度，取值需要与 `AuditDimensions` 审核维度保持一致或少于 `AuditDimensions`。
   *
   * 例如，`AuditDimensions` 取值 ["pron","sexy"]，`AuditTextDimensions` 取值 ["ad"]，支持您将 `FreezeDimensions` 取值 ["pron","sexy","ad"] 、 ["pron","sexy"]、["pron","ad"] 和 ["sexy","ad"] 任意一种。
   * 若开启冻结，则不可为空
   * @example "["porn","sensitive1"]"
   */
  FreezeDimensions?: string[];
  /**
   * 冻结策略，当前仅支持取 `0`，表示禁用图片。
   * 若开启冻结，则不可为空
   */
  FreezeStrategy?: number;
  /**
   * 冻结措施，取值如下所示：
   * - `recheck`：建议复审
   * - `nopass`：审核不通过
   * 若开启冻结，则不可为空
   * @example "["nopass","recheck"]"
   */
  FreezeType?: string[];
  /**
   * 仅当 `EnableAuditRange` 取值 `1` 时，配置生效。
   * 指定前缀不审核，若你希望对某个目录不进行审核，请设置路径为对应的目录名，以`/`结尾。例如`123/`
   * @example "["abc/"]"
   */
  NoAuditPrefix?: string[];
  /**
   * 任务地区。当前仅支持取值 `cn`，表示国内。
   * @example "cn"
   */
  Region?: string;
  /**
   * 仅当 `Type` 为 `UrlFile` 时，配置生效。
   *
   * 审核文件的 StoreUri，为 .txt 文件，该文件需上传至指定服务对应存储中。该 txt 文件内需填写待审核图片文件的 URL，每行填写一个，最多可填写 10000 行。
   * @example "["指定服务/图片审核文件.txt"]"
   */
  ResUri?: string[];
  /**
   * 指定待更新审核任务所在的服务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1158717) 获取待更新任务对应的服务 ID。
   * @example "lk**i0"
   */
  ServiceId: string;
  /**
   * 任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1158717) 获取所需的任务 ID。
   * @example "98172790****918301"
   */
  TaskId: string;
}

export interface UpdateImageAuditTaskRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface UpdateImageAuditTaskStatusBody {
  /**
   * 更新后的任务状态。取值如下所示：
   * - `Running`：审核中
   * - `Suspend`：审核暂停
   * - `Done`：审核完成
   * - `Cancel`：审核取消
   * @example "Suspend"
   */
  Status: string;
  /**
   * 待更新的任务 ID，您可通过调用 [查询所有审核任务](https://www.volcengine.com/docs/508/1160409) 获取所需的任务 ID。
   * @example "98172790****918301"
   */
  TaskId: string;
}

export interface UpdateImageAuditTaskStatusRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

export interface UpdateImageAuthKeyBody {
  /**
   * 主鉴权 key，长度为 8-32 字节，为空则不更新主鉴权值。
   * @example "899z09z***121u2e9w"
   */
  PrimaryKey?: string;
  /**
   * 备鉴权 key，长度为 8-32 字节，为空则不更新备鉴权值。
   * @example "030fwe8***j9wqhiqs"
   */
  SecondaryKey?: string;
}

export interface UpdateImageAuthKeyQuery {
  /**
   * 待更新配置的服务 ID。
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "2y***s2"
   */
  ServiceId: string;
}

export interface UpdateImageAuthKeyRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

/** title */
export interface UpdateImageDomainAreaAccessBody {
  /** 区域访问限制配置 */
  area_access: {
    /**
     * 地区列表。取值请见[国家名称对照表](https://www.volcengine.com/docs/6454/131750)表格中国家简写该列内容。
     * 对照名称表 https://www.volcengine.com/docs/6454/131750
     */
    areas: string[];
    /** 是否开启区域限制 */
    enable: boolean;
    /**
     * 黑白名单设置类型，取值如下所示：
     * - deny：黑名单
     * - allow：白名单
     */
    rule_type: string;
  };
  /** 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。 */
  domain: string;
}

export interface UpdateImageDomainAreaAccessQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   */
  ServiceId: string;
}

export interface UpdateImageDomainAreaAccessRes {
  ResponseMetadata?: {
    Action?: string;
    Region?: string;
    RequestId?: string;
    Service?: string;
    Version?: string;
  };
  Result?: string;
}

export interface UpdateImageDomainBandwidthLimitBody {
  /**
   * 带宽限制设置
   * 带宽限速配置
   */
  bandwidth_limit: {
    /**
     * 是否开启带宽限制功能，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * :::tip
     * 仅当 `enabled` 为 `true` 时，`threshold`、`limit_type` 等配置项有效。
     * :::
     * 是否开启带宽限制功能，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * :::tip
     * 仅当 `enabled` 为 `true` 时，`threshold`、`limit_type` 等配置项有效。
     * :::
     * @example "true"
     */
    enabled: boolean;
    /**
     * 全局带宽阈值，指定加速域名的带宽阈值。单位为 bps，取值范围为 [1, 1000000000000000]  的整数。
     * 单位换算：1 Gbps = 1000 Mbps。
     * 全局带宽阈值，指定加速域名的带宽阈值。单位为 bps，取值范围为 [1, 1000000000000000]  的整数。单位换算：1 Gbps = 1000 Mbps。
     * @example "downloadspeedlimit"
     */
    limit_type: string;
    /**
     * 设置节点响应访问请求的速度下限，在 veImageX 逐步降低最大速度的过程中，最大速度不会低于该配置。
     * 单位：B/S，取值范围为 [1,1073741824000]的整数。
     * 单位换算：1 KB/S = 1024 B/S。
     * - 当 `limit_type` 为 `downloadspeedlimit` 时，表示每个请求的最低速度。
     * - 当 `limit_type` 为 `speedlimit` 时，表示每个 IP 地址的最低速度。
     * :::tip
     * 当 `limit_type` 为 `randomreject` 时，不支持自定义该配置。
     * :::
     * 设置节点响应访问请求的速度下限，在 veImageX 逐步降低最大速度的过程中，最大速度不会低于该配置。
     * 单位：B/S，取值范围为 [1,1073741824000]。默认值为 + 4096 KB/S。
     * 单位换算：1 KB/S = 1024 B/S。
     * - 当 `limit_type` 为 `downloadspeedlimit` 时，表示每个请求的最低速度。
     * - 当 `limit_type` 为 `speedlimit` 时，表示每个 IP 地址的最低速度。
     * :::tip
     * 当 `limit_type` 为 `randomreject` 时，不支持自定义该配置。
     * :::
     * @example 1
     */
    speed_limit_rate: number;
    /**
     * 初始速率，即初始最大速度。限速发生时， veImageX 会从该速度开始，逐步降低最大速度。
     * 单位：B/S，取值范围为[1,1073741824000]的整数。默认值为 `speed_limit_rate + 4096 KB/S`。
     * 单位换算：1 KB/S = 1024 B/S。
     * - 当 `limit_type` 为 `downloadspeedlimit` 时，表示每个请求的初始最大速度。
     * - 当 `limit_type` 为 `speedlimit` 时，表示每个 IP 地址的初始最大速度。
     * :::tip
     * 当 `limit_type` 为 `randomreject` 时，不支持自定义该配置。
     * :::
     * 初始速率，即初始最大速度。限速发生时， veImageX 会从该速度开始，逐步降低最大速度。
     * 单位：B/S，取值范围为[1,1073741824000]。
     * 单位换算：1 KB/S = 1024 B/S。
     * - 当 `limit_type` 为 `downloadspeedlimit` 时，表示每个请求的初始最大速度。
     * - 当 `limit_type` 为 `speedlimit` 时，表示每个 IP 地址的初始最大速度。
     * :::tip
     * 当 `limit_type` 为 `randomreject` 时，不支持自定义该配置。
     * :::
     * @example 1
     */
    speed_limit_rate_max: number;
    /**
     * 全局带宽阈值，指定加速域名的带宽阈值。单位为 bps，取值范围为 [1, 1000000000000000]  的整数。
     * 单位换算：1 Gbps = 1000 Mbps。
     * 全局带宽阈值，指定加速域名的带宽阈值。单位为 bps，取值范围为 [1, 1000000000000000]  的整数。
     * 单位换算：1 Gbps = 1000 Mbps。
     * @example 1000000000
     */
    threshold: number;
  };
  /**
   * 域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 接口获取域名。
   * 域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379) 接口获取域名。
   * @example "a.imagex.cn"
   */
  domain: string;
}

export interface UpdateImageDomainBandwidthLimitQuery {
  /**
   * 服务 ID。您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。您也可以通过调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口方式获取服务 ID。
   * @example "服务ID"
   */
  ServiceId: string;
}

export interface UpdateImageDomainBandwidthLimitRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 通知描述
     * 通知描述
     * @example "submit domain:a.volcimagex.cn update request succeed"
     */
    msg: string;
  };
}

export interface UpdateImageDomainConfigBody {
  /**
   * 自适应格式配置
   * @example "-"
   */
  adaptfmt?: {
    /**
     * 自适应格式列表，支持以下取值：
     *
     * - `webp`：WEBP 自适应
     * - `heic`：HEIC 自适应
     * - `avif`：AVIF 自适应
     * @example "["heic","avif"]"
     */
    adapt_formats: string[];
    /**
     * 是否开启体积校验，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    check_adapt_fsize: boolean;
    /**
     * 是否开启自适应，取值如下所示：
     *
     * - `true`：开启自适应
     * - `false`：关闭自适应
     * @example "true"
     */
    enabled: boolean;
  };
  /**
   * 高级配置
   * @example "-"
   */
  advanced?: {
    /**
     * 是否开启 IPV6，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_ipv6?: boolean;
    /**
     * 是否开启 Brotli 压缩，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     *
     * :::tip
     * 支持同时配置 Gzip 压缩和 Brotli 压缩，详细内容请参考[智能压缩](https://www.volcengine.com/docs/508/75858)。
     * :::
     * @example "true"
     */
    enable_br?: boolean;
    /**
     * 是否开启 Gzip 压缩，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_gzip?: boolean;
  };
  /**
   * 区域访问限制，不传不更新
   * @example "-"
   */
  area_acl?: {
    /**
     * 地区列表。取值请见[国家名称对照表](https://www.volcengine.com/docs/6454/131750)表格中国家简写该列内容。
     * 对照名称表 https://www.volcengine.com/docs/6454/131750
     * @example "["Cambodia"]"
     */
    areas: string[];
    /**
     * 是否开启区域限制，取值如下所示：
     *
     * - `true`：开启
     * - `false`：未开启
     * @example "true"
     */
    enabled: boolean;
    /**
     * 黑白名单设置类型，取值如下所示：
     *
     * - `deny`：黑名单
     * - `allow`：白名单
     * @example "deny"
     */
    rule_type: string;
  };
  /**
   * 集智瘦身配置
   * @example "-"
   */
  do_slim?: {
    /**
     * 是否关闭持久化。取值如下所示：
     *
     * - `true`：关闭
     * - `false`：开启
     * @example "true"
     */
    discard_slimed_file: boolean;
    /**
     * 是否开启集智瘦身，取值如下所示：
     *
     * - `true`：开启集智瘦身
     * - `false`：关闭集智瘦身
     * @example "true"
     */
    enabled: boolean;
  };
  /**
   * 域名列表，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "["a.imagex.cn"]"
   */
  domains: string[];
  /**
   * 全球加速配置
   * @example "-"
   */
  global_acceleration?: {
    /**
     * 是否开启全球加速，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enabled: boolean;
  };
  /**
   * HTTPS 配置
   * @example "-"
   */
  https?: {
    /**
     * 是否开启 http2，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_http2: boolean;
    /**
     * 需要关联的证书 ID，若`enable_https`为`true`，则为必填。
     * @example "iuhs2928jdh"
     */
    cert_id?: string;
    /**
     * 是否开启强制跳转，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_force_redirect?: boolean;
    /**
     * 是否开启 https，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enable_https: boolean;
    /**
     * 仅当`enable_force_redirect`取值为`true`时需要配置，强制跳转状态码。
     * 取值如下所示：
     *
     * - `301`：返回给用户 301 状态码进行重定向。
     * - `302`：返回给用户 302 状态码进行重定向。
     * 301、302HTTP 强制跳转 HTTPS只支持301
     * @example "301"
     */
    force_redirect_code?: string;
    /**
     * 仅当`enable_force_redirect`取值为`true`时需要配置，强制跳转类型。
     * 取值如下所示：
     *
     * - `http2https`：HTTP 到 HTTPS
     * - `https2http`：HTTPS 到 HTTP
     * http2https、https2http
     * @example "http2https"
     */
    force_redirect_type?: string;
    /**
     * HSTS 配置
     * @example "-"
     */
    hsts?: {
      /**
       * 是否开启 HSTS 配置，取值如下所示：
       * - `true`：是
       * - `false`：否
       * @example "true"
       */
      enabled?: boolean;
      /**
       * HSTS 配置是否也应用于加速域名的子域名。取值如下所示：
       * - `include`：应用于子域名站点。
       * - `exclude`：（默认）不应用于子域名站点。
       * @example "exclude"
       */
      subdomain?: string;
      /**
       * 如果 enable_https 是 true，该参数为必填。
       * Strict-Transport-Security 响应头在浏览器中的缓存过期时间，单位是秒。取值范围是 [0,31,536,000]。31,536,000 秒表示 365 天。如果该参数值指定为 0，其效果等同于禁用 HSTS 设置。
       * @example 23400
       */
      ttl?: number;
    };
    /**
     * 支持的 tls 版本。取值如下所示：
     *
     * - `tlsv1.0`
     * - `tlsv1.1`
     * - `tlsv1.2`
     * - `tlsv1.3`
     * ["tlsv1.0","tlsv1.1","tlsv1.2","tlsv1.3"]
     * @example "["tlsv1.1"]"
     */
    tls_versions: string[];
  };
  /**
   * IP 黑白名单配置
   * @example "-"
   */
  ip_auth?: {
    /**
     * 是否开启黑白名单配置，取值如下所示：
     *
     * - `true`：开启黑白名单配置
     * - `false`：关闭黑白名单配置
     * @example "true"
     */
    enabled: boolean;
    /**
     * 是否是 IP 白名单，取值如下所示：
     *
     * - `true`：配置白名单
     * - `false`：配置黑名单
     * @example "false"
     */
    is_white_mode: boolean;
    /**
     * 黑白名单 IP 地址，最大限制为 1000。
     * @example "["192.0.2.0"]"
     */
    values: string[];
  };
  /**
   * 页面优化设置，仅素材托管服务下域名支持配置。
   * @example "-"
   */
  page_optimization?: {
    /**
     * 是否开启页面优化，取值如下所示：
     * - `true`：是
     * - `false`：否
     * @example "true"
     */
    enabled: boolean;
    /**
     * 表示需要优化的对象列表。该参数有以下取值：
     * - `html`: （默认）表示 HTML 页面。
     * - `js`: 表示 Javascript 代码。
     * - `css`: 表示 CSS 代码。
     * :::tip
     * 如果对象列表包含 js 或者 js，html 也必须被包含。
     * :::
     * @example "["html","css"]"
     */
    optimization_type: string[];
  };
  /**
   * Referer 防盗链配置
   * @example "-"
   */
  referer_link?: {
    /**
     * 是否允许空 Referer，取值如下所示：
     *
     * - `true`：允许空 Referer
     * - `false`：不允许空 Referer
     * @example "false"
     */
    allow_empty_refer?: boolean;
    /**
     * 是否开启 Referer 防盗链，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enabled: boolean;
    /**
     * 是否忽略大小写。取值如下所示：
     * - `true`: （默认）大小写不敏感。
     * - `false`: 大小写敏感。
     * @example "true"
     */
    ignore_case?: boolean;
    /**
     * Referer 头部值是否必须以 HTTP 或者 HTTPS 开头。取值如下所示：
     * - `true`: 表示不以 HTTP 或者 HTTPS 开头的 Referer 头部值是合法的。在这个情况下，veImagex 会尝试将其与 Referers 列表匹配。
     * - `false`: （默认）表示不以 HTTP 或者 HTTPS 开头 Referer 头部值是非法的。在这个情况下，veImagex 判定为不匹配 CommonType 下的这个 Referers 列表。
     * @example "false"
     */
    ignore_scheme?: boolean;
    /**
     * 是否选择白名单，取值如下所示：
     *
     * - `true`：配置白名单
     * - `false`：配置黑名单
     * @example "true"
     */
    is_white_mode: boolean;
    /**
     * 正则表达式规则列表，最大限制为 100 条。
     * 请提供具体的参数名字和类型。
     * @example "\192\.23\.1\.8\b"
     */
    regex_values?: string[];
    /**
     * 黑白名单 Referer 规则，可输入域名或 IP 地址，最大限制为 1000 条。
     * 请提供具体的参数名字（values）和参数类型（array），以便我为您生成参数描述。
     * @example "["s.com", "y.com", "q.com"]"
     */
    values?: string[];
  };
  /**
   * 远程鉴权设置
   * @example "-"
   */
  remote_auth?: {
    /**
     * 鉴权请求头设置
     * @example "-"
     */
    auth_request_header: {
      /**
       * 鉴权请求头是否包含用户请求头。取值如下所示：
       * - `exclude`：表示鉴权请求头中不包含任何用户请求头。
       * - `include`：表示鉴权请求头中包含所有用户请求头。
       * - `includePart`：表示鉴权请求头包含指定的用户请求头。
       * @example "exclude"
       */
      action: string;
      /**
       * 表示鉴权请求中额外的请求头设置。您最多可以设置 50 个请求头。
       * @example "-"
       */
      header: {
        /**
         * 您需要设置的请求头。请求头不能是 host，长度不能超过 1,024 个字符，并且不区分大小写。请求头可以包含除了以下字符的可打印 ASCII 字符： 下划线（_）、双引号（"）、空格、Delete（ASCII code 127）
         * @example "header1"
         */
        key: string;
        /**
         * 表示请求头的值。取值如下所示：
         * - 当 `ValueType` 是 `constant` 时，您需要指定一个常量值。该常量值的长度不能超过 1,024 个字符，并且区分大小写。同时，该常量值不能以美元符号（$）开头，可以包含除了以下字符的可打印 ASCII 字符： 双引号（"）、Delete（ASCII code 127）
         * - 当 `ValueType` 是 `variable` 时，表示请求头的值来自一个变量。您可以指定该变量列表中的变量。
         * @example "constant"
         */
        value: string;
        /**
         * 请求头的类型。取值如下所示：
         * - `constant`：表示请求头的值是一个常量。您需要在 `Value` 参数中指定该常量的值。
         * - `variable`：表示请求头的值来自一个变量。参见 `Value` 的说明。
         * @example "h"
         */
        value_type: string;
      }[];
      /**
       * 鉴权请求中 HOST 头部的值。该参数的默认值是 `default`，表示 HOST 头部的值与您的加速域名相同。
       * @example "default"
       */
      host: string;
      /**
       * 表示 Action 参数所对应的参数值，长度不能超过 1,024 个字符。该参数有以下说明：
       * - 如果 `Action` 是 `exclude` 或 `include`，`Value` 必须是 `*`。
       * - 如果 `Action` 是 `includePart`，`Value` 参数的取值是用户请求中的一个或者多个头部。多个头部使用英文分号（;）分隔。其取值不能只是 *，可以包含除了以下字符的可打印 ASCII 字符： 下划线（_）、空格、双引号（"），Delete（ASCII code 127） 该参数的默认值是 *。
       * @example "*"
       */
      value: string;
    };
    /**
     * 鉴权请求参数设置
     * @example "-"
     */
    auth_request_query: {
      /**
       * 表示鉴权请求是否包含用户请求 URL 中的查询参数。取值如下所示：
       * - `exclude`：表示鉴权请求不包含任何查询参数。
       * - `include`：表示鉴权请求包含所有查询参数。
       * - `includePart`：表示鉴权请求包含指定的查询参数。
       * @example "includePart"
       */
      action: string;
      /**
       * 表示鉴权请求中额外的参数设置。您最多可以设置 50 个参数。
       * @example "-"
       */
      query: {
        /**
         * 您需要设置的鉴权请求参数，长度不能超过 1,024 个字符。鉴权请求参数可以包含除了以下字符的可打印 ASCII 字符： 双引号（"）、空格、Delete（ASCII code 127）
         * @example "new_host"
         */
        key: string;
        /**
         * 鉴权请求参数的值，长度不能超过 1,024 个字符，并且区分大小写。Value 有以下取值：
         * - 当 `ValueType` 是 `constant` 时，表示鉴权请求参数的值是一个常量。您需要指定该常量值。常量值不能以美元符号（$）开头，可以包含除了以下字符的可打印 ASCII 字符： 双引号（"）、Delete（ASCII code 127）
         * - 当 `ValueType` 是 `variable` 时，表示鉴权请求参数的值来自一个变量。您可以指定该变量列表中的变量。
         * @example "host"
         */
        value: string;
        /**
         * 您在 Key 中设置的鉴权请求参数的类型。ValueType 有以下取值：
         * - `constant`：表示鉴权请求参数是一个常量。此时，您需要在 `Value` 中指定该常量的值。
         * - `variable`：表示鉴权请求参数的值来自一个变量。参见 `Value` 的说明。
         * @example "variable"
         */
        value_type: string;
      }[];
      /**
       * 表示 Action 参数所对应的参数值，长度不能超过1,024 个字符。该参数有以下说明：
       * - 如果 `Action` 是 `exclude` 或 `include`，`Value` 必须是 `*`。
       * - 如果 `Action` 是 `includePart`，您需要在 Value 参数中指定用户请求 URL 中的一个或者多个查询参数，多个查询参数使用英文分号（;）分隔。您不能指定 *。查询参数是区分大小写的，可以包含除了以下字符的可打印 ASCII 字符： 双引号（"）、空格、Delete（ASCII code 127） 该参数的默认值是 *。
       * @example "header1;header2"
       */
      value: string;
    };
    /**
     * 鉴权响应设置
     * @example "-"
     */
    auth_response: {
      /**
       * 鉴权结果缓存设置
       * @example "-"
       */
      auth_result_cache: {
        /**
         * veImageX 是否缓存鉴权状态码。取值如下所示：
         * - `nocache`：veImageX 不缓存鉴权状态码。
         * - `cache`：veImageX 缓存鉴权状态码。
         * @example "nocache"
         */
        action: string;
        /**
         * 缓存 key 指定了用于区分不同请求 URI 的查询参数。可以指定[变量字段说明](https://www.volcengine.com/docs/508/1171078)中的参数, 必须包含 URI。
         * @example "[$URI,$host]"
         */
        cache_key: string[];
        /**
         * 鉴权状态码的缓存时间。单位是秒。取值范围是 [1,86400]。86400 秒表示 24 小时。
         * @example 5
         */
        ttl: number;
      };
      /**
       * 鉴权服务器状态码设置
       * @example "-"
       */
      auth_server_status_code: {
        /**
         * 如果鉴权状态码既不是 FailCode，又不是 SuccessCode 时，veImageX 处理鉴权请求的方式。取值如下所示：
         * - `reject`：veImageX 认为鉴权失败。
         * - `pass`：veImageX 认为鉴权成功。
         * @example "reject"
         */
        default_action: string;
        /**
         * 指定鉴权失败时的鉴权状态码。默认值是 401。
         * - 您可以指定范围在 400-499 中的一个或者多个状态码。多个状态码使用英文分号（;）分隔。
         * - 您也可以指定 4xx 表示 400-499 中的任意一个状态码。
         * @example "407"
         */
        fail_code: string;
        /**
         * 指定鉴权成功时的鉴权状态码。默认值是 200。
         * - 您可以指定范围在 200-299 中的一个或者多个状态码。多个状态码使用英文分号（;）分隔。
         * - 您也可以指定 2xx 表示 200-299 中的任意一个状态码。
         * @example "200"
         */
        success_code: string;
      };
      /**
       * 鉴权服务超时时间
       * @example "-"
       */
      auth_server_timeout: {
        /**
         * 鉴权超时后 veImageX 处理鉴权请求的策略。取值如下所示：
         * - `reject`：veImageX 认为鉴权失败。
         * - `pass`：veImageX 认为鉴权成功。
         * @example "reject"
         */
        action: string;
        /**
         * 鉴权超时的时间，单位是毫秒。默认值为 200，取值范围是 [200,3600]。
         * @example 200
         */
        time: number;
      };
      /**
       * 响应设置
       * @example "-"
       */
      response: {
        /**
         * 鉴权失败时 veImageX 响应用户的状态码。取值范围为 [400,499] 。默认值是 403。
         * @example "403"
         */
        fail_code: string;
      };
    };
    /**
     * 鉴权服务器设置
     * @example "-"
     */
    auth_server: {
      /**
       * 鉴权服务器的主地址。主地址的格式是 \<scheme>://\<domain> 或 \<scheme>://\<ip>。该参数值的长度不能超过 100 个字符。
       * - \<scheme> 的值是 http 或者 https。
       * - \<domain> 的值不能是 localhost。
       * - \<ip> 的值不能是 127.0.0.1。
       * @example "http://www.testa.com"
       */
      address: string;
      /**
       * 鉴权服务器的备地址。地址格式和要求与主地址 `address` 相同。
       * @example "http://www.testb.com"
       */
      backup_address: string;
      /**
       * 鉴权请求的路径。鉴权地址和请求路径组成了完整的鉴权 URL。veImageX 会把用户的请求转发到该鉴权 URL。取值如下所示：
       * - `constant`：表示鉴权请求中的路径与用户请求中的路径相同。
       * - `variable`：表示您需要在 pathValue 参数中指定一个鉴权请求中的路径。
       * @example "constant"
       */
      path_type: string;
      /**
       * 表示一个鉴权请求的路径，长度不能超过 100 个字符。路径必须以斜杠（/）开头，可以包含除了以下字符的可打印 ASCII 字符： 连续斜杠（//）、百分号（%）、美元符号（$）、空格、问号（?）、Delete（ASCII code 127）
       * @example "/sig"
       */
      path_value: string;
      /**
       * 在发送鉴权请求时，veImageX 所使用的请求方法。取值如下所示：
       * - `default`：鉴权请求所使用的方法与用户的请求相同。
       * - `get`：鉴权请求使用 GET 方法。
       * - `post`：鉴权请求使用 POST 方法。
       * - `head`：鉴权请求使用 HEAD 方法。
       * @example "default"
       */
      request_method: string;
    };
    /**
     * 是否开启远程鉴权，取值如下所示：
     * - `true`：是
     * - `false`：否
     * @example "true"
     */
    enabled: boolean;
    /**
     * 生效对象
     * @example "-"
     */
    match_rule: {
      /**
       * 匹配方式，取值如下所示：
       * - `match`：（默认）表示 object 匹配 Value。
       * - `not_match`：表示 object 不匹配 Value。
       * :::tip
       * 如果您创建了多个生效对象配置，每个配置中该参数的值必须相同。
       * :::
       * @example "match"
       */
      match_operator: string;
      /**
       * 表示 veImageX 对哪些对象类型进行规则匹配。取值如下所示：
       * - `filetype`：表示特定后缀的文件。
       * - `directory`：表示特定文件目录下的所有文件。
       * - `path`：表示特定的文件。
       * @example "directory"
       */
      object: string;
      /**
       * 表示 Object 对应的具体对象，并且是大小写敏感的。参数值的长度不能超过 1,024 个字符。您可以指定一个或者多个对象。多个对象之间使用英文分号（;）分隔。该参数有以下说明：
       * - 如果 `Object` 是 `filetype`，您需要指定一个或者多个文件后缀。文件后缀可以包含英文字母和数字。多个文件后缀使用分号（;）分隔。例如 xlsx 或者 png;txt。
       * - 如果 `Object` 是 `directory`，您需要指定一个或者多个目录路径。多个目录路径使用分号（;）分隔。每个目录路径必须以斜杠（/）开头和结尾，
       * :::tip
       * 例如 /www/img/volc/;/www/doc/。您可以使用 / 表示域名下的所有目录。同时，目录路径可以包含除了以下字符的可打印 ASCII 字符： 连续斜杠（//）、百分号（%）、美元符号（$）、空格、问号（?）、Delete（ASCII code 127）
       * :::
       * - 如果 `Object` 是 `path`，您需要指定一个或者多个文件路径。文件路径支持使用通配符（*）表示一个或者多个字符。多个文件路径使用分号（;）分隔。
       * :::tip
       * 例如 /www/img/volcano.png;/doc/study.docx。文件路径必须以 / 开头。同时，文件路径可以包含除了以下字符的可打印 ASCII 字符： 连续斜杠（//）、百分号（%）、美元符号（$）、空格、问号（?）、Delete（ASCII code 127）
       * :::
       * @example "/www/img/volc/"
       */
      value: string;
    }[];
  };
  /**
   * HTTP 响应头配置
   * @example "-"
   */
  resp_hdrs?: {
    /**
     * Header Key，请见[支持配置的响应头](https://www.volcengine.com/docs/508/196704#%E6%94%AF%E6%8C%81%E9%85%8D%E7%BD%AE%E7%9A%84%E5%93%8D%E5%BA%94%E5%A4%B4)。
     * @example "Access-Control-Allow-Origin"
     */
    key: string;
    /**
     * Header Value，设置该响应头字段的值。字段值不能超过 1,024 个字符，可以包含除`美元符号（$），Delete（ASCII code 127）`外的可打印 ASCII 字符。
     * @example "*"
     */
    value: string;
  }[];
  /**
   * 共享缓存配置。共享缓存允许同账号下多个加速域名共享同一份节点上的缓存。在 veImageX 中，您可以通过设置共享缓存配置，使各个子站点之间可共享相同的公共资源，以减少带宽的使用，提高资源命中率。详细功能说明参看[共享缓存](https://www.volcengine.com/docs/508/196769)。
   *
   * :::tip
   * 共享缓存为白名单功能，请[提交工单](https://console.volcengine.com/workorder/create?step=2&SubProductID=P00000080)联系技术支持为您的账号开启配置能力。
   * :::
   * @example "-"
   */
  share_cache?: {
    /**
     * 共享域名。
     * @example "["test1.imagex.cn","test2.imagex.cn"]"
     */
    domains: string[];
  };
  /**
   * URL 鉴权配置
   * @example "-"
   */
  url_auth?: {
    /**
     * 是否开启 URL 鉴权配置，取值如下所示：
     * - `true`：是
     * - `false`：否
     * @example "true"
     */
    enabled: boolean;
    /**
     * A 鉴权配置
     * @example "-"
     */
    type_a: {
      /**
       * 备用鉴权密钥
       * @example "test"
       */
      backup_sk: string;
      /**
       * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
       * @example 1800
       */
      expire_time: number;
      /**
       * 主鉴权密钥
       * @example "SKSKSKSK"
       */
      main_sk: string;
      /**
       * md5hash 参数名
       * @example "sign"
       */
      sign_param: string;
    };
    /**
     * B 鉴权配置
     * @example "-"
     */
    type_b: {
      /**
       * 备用鉴权密钥
       * @example "test"
       */
      backup_sk: string;
      /**
       * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
       * @example 1800
       */
      expire_time: number;
      /**
       * 主鉴权密钥
       * @example "01h9dh**01h9k"
       */
      main_sk: string;
    };
    /**
     * C 鉴权配置
     * @example "-"
     */
    type_c: {
      /**
       * 备用鉴权密钥
       * @example "test"
       */
      backup_sk: string;
      /**
       * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
       * @example 1800
       */
      expire_time: number;
      /**
       * 主鉴权密钥
       * @example "01h9dh**01h9k"
       */
      main_sk: string;
    };
    /**
     * D 鉴权配置
     * @example "-"
     */
    type_d: {
      /**
       * 备用鉴权密钥
       * @example "test"
       */
      backup_sk: string;
      /**
       * 有效时间，单位为秒。取值范围为[1, 630720000]内的正整数，默认为 1800 秒。
       * @example 1800
       */
      expire_time: number;
      /**
       * 主鉴权密钥
       * @example "01h9dh**01h9k"
       */
      main_sk: string;
      /**
       * md5hash 参数名
       * @example "sign"
       */
      sign_param: string;
      /**
       * 时间戳格式，取值如下所示：
       *
       * - `decimal`：十进制（Unix 时间戳）
       * - `heximal`：十六进制（Unix 时间戳）
       * @example "decimal"
       */
      time_format: string;
      /**
       * TimeStamp 参数名
       * @example "t"
       */
      time_param: string;
    };
  };
  /**
   * UA 访问限制配置
   * @example "-"
   */
  user_agent_acl?: {
    /**
     * 表示是否允许 UA 为空或者不包含 UA 字段的请求访问加速域名。取值如下所示：
     *
     * - `true`：允许
     * - `false`：不允许
     * @example "true"
     */
    allow_empty: boolean;
    /**
     * 是否开启 UA 访问限制，取值如下所示：
     *
     * - `true`：开启
     * - `false`：未开启
     * @example "true"
     */
    enabled: boolean;
    /**
     * 黑白名单设置类型，取值如下所示：
     *
     * - `deny`：黑名单
     * - `allow`：白名单
     * deny黑名单，allow白名单
     * @example "deny"
     */
    rule_type: string;
    /**
     * Agent 列表，最多可支持输入 1000 个，支持通配符 `*` 匹配任意字符串。
     * @example "["*IE*|*safari*"]"
     */
    user_agents: string[];
  };
}

export interface UpdateImageDomainConfigQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "uh****7d"
   */
  ServiceId: string;
}

export interface UpdateImageDomainConfigRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageDomainDownloadSpeedLimitBody {
  /**
   * 域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379)接口获取域名。
   * 域名。您可以通过调用 [GetServiceDomains](https://www.volcengine.com/docs/508/9379)接口获取域名。
   * @example "a.imagex.cn"
   */
  domain: string;
  /**
   * 下载限速配置
   * 下载限速配置
   */
  download_speed_limit: {
    /**
     * 是否开启下载限速功能，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * :::tip
     * 仅当 `enabled` 为 `true` 时，`rules` 等配置项有效
     * :::
     * 是否启用。
     */
    enabled: boolean;
    /**
     * 限速规则配置
     * 参数规则。
     */
    rules: {
      /** 开始时间。 */
      begin_time: string;
      /** 星期几。 */
      day_week: string;
      /** 结束时间。 */
      end_time: string;
      /** 限速配置。 */
      limit_rate: number;
      /** 限制速率的起始点。 */
      limit_rate_after: number;
      /** 匹配类型。 */
      match_type: string;
      /** 匹配值。 */
      match_value: string;
    }[];
  };
}

export interface UpdateImageDomainDownloadSpeedLimitQuery {
  /**
   * 服务 ID。您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。您也可以通过调用 [GetAllImageServices](https://www.volcengine.com/docs/508/9360) 接口方式获取服务 ID。
   * @example "服务ID"
   */
  ServiceId: string;
}

export interface UpdateImageDomainDownloadSpeedLimitRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    /**
     * 通知描述
     * 通知描述
     * @example "submit domain:a.imagex.cn update request succeed"
     */
    msg: string;
  };
}

export interface UpdateImageDomainIPAuthBody {
  /**
   * 待修改配置的域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "example.imagex.com"
   */
  domain: string;
  /**
   * 黑白名单配置
   * @example "-"
   */
  ip_auth: {
    /**
     * 是否开启黑白名单配置，取值如下所示：
     * - `true`：开启黑白名单配置
     * - `false`：关闭黑白名单配置
     * @example "true"
     */
    enabled: boolean;
    /**
     * 是否是 IP 白名单，取值如下所示：
     * - `true`：配置白名单
     * - `false`：配置黑名单
     * @example "true"
     */
    is_white_mode: boolean;
    /**
     * 黑白名单 IP 地址，您可以指定一个或者多个 IP 地址（如 192.0.2.0）和 IP 地址网段（192.0.2.0/24）。IP 地址和网段可以是 IPv4 或 IPv6 格式，可混合填写，最多可输入 1000 个地址。
     *
     * :::warning
     * 若您需要对同类型名单内已设定的 `values` 地址进行增删处理，那么您可调用 [获取域名配置](https://www.volcengine.com/docs/508/9366#ip-auth) 接口获取已配置的全部地址列表后，在此基础上添加或删除您期望变更的地址，最后重新传入 `values`。
     * :::
     * @example "["192.0.2.0","192.0.2.0/24"]"
     */
    values: string[];
  };
}

export interface UpdateImageDomainIPAuthQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "098**ud9"
   */
  ServiceId: string;
}

export interface UpdateImageDomainIPAuthRes {
  ResponseMetadata?: {
    /** @example "UpdateImageDomainIPAuth" */
    Action?: string;
    /** @example "cn-north-1" */
    Region?: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId?: string;
    /** @example "imagex" */
    Service?: string;
    /** @example "2018-08-01" */
    Version?: string;
  };
  /** @example "ok" */
  Result?: string;
}

/** title */
export interface UpdateImageDomainUaAccessBody {
  /**
   * 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "123***.volcimagextest.com"
   */
  domain: string;
  /**
   * UA 访问限制配置。
   * @example "-"
   */
  ua_auth: {
    /**
     * 是否允许 UA 为空或者不包含 UA 字段的请求访问加速域名。取值如下所示：
     *
     * - `true`：允许
     * - `false`：不允许
     * @example "true"
     */
    allow_empty: boolean;
    /**
     * 是否开启 UA 访问限制，取值如下所示：
     *
     * - `true`：开启
     * - `false`：未开启（默认）
     * @example "true"
     */
    enable: boolean;
    /**
     * 黑白名单设置类型，取值如下所示：
     *
     * - `deny`：黑名单
     * - `allow`：白名单（默认）
     * deny黑名单，allow白名单
     * @example "deny"
     */
    rule_type: string;
    /**
     * Agent 列表，最多可支持输入 1000 个，支持通配符 `*` 匹配任意字符串。输入多个时以 `|` 分割，或者一行仅输入一个。
     *
     * :::warning
     * 若您需要对同类型名单内已设定的 Agent 列表进行增删处理，那么您可调用 [获取域名配置](https://www.volcengine.com/docs/508/9366#ua-list) 接口获取已配置的全部列表后，在此基础上添加或删除您期望变更的值，最后重新传入 `user_agents`。
     * :::
     * @example "["road"]"
     */
    user_agents: string[];
  };
}

export interface UpdateImageDomainUaAccessQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "qhc***uslz"
   */
  ServiceId: string;
}

export interface UpdateImageDomainUaAccessRes {
  ResponseMetadata?: {
    Action?: string;
    Region?: string;
    RequestId?: string;
    Service?: string;
    Version?: string;
  };
  Result?: string;
}

/** title */
export interface UpdateImageDomainVolcOriginBody {
  /**
   * 域名
   * 域名
   */
  domain: string;
  origin_config: {
    origins: {
      /**
       * 源站地址， 与 instance_type 填充的内容对应： instance_type 为 ip ，则仅可填充一条 IPv4 记录； instance_type 为 domain，则可填充一个域名，域名长度不超过 1024 个字符。
       * 与 instance_type 填充的内容对应： instance_type 为 ip ，则仅可填充一条 IPv4 记录； instance_type 为 domain，则可填充一个域名，域名长度不超过 1024 个字符。
       */
      address: string;
      /** HTTP 请求回源至对应 Address 的端口 */
      http_port: string;
      /** HTTPS 请求回源至对应 Address 的端口，修改时需要指定，取值范围为 1 ~ 65535 */
      https_port: string;
      /**
       * 源站类型 ip：IP 类型源站； domain：域名类型
       * ip：IP 类型源站； domain：域名类型
       */
      instance_type: string;
      /**
       * 回源host， 指定源站的Address维度的回源 Host 的值; 若不为空，则优先级高于域名维度的OriginHost。 若为空，则遵循域名维度的OriginHost
       * 指定源站的Address维度的回源 Host 的值; 若不为空，则优先级高于域名维度的OriginHost。 若为空，则遵循域名维度的OriginHost
       */
      origin_host: string;
      /**
       * 源站属性， primary：主源站； backup：备源站
       * primary：主源站； backup：备源站
       */
      origin_type: string;
      /**
       * 权重配置， 多源站配置场景下，权重决定了回源至对应源站的概率。  InstanceType 为 ip 时，指定当前 Address 对应的权重，取值范围为 1~1000。 InstanceType 为 domain 或 tos 时，权重默认为 1。
       * 多源站配置场景下，权重决定了回源至对应源站的概率。  InstanceType 为 ip 时，指定当前 Address 对应的权重，取值范围为 1~1000。 InstanceType 为 domain 或 tos 时，权重默认为 1。
       */
      weight: string;
    }[];
  };
  /** 回源host */
  origin_host: string;
  /**
   * 回源协议, 回源协议配置存在以下三种情况： http：用户侧发起 HTTP 及 HTTPS 请求均会使用 HTTP 回源； https：用户侧发起的 HTTP 及 HTTPS 请求均会使用 HTTPS 回源； followclient：用户侧发起的 HTTP 请求使用 HTTP 回源，发起的 HTTPS 请求使用 HTTPS 回源。
   * 回源协议配置，存在以下三种情况： http：用户侧发起 HTTP 及 HTTPS 请求均会使用 HTTP 回源； https：用户侧发起的 HTTP 及 HTTPS 请求均会使用 HTTPS 回源； followclient：用户侧发起的 HTTP 请求使用 HTTP 回源，发起的 HTTPS 请求使用 HTTPS 回源。
   */
  origin_protocol: string;
  /** 分片回源 */
  origin_range: boolean;
  /** 是否使用ImageX源站 */
  use_imagex: boolean;
}

export interface UpdateImageDomainVolcOriginQuery {
  /** 服务ID */
  ServiceId: string;
}

export interface UpdateImageDomainVolcOriginRes {
  ResponseMetadata?: {
    Action?: string;
    Region?: string;
    RequestId?: string;
    Service?: string;
    Version?: string;
  };
  Result?: string;
}

export interface UpdateImageExifDataBody {
  /**
   * 指定图片的处理操作，最多支持填写 50 条。
   * 修改操作
   * @example "-"
   */
  Actions: {
    /**
     * 仅当 `Type` 取值为 `Delete/Modify` 时，为必填。
     *
     * 指定要处理的 Tag 名称，仅支持对[列表](#使用说明)内的标签进行处理。
     * Tag名
     * @example "tag1"
     */
    TagName?: string;
    /**
     * 仅当 `Type` 取值为 `Modify` 时，为必填。
     *
     * 指定新增/修改后 Tag 的内容，最大为 1024 字节。
     * :::tip
     * - 若原图中 `TagName` 内容为空，则表示新增内容；
     * - 若原图中 `TagName` 存在已有内容，则表示更新内容。
     * :::
     * Tag值
     * @example "val1"
     */
    TagValue?: string;
    /**
     * 指定图片的处理类型，取值如下所示：
     * - `Delete`：删除指定 Tag 的内容
     * - `DeleteAll`：删除所有 Tag 的内容
     * - `Modify`：修改指定 Tag 的内容
     * 修改类型
     * @example "Modify"
     */
    Type: string;
  }[];
  /**
   * 指定修改后图片的文件名。最大长度限制为 180 个字节，不传则随机生成一个文件名。输入限制如下所示：
   *
   * - 不支持空格，如果中间有空格将会导致重命名失败。
   * - 不支持以/开头或结尾，不支持/连续出现。
   *
   * :::warning
   * 若指定的文件名已存在，那么当在服务维度开启[重名覆盖上传](https://www.volcengine.com/docs/508/1119912)时，将覆盖原文件，否则接口将返回失败。
   * :::
   * 目标Key
   * @example "new_key"
   */
  DstKey?: string;
  /**
   * 原图存储 URI。您可以通过调用[获取服务下的上传文件](https://www.volcengine.com/docs/508/9392)来获取所需的图片存储 URI。
   * 原图URI
   * @example "tos-cn-i-8h**01/old_key.png"
   */
  StoreUri: string;
}

export interface UpdateImageExifDataQuery {
  /**
   * 待修改图片所在的服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**01"
   */
  ServiceId: string;
}

export interface UpdateImageExifDataRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result: {
    /**
     * 处理成功后图片的存储 URI。
     * 存储URI
     * @example "tos-cn-i-8h**01/new_key"
     */
    DstUri: string;
  };
}

export interface UpdateImageFileCTBody {
  /**
   * 设置更新后的 Content-Type 值。
   * :::tip
   * 请确保更新后的 Content-Type，在服务维度设置的 Content-Type 白名单内。
   * :::
   * @example "image/jpeg"
   */
  StorageContentType: string;
  /**
   * 待更新文件的存储 URI，您可以通过调用[获取服务下的上传文件](https://www.volcengine.com/docs/508/9392)来获取所需的文件 URI。
   * @example "tos-cn-i-5s**fo/Example/imagex.png"
   */
  StoreUri: string;
}

export interface UpdateImageFileCTQuery {
  /**
   * 待更新文件所在的服务 ID。
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "5s**fo"
   */
  ServiceId: string;
}

export interface UpdateImageFileCTRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

/** 描述 */
export interface UpdateImageFileKeyBody {
  /**
   * 重命名后的文件名，存储 Key 详细命名规范请参看 [veImageX 存储 Key 通用字符规则](https://www.volcengine.com/docs/508/1458331)。
   * 重命名后的文件名。输入限制如下所示：
   *
   * - 不支持空格，如果中间有空格将会导致重命名失败。
   * - 不支持以/开头或结尾，不支持/连续出现，Key 值最大长度限制为 180 个字节。
   * @example "image"
   */
  DstKey: string;
  /**
   * 源文件名，即上传文件的存储 Key。
   * 源文件名，即上传文件的 storekey。
   * @example "bb6d0430d***7feac525023d52"
   */
  OriKey: string;
}

export interface UpdateImageFileKeyQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface UpdateImageFileKeyRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageMirrorConfBody {
  /** 镜像回源下载原图时，携带的 HTTP 头部，键值都为 String 类型。 */
  Headers: Record<string, string>;
  /** 镜像回源域名。 */
  Host: string;
  /**
   * 带权重回源域名。key 为 String 类型，代表镜像回源域名；value 为 Integer 类型，代表域名权重。
   * @example "{ "www.pic1.com": 95, "www.pic2.com": 5 }"
   */
  Hosts?: Record<string, number>;
  /** 镜像站 */
  Origin?: {
    /** 镜像站配置 */
    Param: Record<string, Record<string, unknown>>;
    /** 镜像站类型 */
    Type: string;
  };
  /**
   * 下载图片的协议，取值为：http、https。
   * @example "https"
   */
  Schema: string;
  /**
   * 镜像源 URI，其中图片名用 %s 占位符替代，比如/obj/%s。
   * @example "/obj/%s"
   */
  Source?: string;
}

export interface UpdateImageMirrorConfQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "8h**9q"
   */
  ServiceId: string;
}

export interface UpdateImageMirrorConfRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageMonitorRuleBody {
  /**
   * 更新后的报警规则，具体请见 [MonitorRule](https://www.volcengine.com/docs/508/1112183#monitorrule)。
   * @example "-"
   */
  MonitorRule: {
    /**
     * 监控的应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppID。
     * @example "82**41"
     */
    Appid: string;
    /**
     * 监测规则。
     * @example ""
     */
    Cond: {
      ItemCond: {
        /**
         * 聚合周期，单位为分钟。被监控指标在该指定周期内满足指标比较阈值且上报量满足样本量阈值时，才会触发告警。取值如下所示：
         *
         * - `5`
         * - `10`
         * @example 5
         */
        AggrInterval: number;
        /**
         * 样本量阈值。被监控指标超过该值时触发告警。
         * @example 200
         */
        CntThreshold?: number;
        /**
         * 指标取值函数，取值如下所示：
         *
         * - `max`：最大值
         * - `min`：最小值
         * - `avg`：平均值
         * - `pct25`：25峰值
         * - `pct50`：50峰值
         * - `pct90`：90峰值
         * - `pct99`：99峰值
         * - `sum`：总和
         *
         * :::tip
         * 各指标支持的函数参考 [veImageX 告警指标定义](https://www.volcengine.com/docs/508/1113944)。
         * :::
         * @example "avg"
         */
        Func: string;
        /**
         * 指标名称，取值参考 [veImageX 告警指标定义](https://www.volcengine.com/docs/508/1113944)。
         * @example "cdn_srate"
         */
        Item: string;
        /**
         * 指标比较方法，取值如下所示：
         *
         * - `LE`：小于等于
         * - `GE`：大于等于
         * - `INC`：环比上升
         * - `DEC`：环比下降
         * - `HOH_INC`：与上小时同比上升
         * - `HOH_DEC`：与上小时同比下降
         * - `DOD_INC`：与昨天同比上升
         * - `DOD_DEC`：与昨天同比下降
         * @example "LE"
         */
        Op: string;
        /**
         * 持续周期，当监控指标在聚合周期内，连续`RepeatCnt`次满足指标比较阈值且上报量满足样本量阈值时，才会触发告警。取值如下所示：
         *
         * - `1`
         * - `3`
         * - `5`
         * @example 3
         */
        RepeatCnt: number;
        /**
         * 指标比较阈值，需要与 `CntThreshold` 同时被满足才会触发告警。
         * @example 50
         */
        Threshold: number;
      }[];
      /**
       * 多条监控规则之间的逻辑关系，取值如下所示：
       *
       * - `and`：且。表示有多条监控规则时，需满足所有监控规则才会触发告警通知。
       * - `or`：或。表示有多条监控规则时，满足其中一条监控规则就会触发告警通知。
       * @example "and"
       */
      LogicOp: string;
    };
    /**
     * 创建后是否立即开启告警，取值如下所示：
     *
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    Enabled: boolean;
    /**
     * 维度过滤条件，具体参数请见 [Filter](https://www.volcengine.com/docs/508/1112182#filter)。用于指定需要告警提示的维度配置。
     * @example ""
     */
    Filter?: {
      /**
       * 过滤条件
       * @example ""
       */
      DimFilter: {
        /**
         * 维度名称，由[公共过滤维度](https://www.volcengine.com/docs/508/1113944)和[自定义过滤维度](https://www.volcengine.com/docs/508/34554)组合而成。
         * @example "ImageType"
         */
        Dim: string;
        /**
         * 纬度值是否取反，取值如下所示：
         *
         * - `true`：指定维度的实际值不得满足 `Vals` 所有指定值
         * - `false`：（默认）维度值等于 `Vals` 中之一即可
         * @example "false"
         */
        Not?: boolean;
        /**
         * 维度取值，您可以通过调用[获取自定义维度值](https://www.volcengine.com/docs/508/34555)来获取。
         * @example "png"
         */
        Vals: string[];
      }[];
      /**
       * 过滤条件之间的逻辑关系，取值如下所示：
       *
       * - `and`：和
       * - `or`：或
       * @example "or"
       */
      LogicOp: string;
    };
    /**
     * 监控频率，单位为分钟。取值如下所示：
     *
     * - `5`
     * - `10`
     * - `20`
     * - `30`
     * - `40`
     * - `50`
     * @example 5
     */
    Frequency: number;
    /**
     * 拆分维度，由[公共拆分维度](https://www.volcengine.com/docs/508/1113944)和[自定义拆分维度](https://www.volcengine.com/docs/508/34554)组合而成。
     * @example "AppVer"
     */
    GroupBy?: string;
    /**
     * 告警级别，取值如下所示：
     *
     * - `warn`：警告
     * - `error`：错误
     * - `fatal`：致命
     * @example "warn"
     */
    Level: string;
    /**
     * 自定义告警规则名称
     * @example "test"
     */
    Name: string;
    /**
     * 告警通知配置。
     * @example ""
     */
    Notification: {
      /**
       * 回调地址，`Mode` 包含 `http_callback`时，为必填。
       * @example "http://test.com"
       */
      CallbackUrl?: string;
      /**
       * 通知内容模板，模板中变量格式为 `$Name$`。Name 取值如下所示：
       *
       * - `报警名称`
       * - `报警级别`
       * - `报警App`
       * - `报警平台`
       * - `报警时间`
       * - `报警内容`
       * @example "```
       * 告警名称：$报警名称$
       * 告警级别：$报警级别$
       * 告警App：$报警App$
       * 告警平台：$报警平台$
       * 告警时间：$报警时间$
       * 告警内容：$报警内容$
       * ```"
       */
      Content: string;
      /**
       * 通知方式，仅支持取值 `http_callback`，表示回调。
       * @example "http_callback"
       */
      Mode: string[];
      /**
       * 沉默周期，单位为分钟。告警发生后，若未恢复正常，则会间隔一个沉默周期后再次重复发送一次告警通知。取值如下所示：
       *
       * - `0`
       * - `30`
       * - `60`
       * - `360`
       * @example 30
       */
      SilentDur: number;
      /**
       * 告警通知标题
       * @example "【veImageX图片服务】报警通知"
       */
      Title: string;
    };
    /**
     * 监控平台，取值如下所示：
     *
     * - `iOS`
     * - `Android`
     * - `WEB`
     * @example "Android"
     */
    OS?: string;
    /**
     * 监控阶段，取值如下所示：
     *
     * - `upload`：图片上传-上传 1.0
     * - `uploadv2`：图片上传-上传 2.0
     * - `cdn`：图片加载-下行网络监控
     * - `client`：图片加载-客户端传状态监控
     * - `sensible`：图片加载-感知指标监控
     * @example "upload"
     */
    Phase: string;
    /**
     * 待更新的报警规则 ID，您可以调用 [GetImageMonitorRules](https://www.volcengine.com/docs/508/1112186)获取所需的告警规则 ID。
     * @example "i9hso020n**292hd00	"
     */
    RuleId: string;
  };
}

export interface UpdateImageMonitorRuleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageMonitorRuleStatusBody {
  /**
   * 是否开启告警监测，取值如下所示：
   *
   * - `true`：开启
   * - `false`：不开启
   * @example "false"
   */
  Enabled: boolean;
  /**
   * 待更新的告警规则 ID，您可以调用 [GetImageMonitorRules](https://www.volcengine.com/docs/508/1112186)获取所需的告警规则 ID。
   * @example "h192a1****8i01"
   */
  RuleId: string;
}

export interface UpdateImageMonitorRuleStatusRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageObjectAccessBody {
  /**
   * 是否开启源地址访问，取值如下所示：
   * * `true`：开启源地址访问
   * * `false`：关闭源地址访问
   * @example "false"
   */
  ObjectAccess?: boolean;
}

export interface UpdateImageObjectAccessQuery {
  /**
   * 待更新配置的服务 ID。
   * - 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "9jh**b2d"
   */
  ServiceId: string;
}

export interface UpdateImageObjectAccessRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageResourceStatusBody {
  /**
   * 待修改封禁状态的资源存储 Key（不携带 Bucket 信息），可在控制台资源管理页面查看。
   * 待修改封禁状态的资源存储 Key（不携带 Bucket 信息），可在控制台资源管理页面查看。
   * @example "demo1.png"
   */
  ObjectName: string;
  /**
   * 资源的封禁状态，取值如下所示：
   *
   * - `disable`：禁用。禁用状态，您无法访问该资源。
   * - `enable`：启用。启用状态，您可正常访问该资源。
   * 资源的封禁状态，取值如下所示：
   *
   * - `disable`：禁用。禁用状态，您无法访问该资源。
   * - `enable`：启用。启用状态，您可正常访问该资源。
   * @example "disable/enable"
   */
  Status: string;
}

export interface UpdateImageResourceStatusQuery {
  /**
   * 指定配置资源封禁的服务 ID。
   *
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "serviceid"
   */
  ServiceId: string;
}

export interface UpdateImageResourceStatusRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  Result?: Record<string, unknown>;
}

export interface UpdateImageSettingRuleBody {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "394325"
   */
  AppId: string;
  /**
   * 规则内容
   * @example "-"
   */
  Rule: {
    /**
     * 匹配条件，仅当条件匹配后规则才会生效。
     * @example "-"
     */
    Cond?: {
      /**
       * 规则条件
       * @example "-"
       */
      Conds?: {
        /**
         * 过滤维度，取值请参考[规则配置条件](https://www.volcengine.com/docs/508/65940#%E8%A7%84%E5%88%99%E9%85%8D%E7%BD%AE%E6%9D%A1%E4%BB%B6)。
         * @example "OS"
         */
        Key?: string;
        /**
         * 操作符。支持取值：==、!=、>、>=、<、<=、in
         * @example "=="
         */
        Op?: string;
        /**
         * 配置值。`Op`为`in`时，为 Array of String 类型，否则为 String 类型。
         * 类型由 Op 决定，此处是为了方便生成 SDK
         * @example "iOS"
         */
        Value?: Record<string, unknown>;
      }[];
      /**
       * 匹配条件，取值如下所示：
       * - `AND`：表示与
       * - `OR`：表示或
       * @example "AND"
       */
      Type?: string;
    };
    /**
     * 规则名称，仅支持字母、数字、下划线，最多输入 32 个字符。
     * @example "test"
     */
    Name: string;
    /**
     * 配置值。
     * 由对应配置项的类型决定，此处类型是为了方便生成 SDK
     * @example "0"
     */
    Value: Record<string, unknown>;
  };
  /**
   * 待更新的规则 ID，您可以通过调用[获取规则列表](https://www.volcengine.com/docs/508/1324618)的方式获取所需的规则 ID。
   * @example "R****d"
   */
  RuleId: string;
  /**
   * 配置项 ID，您可以通过[调用获取配置项列表](https://www.volcengine.com/docs/508/1324617)的方式获取所需的配置项 ID。
   * @example "S****4"
   */
  SettingId: string;
}

export interface UpdateImageSettingRulePriorityBody {
  /**
   * 应用 ID，您可以通过调用[获取应用列表](https://www.volcengine.com/docs/508/19511)的方式获取所需的 AppId。
   * @example "179132"
   */
  AppId: string;
  /**
   * 更新后的优先级信息。
   * @example "-"
   */
  Priorities: {
    /**
     * 规则优先级。
     * :::tip
     * 如果配置项下创建了多个规则，需要填写全部规则更新后的优先级。
     * :::
     * @example 1
     */
    Priority: number;
    /**
     * 待更新优先级的规则 ID，您可以通过调用[获取规则列表](https://www.volcengine.com/docs/508/1324618)的方式获取所需的规则 ID。
     * @example "R-d7b5625e-bdf1-40be-916d-c3fb3406b405"
     */
    RuleId: string;
  }[];
  /**
   * 配置项 ID，您可以通过[调用获取配置项列表](https://www.volcengine.com/docs/508/1324617)的方式获取所需的配置项 ID。
   * @example "S-6c040a73-7f60-44f7-b3d0-d13942dcc752"
   */
  SettingId: string;
}

export interface UpdateImageSettingRulePriorityRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "UpdateImageSettingRulePriority"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: Record<string, unknown>;
}

export interface UpdateImageSettingRuleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageStorageTTLBody {
  /**
   * 服务 ID 。
   * * 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   */
  ServiceId: string;
  /**
   * 更新后的有效期时间。单位为秒，取值范围为 [86400, 7776000]。
   * 若取值超过整天，则默认向上取整，例如当`TTL`取值为`86401`时，实际有效期被设置为 2 天。
   */
  TTL: number;
}

export interface UpdateImageStorageTTLRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "UpdateImageStorageTTL"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "201806041104200100100232280022D30"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateImageStyleBody {
  /**
   * 是否执行对上传图像的样式渲染和渲染结果图上传操作，默认为``。取值如下所示：
   * * true：将所有已上传至该样式的图像以更新后的样式数据进行重新处理，并将结果图上传至该样式所绑定服务的存储中。其更新后的结果图 Uri 请在[获取样式详情](https://www.volcengine.com/docs/508/127401)中获取。
   * * false：（默认）不执行上述操作。
   * :::tip
   * 建议您仅在手动保存样式或关闭当前页面时指定`DoUpload`为`TRUE`，可节省后端渲染成本。
   * :::
   * @example "false"
   */
  DoUpload?: boolean;
  /**
   * 更新的样式结构，包含图片编辑、文字编辑、背景等自定义参数配置，具体请参考[样式结构](https://www.volcengine.com/docs/508/127402)。
   * @example "-"
   */
  Style: Record<string, unknown>;
}

/** title */
export interface UpdateImageStyleMetaBody {
  /**
   * 更新后的样式名称。
   * @example "test1"
   */
  Name: string;
  /**
   * 待更新的样式 ID。
   * @example "62d0f3e8a1520596600b786*"
   */
  StyleId: string;
}

export interface UpdateImageStyleMetaRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "UpdateImageStyleMeta"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071512581601021219801626B46052"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  /** title */
  Result?: Record<string, unknown>;
}

export interface UpdateImageStyleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "UpdateImageStyle"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /**
     * RequestID为每次API请求的唯一标识。
     * @example "2022071513305401021204519717A8DFCF"
     */
    RequestId: string;
    /**
     * 请求的服务，属于请求的公共参数。
     * @example "imagex"
     */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "2018-08-01"
     */
    Version: string;
  };
  Result?: {
    /**
     * 保留字段
     * @format base.BaseResp
     * @example ""
     */
    BaseResp?: {
      /** @example "" */
      Extra?: string;
      /**
       * @format int32
       * @default "0"
       * @example ""
       */
      StatusCode?: number;
      /**
       * @default ""
       * @example ""
       */
      StatusMessage?: string;
    };
    /** @example "" */
    CollectResult?: string;
  };
}

export interface UpdateImageTaskStrategyBody {
  /**
   * 调整后的迁移策略
   * @example "-"
   */
  RunStrategy: {
    /**
     * 源下载 QPS 限制。如取值不为空，则长度必须为 24，表示一天 24 小时内各小时的 QPS 限制值。默认无限制。
     *
     * - 取值为负值时，表示无限制
     * - 取值为 0 时，表示对应时间不允许迁移
     * @example "[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]"
     */
    ReadQps?: number[];
    /**
     * 源下载流量限制。单位为 Byte。如取值不为空，则长度必须为24，表示一天 24 小时内各小时的流量限制值。默认无限制。
     *
     * - 取值为负值时，表示无限制
     * - 取值为 0 时，表示对应时间不允许迁移
     * @example "[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400]"
     */
    ReadRate?: number[];
  };
  /**
   * 任务ID，请参考[CreateImageMigrateTask](https://www.volcengine.com/docs/508/1009929)获取返回的任务 ID。
   * @example "648c15f764f3c4abd95ad044"
   */
  TaskId: string;
}

export interface UpdateImageTaskStrategyRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

/** title */
export interface UpdateImageTranscodeQueueBody {
  /**
   * 更新后的队列回调配置
   * @example "-"
   */
  CallbackConf?: {
    /**
     * 业务自定义回调参数，将在回调消息的`callback_args`中透传出去。具体回调参数请参考[回调内容](https://www.volcengine.com/docs/508/1104726#%E5%9B%9E%E8%B0%83%E5%86%85%E5%AE%B9)。
     * @example "product id"
     */
    Args?: string;
    /**
     * 回调数据格式。取值如下所示：
     * - `XML`
     * - `JSON`（默认）
     * @example "JSON"
     */
    DataFormat?: string;
    /**
     * 回调 HTTP 请求地址，用于接收转码结果详情。支持使用 https 和 http 协议。
     * @example "https://demo.com"
     */
    Endpoint: string;
    /**
     * 回调方式。仅支持取值 `HTTP`。
     * @example "HTTP"
     */
    Method: string;
  };
  /**
   * 更新后的队列描述
   * @example "离线转码"
   */
  Desc?: string;
  /**
   * 是否启用回调。取值如下所示：
   * - `true`：启用
   * - `false`：不启用
   * @example "true"
   */
  EnableCallback: boolean;
  /**
   * 待更新的队列 ID，您可通过调用[GetImageTranscodeQueues](https://www.volcengine.com/docs/508/1107341)获取该账号下全部任务队列 ID。
   * @example "649a9dbc32d22064d44cf5b0"
   */
  Id: string;
  /**
   * 更新后的队列名称
   * @example "offline"
   */
  Name: string;
}

export interface UpdateImageTranscodeQueueRes {
  ResponseMetadata: {
    /** @example "{Action}" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2023-05-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** title */
export interface UpdateImageTranscodeQueueStatusBody {
  /**
   * 待更新的队列 ID，您可通过调用[GetImageTranscodeQueues](https://www.volcengine.com/docs/508/1107341)获取该账号下全部任务队列 ID。
   * @example "649a9dbc32**64d44cf5b0"
   */
  Id: string;
  /**
   * 更新后的队列状态。取值如下所示：
   * - `Pending`：排队中
   * - `Running`：执行中
   * @example "Pnding"
   */
  Status: string;
}

export interface UpdateImageTranscodeQueueStatusRes {
  ResponseMetadata: {
    /** @example "UpdateImageTranscodeQueueStatus" */
    Action: string;
    /** @example "cn-north-1" */
    Region: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId: string;
    /** @example "imagex" */
    Service: string;
    /** @example "2018-08-01" */
    Version: string;
  };
  Result: Record<string, unknown>;
}

/** 描述 */
export interface UpdateImageUploadFilesBody {
  /**
   * 更新操作。
   *
   * - 取值为 `0` 表示刷新 URL
   * - 取值为 `1` 表示禁用 URL
   * - 取值为 `2` 表示解禁 URL
   * - 取值为 `4` 表示预热 URL
   * - 取值为 `5` 表示目录刷新
   * - 取值为 `6` 表示样式刷新
   */
  Action: number;
  /**
   * 待操作的图片 URL 列表，最多传 100 个。
   *
   * - 当 [Action] 取值为 `5` 时，表示待刷新的目录列表，目录必须以 `/` 结尾，不支持刷新根目录，也不支持海外域名;
   * - 当 [Action] 取值为 `6` 时，表示样式刷新，一次性最多传入 5 个 url，单个 url 最多匹配10万个样式，暂不支持海外使用。
   */
  ImageUrls: string[];
}

export interface UpdateImageUploadFilesQuery {
  /**
   * 服务 ID。
   * @example "balabala"
   */
  ServiceId: string;
}

export interface UpdateImageUploadFilesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: {
    FailUrls: string[];
    /** 操作成功的图片 URL 列表。 */
    ImageUrls: string[];
  };
}

export interface UpdateImageUploadOverwriteBody {
  /**
   * 是否开启重名覆盖上传，取值如下所示：
   * - `true`：开启
   * - `false`：关闭
   * @example "true"
   */
  UploadOverwrite: boolean;
}

export interface UpdateImageUploadOverwriteQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[GetAllImageServices](https://www.volcengine.com/docs/508/9360)。
   * @example "7f****3"
   */
  ServiceId: string;
}

export interface UpdateImageUploadOverwriteRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateReferBody {
  /**
   * 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "http://test.com"
   */
  domain: string;
  /**
   * Referer 配置
   * @example "-"
   */
  refer_link: {
    /**
     * 是否允许空 Referer 访问，取值如下所示：
     * - `true`：允许
     * - `false`：不允许
     * @example "false"
     */
    allow_empty_refer?: boolean;
    /**
     * 是否开启 Referer 访问限制，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    enabled?: boolean;
    /**
     * 是否选择白名单模式，取值如下所示：
     * - `true`：选择白名单
     * - `false`：选择黑名单
     * @example "true"
     */
    is_white_mode?: boolean;
    /**
     * Referer 的正则表达式的列表，仅支持填写 IPv4 和 IPv6 格式的 IP 地址，参数长度范围为（1，1024）。不支持域名、泛域名、CIDR 网段。最多支持设置 100 条规则。
     * @example "["192\.23\.1\.8\b"]"
     */
    regex_values?: string[];
    /**
     * 是否启用正则表达列表，取值如下所示：
     * - `true`：启用
     * - `false`：不启用
     * @example "true"
     */
    regex_values_enabled?: boolean;
    /**
     * Referer 通用规则列表，根据是否为白名单，为对应的白/黑名单的值。您可以指定一个或者多个 IP 地址，域名和泛域名。支持填写二级域名，支持混合输入。
     * - IP 地址格式支持 IPv4 和 IPv6，最多可输入 1000 个 IP 地址。
     * - 域名无需包含`http://` 或 `https://`。
     *
     * :::tip
     * - `values` 和 `regex_valses` 均存在时，两者同时生效。
     * - 若您需要对同类型名单内已设定的 `values` 地址进行增删处理，那么您可调用 [获取域名配置](https://www.volcengine.com/docs/508/9366#refer-link) 接口获取已配置的全部地址列表后，在此基础上添加或删除您期望变更的值，最后重新传入 `values`。
     * :::
     * @example "["test.example.com", "*.example.com", "10.0.0.1"]"
     */
    values?: string[];
  };
}

export interface UpdateReferQuery {
  /**
   * 服务 ID。
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "9h**09"
   */
  ServiceId: string;
}

export interface UpdateReferRes {
  ResponseMetadata?: {
    /** @example "UpdateRefer" */
    Action?: string;
    /** @example "cn-north-1" */
    Region?: string;
    /** @example "201806041104200100100232280022D30" */
    RequestId?: string;
    /** @example "imagex" */
    Service?: string;
    /** @example "2018-08-01" */
    Version?: string;
  };
  /** @example "ok" */
  Result?: string;
}

export interface UpdateResEventRuleBody {
  /**
   * 事件通知规则
   * @example "-"
   */
  EventRules: {
    /**
     * 回调 URL，以 http:// 或 https:// 开头，需满足公网可访问。当事件触发时，会向该 URL 发送 HTTP POST 请求，body 为具体的事件信息。具体回调参数详见回调内容。
     * @example "https://a.callback.com"
     */
    CallbackUrl: string;
    /**
     * 规则启用状态，取值如下所示：
     * - `true`：开启
     * - `false`：关闭
     * @example "true"
     */
    Enable: boolean;
    /**
     * 事件类型。取值如下所示：
     * - `Upload`：上传文件
     * - `Delete`：删除文件
     * - `Mirror`：镜像回源
     * - `Migrate`：数据迁移
     * - `OffTrans`：离线转码（素材托管服务配置无效）
     * - `TplStore`：模板持久化存储（素材托管服务配置无效）
     * @example "upload"
     */
    EventType: string[];
    /**
     * 匹配规则的正则表达式。仅当资源的 `StoreKey` 匹配该正则表达式时触发事件通知。缺省情况下表示匹配所有资源。
     * @example "\test\.png\b"
     */
    MatchRule?: string;
  }[];
}

export interface UpdateResEventRuleQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "hj9**102"
   */
  ServiceId: string;
}

export interface UpdateResEventRuleRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateResponseHeaderBody {
  /**
   * 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "a.imagex.cn"
   */
  domain?: string;
  /** Resp Headers 配置 */
  resp_hdrs?: {
    /**
     * 在 veImageX 响应用户请求时，是否校验请求头中的 Origin 字段。仅对响应头部`Access-Control-Allow-Origin`有效，取值如下所示：
     *
     * - `true`：开启校验，veImageX 会校验 Origin 字段。
     * 	- 如果校验成功，响应头中会包含 Access-Control-Allow-Origin 字段。字段值与 Origin 字段值相同。
     * 	- 如果校验失败，响应头中不会包含 Access-Control-Allow-Origin 字段。
     * - `false`：关闭校验，veImageX 不会校验 Origin 字段。响应头中将始终包含 Access-Control-Allow-Origin 头部和您配置的值。
     * @example "true"
     */
    access_origin_control: boolean;
    /**
     * Header Key，请见[支持配置的响应头](https://www.volcengine.com/docs/508/196704#%E6%94%AF%E6%8C%81%E9%85%8D%E7%BD%AE%E7%9A%84%E5%93%8D%E5%BA%94%E5%A4%B4)。
     * @example "Access-Control-Allow-Origin"
     */
    key?: string;
    /**
     * Header Value，设置该响应头字段的值。字段值不能超过 1,024 个字符，可以包含除`美元符号（$），Delete（ASCII code 127）`外的可打印 ASCII 字符。
     * @example "*"
     */
    value?: string;
  }[];
}

export interface UpdateResponseHeaderQuery {
  /**
   * 服务 ID。
   *
   * - 您可以在veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "uh****7d"
   */
  ServiceId: string;
}

export interface UpdateResponseHeaderRes {
  ResponseMetadata?: {
    Action?: string;
    Region?: string;
    RequestId?: string;
    Service?: string;
    Version?: string;
  };
  Result?: string;
}

export interface UpdateServiceNameBody {
  /**
   * 服务名称，最多不超过 32 个字符。
   * @example "新服务"
   */
  ServiceName: string;
}

export interface UpdateServiceNameQuery {
  /**
   * 待修改名称的服务 ID。
   * * 您可以在 veImageX 控制台[服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * * 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "uh1**89i"
   */
  ServiceId: string;
}

export interface UpdateServiceNameRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateSlimConfigBody {
  /**
   * 是否关闭持久化。取值如下所示：
   *
   * - `true`：关闭
   * - `false`：开启
   * @example "false"
   */
  DiscardSlimedFile: boolean;
  /**
   * 是否开启集智瘦身，取值如下所示：
   * - `true`：开启集智瘦身
   * - `false`：关闭集智瘦身
   * @example "true"
   */
  DoSlim: boolean;
  /**
   * 域名，您可以通过[获取服务下全部域名](https://www.volcengine.com/docs/508/9379)获取服务下域名信息。
   * @example "a.image.com"
   */
  Domain: string;
}

export interface UpdateSlimConfigQuery {
  /**
   * 待修改配置的域名的所属服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "9k**82"
   */
  ServiceId: string;
}

export interface UpdateSlimConfigRes {
  ResponseMetadata?: {
    Action?: string;
    Region?: string;
    RequestId?: string;
    Service?: string;
    Version?: string;
  };
  Result?: Record<string, unknown>;
}

export interface UpdateStorageRulesBody {
  /**
   * 更新后的存储降冷策略
   * @example "-"
   */
  StorageRules?: {
    /**
     * 最新版本文件在策略命中后需要执行的操作，取值如下所示：
     * - `DELETE`：删除文件
     * - `IA`：文件转低频存储
     * - `ARCHIVE`：文件转归档存储
     * - `COLD_ARCHIVE`：文件转冷归档存储
     *
     * @example "IA"
     */
    Action: string;
    /**
     * 最新版本文件的策略天数，取值范围为 [1,365]，单位为天。按照 Event 事件 Day 天后执行 Action 事件，即当匹配文件的上传时间符合指定天数后，自动按照处理策略对资源进行处理。
     * @example 30
     */
    Day: number;
    /**
     * 是否启用策略，取值如下所示：
     * - `true`：是
     * - `false`：否
     * 是否启用。<ul><li>`false`： ；</li><li>`true`： 。</li>默认值为`false`。
     * @example "true"
     */
    Enable: boolean;
    /**
     * 策略类型，固定取值 `Upload`，表示按上传时间。
     * @example "upload"
     */
    Event: string;
    /**
     * 历史版本文件在策略命中后需要执行的操作，取值如下所示：
     *
     * - `DELETE`：删除文件
     * - `IA`：文件转低频存储
     * - `ARCHIVE`：文件转归档存储
     * - `COLD_ARCHIVE`：文件转冷归档存储
     * 非当前操作类型。
     * @example "IA"
     */
    NonCurrentAction: string;
    /**
     * 历史版本文件的策略天数，取值范围为 [1,365]，单位为天。按照 Event 事件 NonCurrentDay 天后执行 NonCurrentAction 事件，即当匹配历史版本文件的上传时间符合指定天数后，自动按照处理策略对历史版本资源进行处理。
     * 非当前日期。
     * @example 30
     */
    NonCurrentDay: number;
    /**
     * 文件前缀。例如设置为 `prefix` 后，规则将只对名称以 `prefix` 开头的存储资源生效。输入规则如下：
     * - 不能以正斜线（/）或者反斜线（\）开头；
     * - 不支持使用正则表达式匹配前缀；
     * - 长度为 1～1024 个字符。
     * @example "prefix"
     */
    Prefix?: string;
  }[];
}

export interface UpdateStorageRulesQuery {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   * @example "7s**0l"
   */
  ServiceId: string;
}

export interface UpdateStorageRulesRes {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestID为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

export interface UpdateStorageRulesV2Body {
  /** 存储规则。 */
  StorageRules?: {
    /** 中止未完成的分段上传配置。 */
    AbortIncompleteMultipartUpload?: {
      /** 分片过期时间 */
      DaysAfterInitiation?: number;
    };
    /** 是否启用。 */
    Enable: boolean;
    /** 事件名称，目前仅支持upload */
    Event: string;
    /** 过期时间。过期后会删除文件。过期时间要小于Transitions中天数，另外不能与Transitions里混用Day与Date */
    Expiration?: {
      /** 过期日期。与day冲突 */
      Date?: string;
      /** 过期天数。与date冲突 */
      Days?: number;
    };
    /** 过滤条件。 */
    Filter?: {
      /** 是否包含大于等于。 */
      GreaterThanIncludeEqual?: string;
      /** 小于等于条件。 */
      LessThanIncludeEqual?: string;
      /** 对象大小大于。 */
      ObjectSizeGreaterThan?: number;
      /** 对象大小上限。 */
      ObjectSizeLessThan?: number;
    };
    /** 规则名称，长度256以内 */
    Id: string;
    /** 多版本过期配置。过期后会删除旧版本文件。 */
    NonCurrentVersionExpiration?: {
      /** 日期，只填写年月日，无法指定时分秒 */
      NonCurrentDate?: string;
      /** 多版本过期天数。 */
      NonCurrentDays?: number;
    };
    /** 非当前版本转换规则。要么全部days要么全部date，不能混合配置 */
    NonCurrentVersionTransitions?: {
      /** 日期，只填写年月日，无法指定时分秒 */
      NonCurrentDate?: string;
      /** 非当前天数。 */
      NonCurrentDays?: number;
      /** 沉降存储类别。- IA，转为低频存储- ARCHIVE_FR，转为归档闪回存储- COLD_ARCHIVE，转为冷归档存储- ARCHIVE，转为归档存储 */
      StorageClass: string;
    }[];
    /** 文件前缀 */
    Prefix: string;
    /** 存储沉降配置，要么全部days要么全部date，不能混合配置 */
    Transitions?: {
      /** 日期。 */
      Date?: string;
      /** 天数。 */
      Days?: number;
      /**
       * 沉降存储类别。
       * - IA，转为低频存储
       * - ARCHIVE_FR，转为归档闪回存储
       * - COLD_ARCHIVE，转为冷归档存储
       * - ARCHIVE，转为归档存储
       */
      StorageClass: string;
    }[];
  }[];
}

export interface UpdateStorageRulesV2Query {
  /**
   * 服务 ID。
   * - 您可以在 veImageX 控制台 [服务管理](https://console.volcengine.com/imagex/service_manage/)页面，在创建好的图片服务中获取服务 ID。
   * - 您也可以通过 OpenAPI 的方式获取服务 ID，具体请参考[获取所有服务信息](https://www.volcengine.com/docs/508/9360)。
   */
  ServiceId: string;
}

export interface UpdateStorageRulesV2Res {
  ResponseMetadata: {
    /**
     * 请求的接口名，属于请求的公共参数。
     * @example "{Action}"
     */
    Action: string;
    /**
     * 请求的Region，例如：cn-north-1
     * @example "cn-north-1"
     */
    Region: string;
    /** RequestId为每次API请求的唯一标识。 */
    RequestId: string;
    /** 请求的服务，属于请求的公共参数。 */
    Service: string;
    /**
     * 请求的版本号，属于请求的公共参数。
     * @example "{Version}"
     */
    Version: string;
  };
  /** 视请求的接口而定 */
  Result?: Record<string, unknown>;
}

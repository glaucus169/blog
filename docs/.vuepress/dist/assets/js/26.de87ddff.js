(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{468:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"关于消息中间件mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于消息中间件mq"}},[s._v("#")]),s._v(" 关于消息中间件MQ")]),s._v(" "),t("p",[t("strong",[s._v("本文以RabbitMQ为例")])]),s._v(" "),t("h2",{attrs:{id:"_1-为什么要使用mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要使用mq"}},[s._v("#")]),s._v(" 1.为什么要使用MQ")]),s._v(" "),t("p",[s._v("这个问题也可以理解为MQ的作用,MQ的作用:")]),s._v(" "),t("ul",[t("li",[s._v("异步:系统A中产生的一个数据,另外的系统BCD都需要对数据进行操作,不引入MQ时可以用A依次调用BCD的接口进行数据处理,这也就会耗费大量的时间,对于前台是无法接受的.如果引入MQ,可以将A系统的数据写入MQ,其他系统分别去消费数据,可以大大节省时间,优化体验")]),s._v(" "),t("li",[s._v("解耦:如上面所说的,不使用MQ时,需要在A系统的代码里分别调用BCD的接口,如果BCD的服务宕机就会对A系统产生影响,又或者BCD系统如果后期不需要这个数据了,那就要删除A系统中对应的代码,如果要增加E服务处理A的数据,那又要增加相应的E系统的代码,耦合严重.如果引入MQ,系统中不会存在太大影响,就算其他系统宕机,也不会对A产生影响")]),s._v(" "),t("li",[s._v("削峰:在高并发的情况下,如秒杀抢购活动,会在短时间内有大量请求涌入,如果流量太大,超过了系统的处理能力,可能就会导致我们的系统,数据库崩溃,可以将用户请求写入MQ,按照系统最大承载能力去处理请求,超过一定的阈值就将请求丢弃或给出错误提示")])]),s._v(" "),t("h2",{attrs:{id:"_2-消息队列的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息队列的优缺点"}},[s._v("#")]),s._v(" 2.消息队列的优缺点")]),s._v(" "),t("p",[s._v("优点：")]),s._v(" "),t("ul",[t("li",[s._v("对结构复杂的操作进行解耦，降低了系统的维护成本")]),s._v(" "),t("li",[s._v("对一个可以异步进行的操作进行异步化，可以减少响应时间")]),s._v(" "),t("li",[s._v("对高并发请求进行削峰，保证系统稳定性")])]),s._v(" "),t("p",[s._v("缺点：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("系统复杂度提高。需要考虑MQ的各种情况，如消息丢失，重复消费，顺序消费等")])]),s._v(" "),t("li",[t("p",[s._v("一致性问题。如A系统返回了成功的结果，BC系统成功了但D系统失败了")])]),s._v(" "),t("li",[t("p",[s._v("系统可用性问题。如果MQ宕机，可能会导致系统的崩溃")])])]),s._v(" "),t("h2",{attrs:{id:"_3-如何保证消息队列高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何保证消息队列高可用"}},[s._v("#")]),s._v(" 3.如何保证消息队列高可用")]),s._v(" "),t("p",[s._v("RabbitMQ有三种模式：单机、普通集群、镜像集群")]),s._v(" "),t("p",[s._v("**普通集群：**就是在多台服务器上启动多个rabbitmq实例，但是创建的队列只会放在一个rabbitmq实例中，其他的实例会同步这个队列的元数据。消费的时候如果连接了另一个实例，也会从拥有队列的那个实例获取消息然后返回。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://io.storyxc.com/8494967-4832d2e63865764d.webp",alt:"84949674832d2e63865764d.webp"}})]),s._v(" "),t("p",[s._v("这种方案并不能做到高可用")]),s._v(" "),t("p",[s._v("**镜像集群：**真正的高可用模式，创建的queue无论元数据还是消息数据都存放在多个实例中，每次写消息到queue时，都会自动把消息同步到多个queue中。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://io.storyxc.com/8494967-3a4af86b205cebcf.webp",alt:"84949673a4af86b205cebcf.webp"}})]),s._v(" "),t("p",[s._v("优点：实现了高可用，任何一台机器宕机，其他机器能继续使用")]),s._v(" "),t("p",[s._v("缺点：1、性能消耗较大，所有机器都要进行消息同步  2、没有扩展性，如果有一个queue负载很重，就算增加机器，新增的机器也包含这个queue的全部数据，")]),s._v(" "),t("h2",{attrs:{id:"_4-如何保证消息不重复消费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何保证消息不重复消费"}},[s._v("#")]),s._v(" 4.如何保证消息不重复消费")]),s._v(" "),t("p",[s._v("保证消费的幂等性,让每条消息带一个全局唯一的bizId,具体过程:")]),s._v(" "),t("p",[s._v("1、消费者获取消息后先根据redis/db是否有该消息")]),s._v(" "),t("p",[s._v("2、如果不存在，则正常消费，消费完毕后写入redis/db")]),s._v(" "),t("p",[s._v("3、如果已经存在，证明已经消费过，直接丢弃")]),s._v(" "),t("h2",{attrs:{id:"_5-如何保证消息不丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何保证消息不丢失"}},[s._v("#")]),s._v(" 5.如何保证消息不丢失")]),s._v(" "),t("p",[s._v("原则：数据不能多也不能少，不能多是指不重复消费，不能少是指不能丢数据")]),s._v(" "),t("p",[s._v("丢失数据场景：")]),s._v(" "),t("ul",[t("li",[s._v("生产者丢失数据：生产者发送数据到mq时可能因为网络波动丢失数据")]),s._v(" "),t("li",[s._v("rabbitmq丢失数据：如果没有开启rabbitmq持久化，一旦mq重启，数据就丢了")]),s._v(" "),t("li",[s._v("消费者丢失数据：消费者刚消费到还没开始处理，消费者就挂掉了，重启后mq就认为已经消费过了，丢掉了数据")])]),s._v(" "),t("p",[s._v("解决方案：")]),s._v(" "),t("p",[t("strong",[s._v("针对生产者丢失数据：")])]),s._v(" "),t("ul",[t("li",[s._v("rabbitmq事务，生产者发送消息前开启事务，如果消息没有发送成功生产者会收到异常报错，这时可以回滚并重试发送")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("txSelect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//发送消息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重新发送")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("**缺点：**开启事务会变成阻塞操作，造成生产者的性能和吞吐量的下降")]),s._v(" "),t("ul",[t("li",[s._v("把channel设置成confirm模式，每次写的消息都会分配一个唯一的id，如果mq接到消息就会回调生产者的接口，通知消息已经收到，如果mq接受报错，也会回调通知，这样可以重试发送数据，伪代码如下")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开启confirm模式")]),s._v("\nchannel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("confirm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//发送消息")]),s._v("\n\n在生产者服务提供一个回调接口的实现\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" messageId）"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//已经收到消息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" messageId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重发消息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("**针对mq丢失数据：**开启mq的持久化，将交换机/队列的durable设置为true，表示交换机/队列时持久化的，在服务崩溃或重启后无需重新创建")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RabbitListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n     bindings "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@QueueBinding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Queue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dynamicQueue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" autoDelete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" durable "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            exchange "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Exchange")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exchange"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" durable "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExchangeTypes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DIRECT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"routingKey"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dynamicQueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Channel")]),s._v(" channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"接收消息："')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBody")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("如果消息想从rabbitmq崩溃中回复，消息必须实现：")]),s._v(" "),t("ul",[t("li",[s._v("消息发送前，把投递模式设置为2（持久）来标记为持久消息")]),s._v(" "),t("li",[s._v("将消息发送到持久交换机")]),s._v(" "),t("li",[s._v("将消息发送到持久队列")])]),s._v(" "),t("p",[t("strong",[s._v("针对消费者丢失数据")]),s._v("：关闭消费者的autoAck机制，然后每次处理完一条消息，主动发送ack给rabbitmq，如果此时还没发送ack就宕机，mq没有收到ack消息，就会重新将消息重新分配给其他")]),s._v(" "),t("p",[s._v("强制消费者手动确认：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring.rabbitmq.listener.simple.acknowledge-mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" manual\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("消费者手动ack：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicAck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMessageProperties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDeliveryTag")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_6-如何保证消息的顺序消费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-如何保证消息的顺序消费"}},[s._v("#")]),s._v(" 6.如何保证消息的顺序消费")]),s._v(" "),t("p",[s._v("一个queue一个consumer")]),s._v(" "),t("h2",{attrs:{id:"_7-消息积压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-消息积压"}},[s._v("#")]),s._v(" 7.消息积压")]),s._v(" "),t("p",[s._v("1.先修复consumer的问题,确保恢复消费速度,然后停掉所有consumer")]),s._v(" "),t("p",[s._v("2.临时建立数十倍的queue")]),s._v(" "),t("p",[s._v("3.写一个临时分发的consumer程序,部署上去消费积压的消息,消费不做处理,直接轮询写入上一步建好的queue中")]),s._v(" "),t("p",[s._v("4.重新部署consumer(机器加倍),每一批consumer消费一个临时queue")])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{475:function(e,t,a){"use strict";a.r(t);var n=a(27),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nexus无法下载依赖的问题记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexus无法下载依赖的问题记录"}},[e._v("#")]),e._v(" nexus无法下载依赖的问题记录")]),e._v(" "),a("p",[e._v("maven私服突然无法下载依赖，在idea中使用命令查看下详细错误信息"),a("code",[e._v("mvn clean install -U -e -X")])]),e._v(" "),a("p",[e._v("Client报错信息：")]),e._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("Caused by: org.eclipse.aether.transfer.ArtifactTransferException: Could not transfer artifact org.springframework.boot:spring-boot:jar:2.4.1 from/to nexus (xxxxxxxxxxxxxxxxxxxxxxxxx): GET request of: org/springframework/boot/spring-boot/2.4.1/spring-boot-2.4.1.jar from nexus failed\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("Could not transfer artifact org.springframework.boot:spring-boot:jar:2.4.1 from/to nexus (xxxxxxxxxxxxxxxxxxxxxx): GET request of: org/springframework/boot/spring-boot/2.4.1/spring-boot-2.4.1.jar from nexus failed: Premature end of Content-Length delimited message body (expected: 1,302,347; received: 76,515) -> [Help 1]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("服务端错误日志：")]),e._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("2022-04-10 16:51:14,488+0800 INFO  [qtp1752276351-145] *UNKNOWN org.apache.shiro.session.mgt.AbstractValidatingSessionManager - Enabling session validation scheduler...\n2022-04-10 16:51:14,502+0800 INFO  [qtp1752276351-51] *UNKNOWN org.sonatype.nexus.internal.security.anonymous.AnonymousManagerImpl - Loaded configuration: AnonymousConfiguration{enabled=false, userId='anonymous', realmName='NexusAuthorizingRealm'}\n2022-04-10 16:51:15,233+0800 WARN  [qtp1752276351-48] deployment org.sonatype.nexus.repository.httpbridge.internal.ViewServlet - Failure servicing: GET /repository/maven-public/org/springframework/boot/spring-boot/2.4.1/spring-boot-2.4.1.jar\norg.eclipse.jetty.io.EofException: null\n\tat org.eclipse.jetty.io.ChannelEndPoint.flush(ChannelEndPoint.java:284)\n\tat org.eclipse.jetty.io.WriteFlusher.flush(WriteFlusher.java:393)\n\tat org.eclipse.jetty.io.WriteFlusher.write(WriteFlusher.java:277)\n\tat org.eclipse.jetty.io.AbstractEndPoint.write(AbstractEndPoint.java:380)\n\tat org.eclipse.jetty.server.HttpConnection$SendCallback.process(HttpConnection.java:826)\n\tat org.eclipse.jetty.util.IteratingCallback.processing(IteratingCallback.java:241)\n\tat org.eclipse.jetty.util.IteratingCallback.iterate(IteratingCallback.java:224)\n\tat org.eclipse.jetty.server.HttpConnection.send(HttpConnection.java:550)\n\tat org.eclipse.jetty.server.HttpChannel.sendResponse(HttpChannel.java:850)\n\tat org.eclipse.jetty.server.HttpChannel.write(HttpChannel.java:921)\n\tat org.eclipse.jetty.server.HttpOutput.write(HttpOutput.java:249)\n\tat org.eclipse.jetty.server.HttpOutput.write(HttpOutput.java:225)\n\tat org.eclipse.jetty.server.HttpOutput.write(HttpOutput.java:524)\n\tat com.google.common.io.ByteStreams.copy(ByteStreams.java:113)\n\tat org.sonatype.nexus.repository.view.Payload.copy(Payload.java:61)\n\tat org.sonatype.nexus.repository.view.Content.copy(Content.java:116)\n\tat org.sonatype.nexus.repository.httpbridge.internal.DefaultHttpResponseSender.send(DefaultHttpResponseSender.java:81)\n\tat org.sonatype.nexus.repository.httpbridge.internal.ViewServlet.dispatchAndSend(ViewServlet.java:228)\n\tat org.sonatype.nexus.repository.httpbridge.internal.ViewServlet.doService(ViewServlet.java:174)\n\tat org.sonatype.nexus.repository.httpbridge.internal.ViewServlet.service(ViewServlet.java:126)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:790)\n\tat com.google.inject.servlet.ServletDefinition.doServiceImpl(ServletDefinition.java:286)\n\tat com.google.inject.servlet.ServletDefinition.doService(ServletDefinition.java:276)\n\tat com.google.inject.servlet.ServletDefinition.service(ServletDefinition.java:181)\n\tat com.google.inject.servlet.DynamicServletPipeline.service(DynamicServletPipeline.java:71)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:85)\n\tat org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:112)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:61)\n\tat org.apache.shiro.web.servlet.AdviceFilter.executeChain(AdviceFilter.java:108)\n\tat org.apache.shiro.web.servlet.AdviceFilter.doFilterInternal(AdviceFilter.java:137)\n\tat org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\n\tat org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:66)\n\tat org.apache.shiro.web.servlet.AdviceFilter.executeChain(AdviceFilter.java:108)\n\tat org.apache.shiro.web.servlet.AdviceFilter.doFilterInternal(AdviceFilter.java:137)\n\tat org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\n\tat org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:66)\n\tat org.apache.shiro.web.servlet.AdviceFilter.executeChain(AdviceFilter.java:108)\n\tat org.apache.shiro.web.servlet.AdviceFilter.doFilterInternal(AdviceFilter.java:137)\n\tat org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\n\tat org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:66)\n\tat org.apache.shiro.web.servlet.AdviceFilter.executeChain(AdviceFilter.java:108)\n\tat org.apache.shiro.web.servlet.AdviceFilter.doFilterInternal(AdviceFilter.java:137)\n\tat org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\n\tat org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:66)\n\tat org.apache.shiro.web.servlet.AbstractShiroFilter.executeChain(AbstractShiroFilter.java:449)\n\tat org.sonatype.nexus.security.SecurityFilter.executeChain(SecurityFilter.java:85)\n\tat org.apache.shiro.web.servlet.AbstractShiroFilter$1.call(AbstractShiroFilter.java:365)\n\tat org.apache.shiro.subject.support.SubjectCallable.doCall(SubjectCallable.java:90)\n\tat org.apache.shiro.subject.support.SubjectCallable.call(SubjectCallable.java:83)\n\tat org.apache.shiro.subject.support.DelegatingSubject.execute(DelegatingSubject.java:383)\n\tat org.apache.shiro.web.servlet.AbstractShiroFilter.doFilterInternal(AbstractShiroFilter.java:362)\n\tat org.sonatype.nexus.security.SecurityFilter.doFilterInternal(SecurityFilter.java:101)\n\tat org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat org.sonatype.nexus.repository.httpbridge.internal.ExhaustRequestFilter.doFilter(ExhaustRequestFilter.java:80)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat com.sonatype.nexus.licensing.internal.LicensingRedirectFilter.doFilter(LicensingRedirectFilter.java:114)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat com.codahale.metrics.servlet.AbstractInstrumentedFilter.doFilter(AbstractInstrumentedFilter.java:112)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat org.sonatype.nexus.internal.web.ErrorPageFilter.doFilter(ErrorPageFilter.java:79)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat org.sonatype.nexus.internal.web.EnvironmentFilter.doFilter(EnvironmentFilter.java:101)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat org.sonatype.nexus.internal.web.HeaderPatternFilter.doFilter(HeaderPatternFilter.java:98)\n\tat com.google.inject.servlet.FilterChainInvocation.doFilter(FilterChainInvocation.java:82)\n\tat com.google.inject.servlet.DynamicFilterPipeline.dispatch(DynamicFilterPipeline.java:104)\n\tat com.google.inject.servlet.GuiceFilter.doFilter(GuiceFilter.java:135)\n\tat org.sonatype.nexus.bootstrap.osgi.DelegatingFilter.doFilter(DelegatingFilter.java:73)\n\tat org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1602)\n\tat org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:540)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:146)\n\tat org.eclipse.jetty.security.SecurityHandler.handle(SecurityHandler.java:548)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:257)\n\tat org.eclipse.jetty.server.session.SessionHandler.doHandle(SessionHandler.java:1700)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:255)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1345)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.nextScope(ScopedHandler.java:203)\n\tat org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:480)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:1667)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.nextScope(ScopedHandler.java:201)\n\tat org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1247)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:144)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat com.codahale.metrics.jetty9.InstrumentedHandler.handle(InstrumentedHandler.java:239)\n\tat org.eclipse.jetty.server.handler.HandlerCollection.handle(HandlerCollection.java:152)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:505)\n\tat org.eclipse.jetty.server.HttpChannel.handle(HttpChannel.java:370)\n\tat org.eclipse.jetty.server.HttpConnection.onFillable(HttpConnection.java:267)\n\tat org.eclipse.jetty.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)\n\tat org.eclipse.jetty.io.FillInterest.fillable(FillInterest.java:103)\n\tat org.eclipse.jetty.io.ChannelEndPoint$2.run(ChannelEndPoint.java:117)\n\tat org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.runTask(EatWhatYouKill.java:333)\n\tat org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.doProduce(EatWhatYouKill.java:310)\n\tat org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.tryProduce(EatWhatYouKill.java:168)\n\tat org.eclipse.jetty.util.thread.strategy.EatWhatYouKill.run(EatWhatYouKill.java:126)\n\tat org.eclipse.jetty.util.thread.ReservedThreadExecutor$ReservedThread.run(ReservedThreadExecutor.java:366)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:698)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$Runner.run(QueuedThreadPool.java:804)\n\tat java.lang.Thread.run(Thread.java:748)\nCaused by: java.io.IOException: Connection reset by peer\n\tat sun.nio.ch.FileDispatcherImpl.write0(Native Method)\n\tat sun.nio.ch.SocketDispatcher.write(SocketDispatcher.java:47)\n\tat sun.nio.ch.IOUtil.writeFromNativeBuffer(IOUtil.java:93)\n\tat sun.nio.ch.IOUtil.write(IOUtil.java:51)\n\tat sun.nio.ch.SocketChannelImpl.write(SocketChannelImpl.java:471)\n\tat org.eclipse.jetty.io.ChannelEndPoint.flush(ChannelEndPoint.java:262)\n\t... 102 common frames omitted\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br"),a("span",{staticClass:"line-number"},[e._v("74")]),a("br"),a("span",{staticClass:"line-number"},[e._v("75")]),a("br"),a("span",{staticClass:"line-number"},[e._v("76")]),a("br"),a("span",{staticClass:"line-number"},[e._v("77")]),a("br"),a("span",{staticClass:"line-number"},[e._v("78")]),a("br"),a("span",{staticClass:"line-number"},[e._v("79")]),a("br"),a("span",{staticClass:"line-number"},[e._v("80")]),a("br"),a("span",{staticClass:"line-number"},[e._v("81")]),a("br"),a("span",{staticClass:"line-number"},[e._v("82")]),a("br"),a("span",{staticClass:"line-number"},[e._v("83")]),a("br"),a("span",{staticClass:"line-number"},[e._v("84")]),a("br"),a("span",{staticClass:"line-number"},[e._v("85")]),a("br"),a("span",{staticClass:"line-number"},[e._v("86")]),a("br"),a("span",{staticClass:"line-number"},[e._v("87")]),a("br"),a("span",{staticClass:"line-number"},[e._v("88")]),a("br"),a("span",{staticClass:"line-number"},[e._v("89")]),a("br"),a("span",{staticClass:"line-number"},[e._v("90")]),a("br"),a("span",{staticClass:"line-number"},[e._v("91")]),a("br"),a("span",{staticClass:"line-number"},[e._v("92")]),a("br"),a("span",{staticClass:"line-number"},[e._v("93")]),a("br"),a("span",{staticClass:"line-number"},[e._v("94")]),a("br"),a("span",{staticClass:"line-number"},[e._v("95")]),a("br"),a("span",{staticClass:"line-number"},[e._v("96")]),a("br"),a("span",{staticClass:"line-number"},[e._v("97")]),a("br"),a("span",{staticClass:"line-number"},[e._v("98")]),a("br"),a("span",{staticClass:"line-number"},[e._v("99")]),a("br"),a("span",{staticClass:"line-number"},[e._v("100")]),a("br"),a("span",{staticClass:"line-number"},[e._v("101")]),a("br"),a("span",{staticClass:"line-number"},[e._v("102")]),a("br"),a("span",{staticClass:"line-number"},[e._v("103")]),a("br"),a("span",{staticClass:"line-number"},[e._v("104")]),a("br"),a("span",{staticClass:"line-number"},[e._v("105")]),a("br"),a("span",{staticClass:"line-number"},[e._v("106")]),a("br"),a("span",{staticClass:"line-number"},[e._v("107")]),a("br"),a("span",{staticClass:"line-number"},[e._v("108")]),a("br"),a("span",{staticClass:"line-number"},[e._v("109")]),a("br"),a("span",{staticClass:"line-number"},[e._v("110")]),a("br"),a("span",{staticClass:"line-number"},[e._v("111")]),a("br"),a("span",{staticClass:"line-number"},[e._v("112")]),a("br"),a("span",{staticClass:"line-number"},[e._v("113")]),a("br"),a("span",{staticClass:"line-number"},[e._v("114")]),a("br"),a("span",{staticClass:"line-number"},[e._v("115")]),a("br")])]),a("h2",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[e._v("#")]),e._v(" 解决")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://io.storyxc.com/blog/image-20220410223038569.png",alt:"image-20220410223038569"}})]),e._v(" "),a("p",[e._v("在nginx的location配置中增加"),a("code",[e._v("proxy_max_temp_file_size 0;")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
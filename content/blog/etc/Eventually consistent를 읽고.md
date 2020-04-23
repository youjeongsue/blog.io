---
title: 'EVENTUALLY CONSISTENT를 읽고.'
date: 2020-04-23 23:39:00
category: 'etc'
draft: false
---
<a href="https://queue.acm.org/detail.cfm?id=1466448" class="highlight">EVENTUALLY CONSISTENT</a>를 읽고 짧은 요약과 리뷰를 남깁니다.<dt>

클라우드 서비스를 주도하고 있는 아마존은 security, scalability, availability, performance, cost effectiveness를 적절히 유지하면서 수백명의 고객에게 서비스하기 위해 노력해왔다. 이를 위한 노력 중 하나가 data replication의 eventual consistency 모델이다. 수많은 replication 간 결과적 의존성을 보장하는 방법이다. Strong consistency 대신 더 나은 availability를 얻는다는 trade-off가 있다.<br/>

이런 consistency에 대한 고민은 오래 전부터 있었다. 모든 update를 모니터링 하던 시절부터 distributed database에 대한 논의가 이루어졌고, 본격적으로 database replication에 대한 원칙과 consistency를 보장하기 위한 방법을 고민하였다. 특히 distribution transparency, 즉 사용자가 시스템이 분산되어 있다는 것을 모르도록 하는 주제가 중요했다고 한다. 이후 인터넷이 더 발전한 뒤에는 availability에 대한 관심이 높아졌는데, Eric Brewer의 CAP 이론이 발표되며 consistency/availability/partition tolerance 간의 trade-off가 존재한다는 것이 밝혀졌다.<br/>

이때 consistency와 availability를 얻기 위해서는 network partition에 강한 시스템을 만들어야 하고, client와 storage가 같은 환경에 있어야 한다는 결론에 다른다. 하지만 큰 distributed-scale 시스템일수록 이런 가정은 불가능하고, 결과적으로 consistency와 availability를 동시에 챙기는 것은 어렵다는 결론이 생긴다. 따라서 둘 중 하나를 선택해야 하는 상황에 다다른다.<br/>

그렇다면, consistency를 보장하기 위해 client와 server는 어떤 방법을 사용할까? 먼저 client는 다양한 consistency 전략을 통해 data의 update를 모니터링한다. 여러 전략 중 eventual consistency는 weak consistency의 일종으로, 새로운 업데이트가 없을 때 결과적으로 모든 서버에서 최신의 데이터를 볼 수 있도록 보장하는 전략이다. 구체적으로는 모든 서버에 데이터를 조회하고 N개 이상이 같은 값을 반환하면 사용자에게 그 값을 보여주는 방식이라고 한다. Eventual consistency의 variation model도 여러가지 있는데, read-your-writes와 monotonic read consistency가 특히 중요하다.<br/>

한편, Server 측면에서는 n, w, r을 이용한 정족수(quorum) 규칙으로 얼만큼의 consistency를 보장할 수 있는지 알 수 있다. n개의 replica가 있을 때 모든 쓰기는 w개의 노드에서 성공해야 쓰기가 확정되고, 모든 읽기는 최소한 r개의 노드에 질의해야 한다. 여러 경우의 n, w, r 조합에 대해 어떤 상황을 나타내는지 알 수 있었다. 하지만 네트워크 중단 등의 문제로 노드 간 연결이 끊어진다면 응답 가능한 노드가 w나 r보다 적을 가능성이 있고, 더 이상 정족수를 충족할 수 없다는 문제가 있다. 이런 trade-off에 대한 고민도 필요할 것 같다.<br/>

이 글을 읽으면서, consistency와 availability에 대한 고민이 역사 속에서 어떻게 진행되어 왔는지 알게 돼서 매우 흥미로웠다. 또한 읽기와 쓰기의 관점에서 consistency와 availability의 trade-off를 더 잘 이해할 수 있게 되었다. 그리고 이렇게 많은 고민을 한 아마존이 개발한 DYNAMO도 써보고 싶다는 생각을 하게 되었다.<br/>
---
title: 'ML 프로젝트와 데이터 엔지니어링'
date: 2020-03-26 23:11:00
category: 'etc'
draft: false
---

> "실무에서 Deep Learning 프로젝트를 하다 보니, 느낀 점은.... <a class="highlight">우리가 Lab 에서 논문쓰고 있는게 아니기 때문에, Deep Learning 자체는 알려진 State of Art 접근 방식 및 해당 알고리즘의 가장 잘 알려진 github 구현체를 가져다 쓰면 되기 때문에, 큰 진입 장벽이 아니었다는 거구요. 오히려 진입 장벽은 A 부터 Z 까지..그리고 AI 의 Serving Layer 까지 그 전체를 아우르는 큰 시스템이 하나로 잘 엮이게 묶는 것이었습니다. 거의 Engineering Art 에 가깝구요... Model 하이퍼 파라미터 튜닝하는것보다, 그 모델을 다수의 동접의 사용자들에게 에러없이 동접을 버티며 Serving 하고, 그 반응이 다시 모델에 input 으로 들어가며, 운영 중 무중지로 rolling upgrade 시키는 걸 잘 구성하는게 5배 쯤 더 손이 많이가고 훨씬 고 난이도 테크닉을 필요로 했다 입니다.</a> 그러던 와중에 대용량 데이타 전처리 부에 있어서는 BigQuery 가 일부에 있어서 큰 역할을 할 수 있습니다. Data Pipe Line 에서 물리적 셔플이 많이 일어나면 안되기 때문에, IaaS 나 PaaS 는 그런 도구들과 맞물려 통일화 고려도 필요하구요."

원문 [GCP, AZURE, AWS 그리고 BigQuery, Azure ML Studio, Data Lake 에 대한 단상](http://hoondongkim.blogspot.com/search/label/Data%20Lake)

ML 프로젝트에서 엔지니어링의 중요성!
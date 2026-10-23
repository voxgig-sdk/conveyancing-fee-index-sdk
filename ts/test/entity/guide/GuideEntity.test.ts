

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ConveyancingFeeIndexSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GuideEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CONVEYANCING_FEE_INDEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('CONVEYANCING_FEE_INDEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ConveyancingFeeIndexSDK.test()
    const ent = testsdk.Guide()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ConveyancingFeeIndexSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Guide().create({"filterKey":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CONVEYANCING_FEE_INDEX_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'guide.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"filterKey":{"a":true,"h":"Filter Key","n":"filterKey","r":false,"t":"`$STRING`","key$":"filterKey","index$":0},"filterValue":{"a":true,"h":"Filter Value","n":"filterValue","r":false,"t":"`$STRING`","key$":"filterValue","index$":1},"option":{"a":true,"h":"Option","n":"option","r":false,"sh":"one option's name, else all","t":"`$STRING`","key$":"option","index$":2}},"name":"guide","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":false,"co":{"id":"POST /mcp/tools/compare_criteria","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/compare_criteria","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"compare_criteria"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["filterKey","filterValue"],"co":{"id":"POST /mcp/tools/compare_options","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/compare_options","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"compare_options"}],"t":{"req":{"filterKey":"`reqdata.filter_key`","filterValue":"`reqdata.filter_value`"},"res":"`body`"},"index$":1},{"a":true,"bf":["option"],"co":{"id":"POST /mcp/tools/compare_table","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/compare_table","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"compare_table"}],"t":{"req":{"option":"`reqdata.option`"},"res":"`body`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"guide","name__orig":"guide","Name":"Guide","name_":"guide","name-":"guide","NAME":"GUIDE","index$":1}, {"active":true,"entity":"guide","key$":"BasicGuideFlow","kind":"basic","name":"BasicGuideFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"guide_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Guide', {"POST /mcp/tools/compare_criteria":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{},"index$":1}}}},"parameters":[]},"POST /mcp/tools/compare_options":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"filterKey":{"type":"string","key$":"filterKey"},"filterValue":{"type":"string","key$":"filterValue"}},"additionalProperties":false,"index$":1}}}},"parameters":[]},"POST /mcp/tools/compare_table":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"option":{"type":"string","description":"one option's name, else all","key$":"option"}},"additionalProperties":false,"index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const guide_ref01_ent = client.Guide()
    let guide_ref01_data = setup.data.new.guide['guide_ref01']

    guide_ref01_data = (await guide_ref01_ent.create(guide_ref01_data)).data()
    assert(null != guide_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/guide/GuideTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ConveyancingFeeIndexSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['guide01','guide02','guide03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CONVEYANCING_FEE_INDEX_TEST_GUIDE_ENTID': idmap,
    'CONVEYANCING_FEE_INDEX_TEST_LIVE': 'FALSE',
    'CONVEYANCING_FEE_INDEX_TEST_EXPLAIN': 'FALSE',
    'CONVEYANCING_FEE_INDEX_APIKEY': '',
  })

  idmap = env['CONVEYANCING_FEE_INDEX_TEST_GUIDE_ENTID']

  const live = 'TRUE' === env.CONVEYANCING_FEE_INDEX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CONVEYANCING_FEE_INDEX_TEST_GUIDE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ConveyancingFeeIndexSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CONVEYANCING_FEE_INDEX_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CONVEYANCING_FEE_INDEX_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

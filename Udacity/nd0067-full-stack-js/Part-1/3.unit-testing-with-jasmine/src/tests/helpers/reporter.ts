// base file -> https://github.com/bcaudan/jasmine-spec-reporter/blob/HEAD/src/configuration.ts
/* eslint-disable */
import { DisplayProcessor, SpecReporter, StacktraceOption } from "jasmine-spec-reporter"
import SuiteInfo = jasmine.SuiteInfo

// list of display processor to customize output
class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`
  }
}

jasmine.getEnv().clearReporters()
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
)

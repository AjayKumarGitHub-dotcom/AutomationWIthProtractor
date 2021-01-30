import * as report from "cucumber-html-reporter";
import { Options } from "cucumber-html-reporter";
export class CucumberReportExtension{
    private static jsonDir = process.cwd()+"\\src\\reporting\\json";
    private static htmlDir = process.cwd()+ "\\src\\reporting\\html";
    private static jsonFile= CucumberReportExtension.jsonDir +"\\cucumber_report.json";

    public static cucumberReportOptions:Options ={
        theme:'bootstrap',
        jsonFile:CucumberReportExtension.jsonFile,
        output:CucumberReportExtension.htmlDir+"\\cucumber_reporter.html",
        reportSuiteAsScenarios:true,
        launchReport:false,
        metadata:{
            "App Version": "0.0.1",
            "Test Environment":"Testing",
            "Browser":"chrome",
            "Platform":"Windows 10",
            "Parallel":"Scenarios",
            "Executed":"Local"
        }
    };

    public static GenerateCucumberReport(){
        report.generate(this.cucumberReportOptions);
    }
}
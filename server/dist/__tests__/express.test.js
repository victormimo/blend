"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var supertest_1 = __importDefault(require("supertest"));
var api_1 = __importDefault(require("../src/api"));
describe("it should initialize express server ", function () {
    var app;
    var conn;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = express_1.default();
                    jest.useFakeTimers();
                    process.env.NODE_ENV = "test";
                    app.use(body_parser_1.default.json());
                    return [4 /*yield*/, app.use(api_1.default())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should fail on sending incorrect url as query param", function (done) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            supertest_1.default(app)
                .post("/image/capture")
                .expect(200)
                .expect("Content-Type", /application\/json/)
                .then(function (res) {
                expect(res.body.success).toBeFalsy();
                expect(res.body.error).toBe("Error: Missing URL filed, Please provide a url");
            });
            done();
            return [2 /*return*/];
        });
    }); });
    it("should fail on incorrect url paramater", function (done) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            supertest_1.default(app)
                .post("/image/capture")
                .send({ url: "thisIsnotGoodWebsite" })
                .expect(200)
                .expect("Content-Type", /application\/json/)
                .then(function (res) {
                expect(res.body.success).toBeFalsy();
                expect(res.body.error).toBe("Error: Please provide a valid url, maybe missing http:// or https://?");
            });
            done();
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vX190ZXN0c19fL2V4cHJlc3MudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFxQztBQUNyQyxvREFBMkM7QUFDM0Msd0RBQWdDO0FBRWhDLG1EQUFnQztBQUdoQyxRQUFRLENBQUMsc0NBQXNDLEVBQUU7SUFDL0MsSUFBSSxHQUFZLENBQUM7SUFDakIsSUFBSSxJQUFnQixDQUFDO0lBRXJCLFNBQVMsQ0FBQzs7OztvQkFDUixHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO29CQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzNCLHFCQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBTSxFQUFFLENBQUMsRUFBQTs7b0JBQXZCLFNBQXVCLENBQUM7Ozs7U0FDekIsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLFVBQU8sSUFBSTs7WUFDbkUsbUJBQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2lCQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUM7aUJBQzNDLElBQUksQ0FBQyxVQUFDLEdBQUc7Z0JBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDekIsZ0RBQWdELENBQ2pELENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNMLElBQUksRUFBRSxDQUFDOzs7U0FDUixDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0NBQXdDLEVBQUUsVUFBTyxJQUFJOztZQUN0RCxtQkFBTyxDQUFDLEdBQUcsQ0FBQztpQkFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxDQUFDO2lCQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUM7aUJBQzNDLElBQUksQ0FBQyxVQUFDLEdBQUc7Z0JBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDekIsdUVBQXVFLENBQ3hFLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNMLElBQUksRUFBRSxDQUFDOzs7U0FDUixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9
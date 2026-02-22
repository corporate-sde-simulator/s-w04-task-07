import { PreferenceManager } from "../src/preferenceManager";
import { ChannelRouter } from "../src/channelRouter";

describe("Notification preference manager", () => {
    test("should process valid input", () => {
        const obj = new PreferenceManager();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new PreferenceManager();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new PreferenceManager();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new ChannelRouter();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
